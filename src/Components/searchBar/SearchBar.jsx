import React from "react";
import { useState, useEffect /*useMemo*/ } from "react";
import { useNavigate /*redirect*/ } from "react-router-dom"; //да се види redirect вместо useNavigate
import {
  /*Paper,*/ IconButton,
  Autocomplete,
  TextField,
  Box,
} from "@mui/material";
import { Search } from "@mui/icons-material";
// import "./searchBar.css";

import fetchFromAPI from "../../utils/fetchFromAPI";
// import debounce from "lodash.debounce";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  function myDebounce(funcToDebounce, time) {
    let timerId;
    return function (...params) {
      clearTimeout(timerId);
      timerId = setTimeout(funcToDebounce, time, ...params);
    };
  }

  const handleInput = (e) => {
    if (e.target.value.length > 1) {
      console.log(e.target.value);
      setSearchTerm(e.target.value);
    }
  };

  useEffect(() => {
    fetchFromAPI(`/search?part=snippet&q=${searchTerm}&maxResults=10`).then(
      (suggestedData) => {
        let suggestedTitles = suggestedData.items.map((el) => el.snippet.title);
        console.log(suggestedTitles);
        setSuggestions(suggestedTitles);
      }
    );
  }, [searchTerm]); //когато selectedCategory се промени, изпълни callback ф-ята в useEffect()

  let debounceInput = myDebounce(handleInput, 1000);

  //оn submit
  const handleSubmit = (e) => {
    e.preventDefault(); //защото компонента се води форма и бутона е събмит

    if (searchTerm) {
      navigate(`/search/${searchTerm}`); //променяме url-то, за да активираме /search/:searchTerm path, за да ни се зареди searchFeed компонента
      setSearchTerm(""); //накрая зачистваме searchTerm
    }
  };

  return (
    <Box
      component={"form"}
      sx={{
        backgroundColor: "#ffffff",
        display: "flex",
      }}
      onSubmit={handleSubmit}
    >
      <Autocomplete
        // value={searchTerm}
        // open={searchTerm.length > 2}
        freeSolo={true}
        onInput={debounceInput}
        options={suggestions}
        getOptionLabel={(option) => option}
        style={{ width: 500, backgroundColor: "#ffffff" }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              // "& fieldset": { border: "none" },
              width: 500,
              boxSizing: "border-box",
            }}
          />
        )}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "#b1b1b1",
        }}
      >
        <Search />
      </IconButton>
    </Box>
  );
}

// import React from "react";
// import { useState } from "react";
// import { useNavigate /*redirect*/ } from "react-router-dom"; //да се види redirect вместо useNavigate
// import { Paper, IconButton } from "@mui/material";
// import { Search } from "@mui/icons-material";
// import "./searchBar.css";

// export default function SearchBar() {
//   const [searchTerm, setsearchTerm] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault(); //защото компонента се води форма и бутона е събмит

//     if (searchTerm) {
//       navigate(`/search/${searchTerm}`); //променяме url-то, за да активираме /search/:searchTerm path, за да ни се зареди searchFeed компонента

//       setsearchTerm(""); //накрая зачистваме searchTerm
//     }
//   };

//   return (
//     <Paper //Paper is a simple div with white background and some elevation
//       component="form"
//       sx={{
//         borderRadius: 0,
//         border: "1px solid #e3e3e3",
//         pl: 1, //padding left shorthand
//         boxShadow: "none",
//         backgroundColor: "#ffffff" /*"#313131"*/,
//       }}
//       onSubmit={handleSubmit}
//     >
//       <input
//         className="search-bar"
//         placeholder="Search"
//         value={searchTerm}
//         onInput={(e) => setsearchTerm(e.target.value)}
//       />
//       <IconButton
//         type="submit"
//         sx={{
//           p: "10px",
//           color: "#b1b1b1",
//           backgroundColor: "#f8f8f8",
//         }}
//       >
//         <Search />
//       </IconButton>
//     </Paper>
//   );
// }
