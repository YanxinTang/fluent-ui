import { bindFocusEvents, focusVisibleClassname, focusInvisibleClassname } from '@/focusEvents';
import { KeyCodes } from '@/keycodes';

describe('focus events', () => {
  const addEventListenerSpy = jest.spyOn(global.window, 'addEventListener');
  const removeEventListenerSpy = jest.spyOn(global.window, 'removeEventListener');

  test('bind / unbind events for window', () => {
    const unbindFocusEvents = bindFocusEvents();
    expect(addEventListenerSpy).toHaveBeenCalledTimes(3);
    unbindFocusEvents();
    expect(removeEventListenerSpy).toHaveBeenCalledTimes(3);
  });
});

describe('focus events', () => {
  const classListAddSpy = jest.spyOn(global.window.document.body.classList, 'add');
  const classListRemoveSpy = jest.spyOn(global.window.document.body.classList, 'remove');

  let unbindFocusEvents;

  beforeAll(() => {
    unbindFocusEvents = bindFocusEvents();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    unbindFocusEvents();
  });
  test('direction keyDown event', () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: KeyCodes.tab }));
    expect(classListAddSpy).toHaveBeenCalledTimes(1);
    expect(classListRemoveSpy).toHaveBeenCalledTimes(1);
    expect(classListAddSpy).toHaveBeenLastCalledWith(focusVisibleClassname);
    expect(classListRemoveSpy).toHaveBeenLastCalledWith(focusInvisibleClassname);
    window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: KeyCodes.a }));
    expect(classListAddSpy).toHaveBeenCalledTimes(1);
    expect(classListRemoveSpy).toHaveBeenCalledTimes(1);
  });

  test('mouse event', () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: KeyCodes.tab }));
    window.dispatchEvent(new Event('mousedown'));
    expect(classListAddSpy).toHaveBeenCalledTimes(2);
    expect(classListRemoveSpy).toHaveBeenCalledTimes(2);
    expect(classListAddSpy).toHaveBeenLastCalledWith(focusInvisibleClassname);
    expect(classListRemoveSpy).toHaveBeenLastCalledWith(focusVisibleClassname);
  });

  test('pointer event', () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { keyCode: KeyCodes.tab }));
    window.dispatchEvent(new Event('pointerdown'));
    expect(classListAddSpy).toHaveBeenCalledTimes(2);
    expect(classListRemoveSpy).toHaveBeenCalledTimes(2);
    expect(classListAddSpy).toHaveBeenLastCalledWith(focusInvisibleClassname);
    expect(classListRemoveSpy).toHaveBeenLastCalledWith(focusVisibleClassname);
  });
});
