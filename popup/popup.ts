import type { AutoClickerMessage } from '../src/global-types/MessageTypes';
import './popup.scss';

type AutoClickerStateResponse = {
  autoClickerVisible: boolean;
};

const btn = document.getElementById('toggle') as HTMLButtonElement | null;

let isOn: boolean = localStorage.getItem('autoClickerVisible') === 'true';

function updateButton(): void {
  if (!btn) return;

  btn.textContent = isOn ? 'Hide' : 'Show';
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
      { action: 'get-auto-clicker-state' } as AutoClickerMessage,
      (response?: AutoClickerStateResponse) => {
        if (response && typeof response.autoClickerVisible === 'boolean') {
          isOn = response.autoClickerVisible;
          localStorage.setItem('autoClickerVisible', String(isOn));
        }

        updateButton();
      }
    );
  });
}

btn?.addEventListener('click', () => {
  isOn = !isOn;
  localStorage.setItem('autoClickerVisible', String(isOn));

  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (!tab?.id) return;

    const message: AutoClickerMessage = {
      action: 'toggle-auto-clicker',
      autoClickerVisible: isOn,
    };

    void chrome.tabs.sendMessage(tab.id, message);
  });

  updateButton();
});

requestPanelState();
