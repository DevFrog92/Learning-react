export const setItem = (key, data) => localStorage.setItem(key, JSON.stringify(data));
export const getItem = (key) => null || JSON.parse(localStorage.getItem(key));
export const clearItem = (key) => localStorage.clearItem(key);
