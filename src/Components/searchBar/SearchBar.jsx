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
  const regex = /[^a-zA-Z0-9 -]/gi;

  function myDebounce(funcToDebounce, time) {
    let timerId;
    return function (...params) {
      clearTimeout(timerId);
      timerId = setTimeout(funcToDebounce, time, ...params);
    };
  }

  const handleInput = (e) => {
    if (e.target.value.length > 1) {
      console.log("in handle input");
      console.log(e.target.value);
      setSearchTerm(e.target.value);
      console.log("after handle input");
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchFromAPI(`/search?part=snippet&q=${searchTerm}&maxResults=20`).then(
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
          // console.log(suggestedTitles);
          setSuggestions(suggestedTitles);
        }
      );
    }
  }, [searchTerm]); //когато searchTerm се промени, изпълни callback ф-ята в useEffect()

  let debounceInput = myDebounce(handleInput, 1000);

  //оn submit
  const handleSubmit = (e) => {
    console.log("In handle submit");
    console.log(e.target.value);
    console.log(searchTerm);
    console.log("after handle submit");
    e.preventDefault(); //защото компонента се води форма и бутона е събмит

    if (searchTerm) {
      navigate(`/search/${searchTerm}`); //променяме url-то, за да активираме /search/:searchTerm path, за да ни се зареди searchFeed компонента
      //setSearchTerm(""); //накрая зачистваме searchTerm
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
        style={{
          width: 500,
          backgroundColor: "#ffffff",
        }}
        // key={somethingMeaningful}
        // Luckily it is a react component, so it have a "key" prop. When the key prop changes,
        // the component is re-rendered with the default values ( which is an empty array since nothing is selected).
        // I used hooks in the parent component and passed the values to the key prop, whenever reset is needed.

        // value={searchTerm}
        //open={searchTerm.length > 2}
        //PopperComponen={компонент/елемент}
        // defaultValue={}
        freeSolo={true}
        onChange={handleSubmit}
        onInput={debounceInput}
        options={suggestions}
        //какво ще се покаже в popper полетата
        getOptionLabel={(option) => {
          // return `${option.title}`;
          if (option["title"]) {
            return option["title"];
          }
          if (typeof option === "string") {
            return option;
          }
          return "";
        }}
        //какъв елемент/компонент ще се покаже в popper менюто
        renderOption={(props, option, state) => {
          return (
            <h5 className="searchBarh4">
              <Link
                className="searchBarLink"
                to={`/search/${option.title}`}
                key={option.id}
              >
                {/* {option.title.slice(0, 40).replaceAll(regex, " ")} */}
                {option.title.slice(0, 40).replaceAll("/", "")}
              </Link>
            </h5>
          );
        }}
        renderInput={(params) => (
          <TextField
            value={searchTerm}
            {...params}
            sx={{
              "& fieldset": { border: "none" },
              // width: "110%", //това изискване не може да бъде изпълнено - popper-а избутва и X бутона към лупата
            }}
            // size="small"
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
