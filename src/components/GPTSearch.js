import { BROWSE_BG_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-screen">
        <img className="h-screen object-cover w-screen"  src={BROWSE_BG_IMG} alt="logo" />
      </div>
      
        <GptSearchBar />
        <GptMovieSuggestions />
     
    </>
  );
};
export default GPTSearch;