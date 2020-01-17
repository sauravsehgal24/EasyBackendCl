import { useState } from "react";

export const useCustomState = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
        console.log(event.target.value);
      }
    }
  };
};

