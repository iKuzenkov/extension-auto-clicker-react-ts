import type {
  MessageTypes,
  AutoClickerStateResponse,
} from '../src/types/content-types/MessageTypes';
import './popup.scss';

const btn = document.getElementById('toggle') as HTMLButtonElement | null;

let isOn: boolean =
  localStorage.getItem('acext-autoClickerVisible-ss') === 'true';

function updateButton(): void {
  if (!btn) return;

  btn.textContent = isOn ? 'Hide' : 'Show';
  btn.title = isOn ? 'turn off autoclick' : 'turn on autoclick';
  btn.style.backgroundColor = isOn ? 'red' : 'green';
  btn.style.color = '#fff';
}

function requestPanelState(): void {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (!tab?.id) {
      updateButton();
      return;
    }

    chrome.tabs.sendMessage(
      tab.id,
      { action: 'acext-get-auto-clicker-state-ss' } as MessageTypes,
      (response?: AutoClickerStateResponse) => {
        if (response && typeof response.autoClickerVisible === 'boolean') {
          isOn = response.autoClickerVisible;
          localStorage.setItem('acext-autoClickerVisible-ss', String(isOn));
        }

        updateButton();
      }
    );
  });
}

btn?.addEventListener('click', () => {
  isOn = !isOn;
  localStorage.setItem('acext-autoClickerVisible-ss', String(isOn));

  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (!tab?.id) return;

    const message: MessageTypes = {
      action: 'acext-toggle-auto-clicker-ss',
      autoClickerVisible: isOn,
    };

    void chrome.tabs.sendMessage(tab.id, message);
  });

  updateButton();
});

requestPanelState();
