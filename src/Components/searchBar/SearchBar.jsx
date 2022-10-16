import React from "react";
import { useState } from "react";
import { useNavigate /*redirect*/ } from "react-router-dom"; //да се види redirect вместо useNavigate
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import "./searchBar.css";

export default function SearchBar() {
  const [searchTerm, setsearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //защото компонента се води форма и бутона е събмит

    if (searchTerm) {
      navigate(`/search/${searchTerm}`); //променяме url-то, за да активираме /search/:searchTerm path, за да ни се зареди searchFeed компонента

      setsearchTerm(""); //накрая зачистваме searchTerm
    }
  };

  return (
    <Paper //Paper is a simple div with white background and some elevation
      component="form"
      sx={{
        borderRadius: 0,
        border: "1px solid #e3e3e3",
        pl: 1, //padding left shorthand
        boxShadow: "none",
        backgroundColor: "#ffffff" /*"#313131"*/,
      }}
      onSubmit={handleSubmit}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onInput={(e) => setsearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "#b1b1b1",
          backgroundColor: "#f8f8f8",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
}
