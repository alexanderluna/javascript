import { useEffect, useState } from 'react';

const PREFIX = 'whatsapp-clone-';

const useLocalStorage = (key: string, initialValue?: string | Function | Array<any>) => {
  const prefixKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixKey);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }

    if (typeof initialValue == 'function') {
      return initialValue();
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
