import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchDictionary = () => {
  const [word, setWord] = useState();
  const navigate = useNavigate();

  return (
    <form
      className="flex flex-wrap"
      onSubmit={() => {
        navigate("/dictionary/" + word);
      }}
    >
      <input
        type="text"
        className="p-2 rounded shrink"
        placeholder="Dinosaur"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold mx-2 py-2 px-2 rounded"
        onClick={() => {
          navigate("/dictionary/" + word);
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchDictionary;
