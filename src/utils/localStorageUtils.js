const TOKEN_KEY = "token";

const isLocalStorageAvailable = () => {
  try {
    const test = "__test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

export const lsSetToken = (token) => {
  if (isLocalStorageAvailable()) {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const lsGetToken = () => {
  return isLocalStorageAvailable() ? localStorage.getItem(TOKEN_KEY) : null;
};

export const lsRemoveToken = () => {
  if (isLocalStorageAvailable()) {
    localStorage.removeItem(TOKEN_KEY);
  }
};
