import { useState } from "react";

export default function useSwitch(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);
  const toggle = () => {
    if (isOn) {
      return setIsOn(false);
    } else {
      return setIsOn(true);
    }
  };
  return { isOn, toggle };
}
