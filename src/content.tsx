import { useState, useEffect, useRef } from 'react';
import type { MessageTypes } from './global-types/MessageTypes.ts';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import App from './App';
import './styles/styles.scss';

const rootElement: HTMLDivElement = document.createElement('div');
rootElement.id = 'auto-clicker-root';
document.body.appendChild(rootElement);

export function RootWrapper() {
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef<boolean>(visible);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    function onMessage(
      msg: MessageTypes,
      _sender: chrome.runtime.MessageSender,
      sendResponse: (response: { autoClickerVisible: boolean }) => void
    ): boolean | undefined {
      if (msg.action === 'toggle-auto-clicker') {
        if (typeof msg.autoClickerVisible === 'boolean') {
          setVisible(msg.autoClickerVisible);
        } else {
          setVisible((v) => !v);
        }
      }

      if (msg.action === 'get-auto-clicker-state') {
        sendResponse({ autoClickerVisible: visibleRef.current });
        return true;
      }
    }

    chrome.runtime.onMessage.addListener(onMessage);

    return () => {
      chrome.runtime.onMessage.removeListener(onMessage);
    };
  }, []);

  return visible ? <App /> : null;
}

const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <RootWrapper />
  </Provider>
);
