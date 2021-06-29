import { useEffect, useState } from "react";
import "../App.css";
var TextType = ({
    prompts=[""],
  onComplete = () => {},
}) => {
    const [count, setCount] = useState({ text: 0, prompt: 0 });

    useEffect(() => {
    if (count.text < prompts[count.prompt].length) {
      const r = 70 + Math.random() * 70;
      setTimeout(() => {
        setCount({ text: count.text + 1, prompt: count.prompt });
      }, r);
    } else if (count.prompt + 1 < prompts.length) {
      setTimeout(() => {
        setCount({ text: 0, prompt: count.prompt + 1 });
      }, 1000);
    }
    else {
        onComplete()
    }
  }, [count, prompts,onComplete]);
  return prompts[count.prompt].substring(0, count.text);
};

export default TextType;
