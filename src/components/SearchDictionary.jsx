import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchDictionary = () => {
  const [word, setWord] = useState();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={() => {
        navigate("/dictionary/" + word);
      }}
    >
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button
        onClick={() => {
          navigate("/dictionary/" + word);
        }}
      >
        SEARCH
      </button>
    </form>
  );
};

export default SearchDictionary;
