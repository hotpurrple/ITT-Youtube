import React, { useRef } from "react";
import { useState, useEffect} from "react";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import {
  IconButton,
  Autocomplete,
  TextField,
  Box,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import "./searchBar.css";
import fetchFromAPI from "../../utils/fetchFromAPI";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Modal from '@mui/material/Modal';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';

export default function SearchBar(props) {
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

  //IF WE DONT USE TEXT TO SPEECH WE HAVE TO DELETE THIS
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleInput = (e) => {
    if (e.target.value.length > 1) {
      setSearchTerm(e.target.value);
    }
  };

  //IF WE DONT USE TEXT TO SPEECH WE HAVE TO DELETE THIS
  const voiceSpeechTextField = useRef()

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
          setSuggestions(suggestedTitles);
        }
      );
    }
  }, [searchTerm]);

  let debounceInput = myDebounce(handleInput, 1000);

  //оn submit
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (searchTerm) {
      navigate(`/search/${searchTerm}`); //променяме url-то, за да активираме /search/:searchTerm path, за да ни се зареди searchFeed компонента
      setSuggestions([]);
    }
  };

//IF WE DONT USE TEXT TO SPEECH WE HAVE TO DELETE THIS
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation().pathname
  useEffect(() => {
    if (location.includes("search")) {
        voiceSpeechTextField.current.value = location.split("/search/")[1]
    }
  }, [location])

  return (

<>
    <Box className="muiSearchBox"
      component={"form"}
      sx={{
        backgroundColor: "#ffffff",
        display: "flex",
        border: "1px solid gray",
        borderRadius: "10px",
        //width: "360px",
        width: "25%",
        justifyContent: "center",
        padding: "0px 0px 0px 5px",
      }}
      onSubmit={handleSubmit}
    >
      <Autocomplete
        style={{
          // width: 500,
          width: "85%",
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
            <h5 className="searchBarh4" key={option.id}>
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
          inputRef={voiceSpeechTextField} //IF WE DONT USE TEXT TO SPEECH WE HAVE TO DELETE THIS REF
            value={searchTerm}
            {...params}
            sx={{
              "& fieldset": { border: "none" },
              // fontSize: "1vw",
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


   
    <KeyboardVoiceIcon className="KeyboardVoiceIcon" onClick={() => {
        handleOpen()
        SpeechRecognition.startListening()
    }}/>
    </Box>
    
    {/* IF WE DONT USE TEXT TO SPEECH WE HAVE TO DELETE THIS MODAL */}
    <Modal className="voiceSearchModal" 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <div className="voiceSearchWrapper">
        <h2>{transcript}</h2>
        <div className="voiceSearchButtons">
        <IconButton onClick={() => {
            if (transcript) {
            navigate(`/search/${transcript}`)
            handleClose()
            }
        }}>
            <KeyboardVoiceIcon fontSize="large"/>
            <h6>Search</h6>
        </IconButton>
        <IconButton onClick={SpeechRecognition.startListening}>
            <ReplayIcon fontSize="large"/>
            <h6>Retry</h6>
        </IconButton>
        <IconButton onClick={resetTranscript}>
            <CloseIcon fontSize="large"/>
            <h6>Reset search</h6>
        </IconButton>
        </div>
        <div>
    </div>
       </div>
      </Modal>
      {/* IF WE DONT USE TEXT TO SPEECH WE HAVE TO DELETE THIS MODAL */}
    </>
  );
}
