import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "5:07" },
    { title: "Macerna", duration: "3:56" },
    { title: "All Star", duration: "2:56" },
    { title: "I want it", duration: "5:34" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
