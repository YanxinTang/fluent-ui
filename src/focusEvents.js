import { KeyCodes } from './keycodes';

export const focusVisibleClassname = 'focus--visible';
export const focusInvisibleClassname = 'focus--invisible';

function getWindow(element) {
  if (typeof window === 'undefined') {
    return undefined;
  }
  return element?.ownerDocument?.defaultView ?? window;
}

function setFocusVisibility(visible, element) {
  const win = getWindow(element);
  if (win) {
    const { classList } = win.document.body;
    classList.add(visible ? focusVisibleClassname : focusInvisibleClassname);
    classList.remove(visible ? focusInvisibleClassname : focusVisibleClassname);
  }
}

function isDirectionalKeyEvent(which) {
  const DirectionalKeyCodes = [
    KeyCodes.up,
    KeyCodes.down,
    KeyCodes.left,
    KeyCodes.right,
    KeyCodes.home,
    KeyCodes.end,
    KeyCodes.tab,
    KeyCodes.pageDown,
    KeyCodes.pageUp,
  ];
  return DirectionalKeyCodes.includes(which);
}

function onMouseDownHandler(event) {
  setFocusVisibility(false, event.target);
}

function onPointDownHandler(event) {
  if (event.pointerType !== 'mouse') {
    setFocusVisibility(false, event.target);
  }
}

function onKeyDownHandler(event) {
  if (isDirectionalKeyEvent(event.keyCode)) {
    setFocusVisibility(true, event.target);
  }
}

export function bindFocusEvents(element) {
  const win = getWindow(element);
  win.addEventListener('mousedown', onMouseDownHandler, true);
  win.addEventListener('pointerdown', onPointDownHandler, true);
  win.addEventListener('keydown', onKeyDownHandler, true);
  return () => {
    win.removeEventListener('mousedown', onMouseDownHandler, true);
    win.removeEventListener('pointerdown', onPointDownHandler, true);
    win.removeEventListener('keydown', onKeyDownHandler, true);
  };
}
