import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Divider, Button, ListItem, ListItemText } from "@mui/material";
import "./MainVideoCardDotsBtn.css";
import { NotificationSnackbar } from "../";

import createNewPlaylist from "../../server/createNewPlaylist";
import addVideoToExistingPlaylist from "../../server/addVideoToExistingPlaylist";
import getUserPlaylistsNames from "../../server/getUserPlaylistsNames";

//!В props има целите данни за конкретното видео
export default function MainVideoCardDotsBtn(props) {
  // console.log(props);
  const [dialogShown, setDialogShown] = useState(false);
  const [showHiddenMenu, setShowHiddenMenu] = useState(false);

  const [openNotification, setOpenNotification] = useState(false);
  const [playlistNotificationName, setPlaylistNotificationName] = useState("");

  const [newPlaylistName, setNewPlaylistName] = useState("");
  const handleNewPlaylistNameInput = (e) => {
    setNewPlaylistName(e.target.value);
  };

  const handleListItemClick = (playlistName) => {
    //!от текущото видео отива, отива към user.playlists в избрания playlist
    addVideoToExistingPlaylist(playlistName, props.vidData);
    setDialogShown(!dialogShown);

    setPlaylistNotificationName(playlistName);
    setOpenNotification(true);
  };

  const showTheHiddenMenu = () => {
    setShowHiddenMenu(!showHiddenMenu);
  };

  const handleCreateNewPlaylist = () => {
    if (newPlaylistName) {
      //!от тук новия playlist, заедно с първото видео в него, отива към user.playlists
      createNewPlaylist(newPlaylistName, props.vidData);
      setDialogShown(!dialogShown);

      setOpenNotification(true);
      setPlaylistNotificationName(newPlaylistName);
    } else {
      console.log("no name chosen");
    }
  };

  const handleCloseNotification = () => {
    setOpenNotification(false);
  };

  let userPlaylistsNames = getUserPlaylistsNames() || [];

  return (
    <div className={props.className}>
      <IconButton
        variant="contained"
        onClick={() => setDialogShown(!dialogShown)}
      >
        {props.icon}
      </IconButton>

      <Dialog onClose={() => setDialogShown(!dialogShown)} open={dialogShown}>
        <DialogTitle> Add to playlist </DialogTitle>
        <ul>
          {userPlaylistsNames.map((pName) => (
            <ListItem
              button
              onClick={() => handleListItemClick(pName)}
              key={pName}
            >
              <ListItemText primary={pName} />
            </ListItem>
          ))}
        </ul>

        <Divider />

        <Button
          variant="text"
          color="primary"
          onClick={() => showTheHiddenMenu()}
        >
          Create new playlist
        </Button>

        {showHiddenMenu && (
          <div className="createNewPlaylistDiv">
            <input
              value={newPlaylistName}
              onInput={handleNewPlaylistNameInput}
              placeholder="Enter new playlist name"
              type="text"
            />
            <Button
              variant="text"
              color="primary"
              onClick={handleCreateNewPlaylist}
            >
              Create
            </Button>
          </div>
        )}
      </Dialog>

      <NotificationSnackbar
        open={openNotification}
        handleCloseNotification={handleCloseNotification}
        severity="success"
        playlistName={playlistNotificationName}
      />
    </div>
  );
}

//!Video response от feed и searchFeed
/*
 {
  "kind": "youtube#searchResult",
  "id": {
      "kind": "youtube#video",
      "videoId": "oMR0E1Yijvs"
  },
  "snippet": {
      "publishedAt": "2022-10-13T12:03:48Z",
      "channelId": "UCupvZG-5ko_eiXAupbDfxWw",
      "title": "Video reveals a major problem for new Russian soldiers",
      "description": "In a new video posted to social media, newly mobilized Russian soldiers are complaining about their lack of training before being ...",
      "thumbnails": {
          "default": {
              "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/default.jpg",
              "width": 120,
              "height": 90
          },
          "medium": {
              "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/mqdefault.jpg",
              "width": 320,
              "height": 180
          },
          "high": {
              "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg",
              "width": 480,
              "height": 360
          }
      },
      "channelTitle": "CNN",
      "liveBroadcastContent": "none",
      "publishTime": "2022-10-13T12:03:48Z"
  }

*/

//!Видео response от VideoDetails
/*
{
  "kind": "youtube#videoListResponse",
  "items": [
      {
          "kind": "youtube#video",
          "id": "coX1Mwwmj5Y",
          "snippet": {
              "publishedAt": "2022-10-20T13:42:26Z",
              "channelId": "UC8p1vwvWtl6T73JiExfWs1g",
              "title": "Iranian-supplied kamikaze drones usher in new era of warfare in Ukraine",
              "description": "Russia's latest onslaught inside Ukraine has been led by Moscow's new weapon of choice -- Iranian-supplied drones. It could be the dawn of a new kind of warfare. David Martin is at the Pentagon to take a look.\n\n#news #russia #ukraine \n\n\"CBS Evening News with Norah O'Donnell\" delivers the latest news and original reporting, and goes beyond the headlines with context and depth. Catch the \"CBS Evening News\" weeknights at 6:30 p.m. ET on the CBS Television Network and at 10 p.m. ET on the CBS News app.\n\nSubscribe to the \"CBS Evening News\" YouTube channel: https://bit.ly/1S7Dhik\nWatch full episodes of \"CBS Evening News\": https://cbsn.ws/23XekKA\nFollow \"CBS Evening News\" on Instagram: https://bit.ly/1T8icTO\nLike \"CBS Evening News\" on Facebook: https://on.fb.me/1KxYobb\nFollow \"CBS Evening News\" on Twitter: https://bit.ly/1O3dTTe\nDownload the CBS News app: https://cbsn.ws/1Xb1WC8\nTry Paramount+ free: https://bit.ly/2OiW1kZ\n\nFor video licensing inquiries, contact: licensing@veritone.com",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/coX1Mwwmj5Y/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/coX1Mwwmj5Y/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/coX1Mwwmj5Y/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/coX1Mwwmj5Y/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  },
                  "maxres": {
                      "url": "https://i.ytimg.com/vi/coX1Mwwmj5Y/maxresdefault.jpg",
                      "width": 1280,
                      "height": 720
                  }
              },
              "channelTitle": "CBS News",
              "tags": [
                  "Ukraine",
                  "russia",
                  "moscow",
                  "weapon",
                  "iran",
                  "drones",
                  "warfare",
                  "aircraft",
                  "explosives",
                  "war",
                  "artillery"
              ],
              "categoryId": "25",
              "liveBroadcastContent": "none",
              "localized": {
                  "title": "Iranian-supplied kamikaze drones usher in new era of warfare in Ukraine",
                  "description": "Russia's latest onslaught inside Ukraine has been led by Moscow's new weapon of choice -- Iranian-supplied drones. It could be the dawn of a new kind of warfare. David Martin is at the Pentagon to take a look.\n\n#news #russia #ukraine \n\n\"CBS Evening News with Norah O'Donnell\" delivers the latest news and original reporting, and goes beyond the headlines with context and depth. Catch the \"CBS Evening News\" weeknights at 6:30 p.m. ET on the CBS Television Network and at 10 p.m. ET on the CBS News app.\n\nSubscribe to the \"CBS Evening News\" YouTube channel: https://bit.ly/1S7Dhik\nWatch full episodes of \"CBS Evening News\": https://cbsn.ws/23XekKA\nFollow \"CBS Evening News\" on Instagram: https://bit.ly/1T8icTO\nLike \"CBS Evening News\" on Facebook: https://on.fb.me/1KxYobb\nFollow \"CBS Evening News\" on Twitter: https://bit.ly/1O3dTTe\nDownload the CBS News app: https://cbsn.ws/1Xb1WC8\nTry Paramount+ free: https://bit.ly/2OiW1kZ\n\nFor video licensing inquiries, contact: licensing@veritone.com"
              },
              "defaultAudioLanguage": "en"
          },
          "contentDetails": {
              "duration": "PT2M19S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "regionRestriction": {
                  "blocked": [
                      "AU",
                      "CA",
                      "JP"
                  ]
              },
              "contentRating": {},
              "projection": "rectangular"
          },
          "statistics": {
              "viewCount": "14231",
              "likeCount": "126",
              "favoriteCount": "0",
              "commentCount": "114"
          }
      }
  ],
  "pageInfo": {
      "totalResults": 1,
      "resultsPerPage": 1
  }
}

*/
