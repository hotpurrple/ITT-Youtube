import React from "react";
import { useState, useEffect /*useMemo*/ } from "react";
import { useNavigate /*redirect*/, Link } from "react-router-dom"; //да се види redirect вместо useNavigate
import {
  /*Paper,*/ IconButton,
  Autocomplete,
  TextField,
  Box,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import "./searchBar.css";
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
    if (searchTerm) {
      fetchFromAPI(`/search?part=snippet&q=${searchTerm}&maxResults=15`).then(
        (suggestedData) => {
          // console.log(suggestedData);
          let suggestedTitles = suggestedData.items.map((el) => {
            if (el.id.videoId) {
              return { title: el.snippet.title, id: el.id.videoId };
            } else {
              return { title: el.snippet.title, id: el.id.channelId };
            }
          });

          // let suggestedTitles = suggestedData.items.map(
          //   (el) => el.snippet.title
          // );
          console.log(suggestedTitles);
          setSuggestions(suggestedTitles);
        }
      );
    }
  }, [searchTerm]); //когато searchTerm се промени, изпълни callback ф-ята в useEffect()

  let debounceInput = myDebounce(handleInput, 1000);

  //оn submit
  const handleSubmit = (e) => {
    console.log("in handle submit");
    console.log(searchTerm);
    e.preventDefault(); //защото компонента се води форма и бутона е събмит

    if (searchTerm) {
      navigate(`/search/${searchTerm}`); //променяме url-то, за да активираме /search/:searchTerm path, за да ни се зареди searchFeed компонента
      setSearchTerm(""); //накрая зачистваме searchTerm
      
      setSuggestions([]);
    }
  };

  return (
    <Box
      component={"form"}
      sx={{
        backgroundColor: "#ffffff",
        display: "flex",
        border: "1px solid gray",
        borderRadius: "10px",
        width: "360px",
        justifyContent: "center",
        padding: "0px 0px 0px 5px",
      }}
      onSubmit={handleSubmit}
    >
      <Autocomplete
        style={{ width: 500, backgroundColor: "#ffffff" }}
        //value={searchTerm}
        //open={searchTerm.length > 2}
        //PopperComponen={компонент/елемент}
        freeSolo={true}
        onChange={handleSubmit}
        onInput={debounceInput}
        options={suggestions}
        //какво ще се покаже в popper полетата
        getOptionLabel={(option) => {
          return `${option.title}`;
        }}
        //какъв елемент/компонент ще се покаже в popper менюто
        renderOption={(props, option, state) => {
          return (
            <Link to={`/search/${option.title}`} key={option.id}>
              {option.title}
            </Link>
          );
        }}
        // renderOption={(props, option, state) => {
        //   //какъв елемент/компонент ще се покаже в popper менюто
        //   return (
        //     <div
        //       key={option.id}
        //       onClick={() => navigate(`/search/${option.title}`)}
        //     >
        //       {option.title}
        //     </div>
        //   );
        // }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              "& fieldset": { border: "none" },
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
