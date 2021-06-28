import { useEffect, useState } from "react";
import "../App.css";
import Cursor from "./Cursor";
var TextType = ({text="", onComplete = ()=>{},setCharCount=()=>{} }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < text.length) {
      const r = 100 + Math.random() * 100;
      setTimeout(() => {
        setCount(count + 1);
        setCharCount(count)
      }, r);
    }
    else {
      setTimeout(() => {
        setCount(0);
        onComplete()
      }, 1000);
    }
  }, [count, text]);
  return text.substring(0, count);
};
var HomePage = () => {
  const prompts = ["hej\ni'm jordan", "i like\nmusic\nand coding","how original","i'm procratinating an algorithms project","i hope you dont mind the text format", "but i love it"];

  const [count, setCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const onComplete = () => {
    if(count<prompts.length)
      setCount(count+1)
  }
  
  return (
    <div className="wrapper">
      <div className="center-wrapper">
        <div className="center-content">
          <TextType text={prompts[count]} onComplete={onComplete} setCharCount={setCharCount} />
        </div>
      </div>
      <div className="top-right-content">{count + 1}:{charCount+1 }</div>
    </div>
  );
};
export default HomePage;
