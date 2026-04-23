import { useState, useEffect, useRef } from 'react';
import type { MessageTypes } from './types/content-types/MessageTypes';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './styles/styles.scss';

const isExtension =
  typeof chrome !== 'undefined' &&
  typeof chrome.runtime !== 'undefined' &&
  !!chrome.runtime.id;

const rootElement: HTMLDivElement =
  (document.getElementById('auto-clicker-root') as HTMLDivElement) ||
  (() => {
    const el = document.createElement('div');
    el.id = 'auto-clicker-root';
    document.body.appendChild(el);
    return el;
  })();

export function RootWrapper() {
  const [visible, setVisible] = useState<boolean>(!isExtension);
  const visibleRef = useRef<boolean>(visible);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    if (!isExtension) return;

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

  return (
    <>
      {!isExtension && (
        <button
          style={{ position: 'fixed', top: 10, right: 10, zIndex: 9999 }}
          onClick={() => setVisible((v) => !v)}
        >
          toggle auto-clicker
        </button>
      )}

      {visible ? <App /> : null}
    </>
  );
}

const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <RootWrapper />
  </Provider>
);
