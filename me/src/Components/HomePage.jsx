import "../App.css";
import TextType from "./TextType"

var HomePage = () => {
  const prompts = ["hej\ni'm jordan", "i like\nmusic\nand coding","how original","i'm procrastinating an algorithms project","i hope you dont mind the text format", "but i love it"];
  return (
    <>
      <div className="center-wrapper">
        <div className="center-content">
          <TextType
            prompts={prompts}
            />
        </div>
      </div>
      <div className="top-left-content">me</div>
    </>
  );
};
export default HomePage;
