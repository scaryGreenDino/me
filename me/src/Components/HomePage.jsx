import "../App.css";
import TextType from "./TextType"

var HomePage = () => {
  const prompts = ["hey,\ni'm jordan", "i like\ncoding,\nsynthesizers\nand lego","thanks for \nstopping by"];
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
