import { useEffect, useState } from "react";
import "../App.css";
var Cursor = () => {
  const [on, setOn] = useState(true);

  useEffect(() => {
      const r = 300
      setTimeout(() => {
        setOn(!!!on)
      }, r);
  }, [on]);
    return `${on? "|": " "}` ;
};
export default Cursor;
