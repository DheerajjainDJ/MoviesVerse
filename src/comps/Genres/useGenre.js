import { useState, useEffect } from "react";
const useGenre = (selectedGenres) => {
  const [selectedGeneresIds, setSelectedGeneresIds] = useState("");

  useEffect(() => {
    if (selectedGenres.length < 1) {
      return;
    }
    setSelectedGeneresIds(selectedGenres.map((sg) => sg.id).join(","));
  }, [selectedGenres]);
  return selectedGeneresIds;
};

export default useGenre;
