/* eslint-disable prettier/prettier */
// eslint-disable-next-line func-names
const localStorageMock = (function () {
  let store = new Map();
  return {
    getItem(key) {
      return store.get(key) || null;
    },

    setItem(key, value) {
      store.set(key, value);
    },

    clear() {
      store = new Map();
    },

    removeItem(key) {
      store.delete(key);
    },
  };
}());

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
