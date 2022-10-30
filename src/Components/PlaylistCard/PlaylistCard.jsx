import { Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./playlistCard.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

import * as AiIcons from "react-icons/ai";

function PlaylistCard({ videoData, removeVideoFromPlaylist }) {
  const [dialogShown, setDialogShown] = useState(false);
  // console.log(videoData);
  return (
    <div className="playlistCard">
      <div className="playlistCardInnerDiv">
        <Link to={`/videos/${videoData.id.videoId}`}>
          <img
            className="playlistCardImg"
            src={videoData.snippet.thumbnails.high.url}
            alt="videoImage"
          ></img>
        </Link>

        <div className="playlistCardRightPart">
          <Link to={`/videos/${videoData.id.videoId}`}>
            <Typography
              variant="h5"
              className="playlistCardTitle"
              fontSize={"1.2vw"}
            >
              {videoData.snippet.title}
            </Typography>
          </Link>

          <Link to={`/channel/${videoData.snippet.channelId}`}>
            <Typography
              variant="subtitle2"
              className="playlistCardSubtitle"
              fontSize={"0.8vw"}
            >
              {videoData.snippet.channelTitle}
            </Typography>
          </Link>
        </div>
      </div>
      <IconButton
        className="removeAlbumBtn"
        aria-label=""
        onClick={() => setDialogShown(true)}
      >
        <AiIcons.AiFillDelete />
      </IconButton>

      <Dialog onClose={() => setDialogShown(!dialogShown)} open={dialogShown}>
        <DialogTitle> Are you sure that you want to delete it? </DialogTitle>

        <Button
          variant="text"
          color="primary"
          onClick={() => removeVideoFromPlaylist(videoData.id.videoId)}
        >
          Delete the video
        </Button>
      </Dialog>
    </div>
  );
}

export default PlaylistCard;

// {
//   "kind": "youtube#videoListResponse",
//   "items": [
//       {
//           "kind": "youtube#video",
//           "id": "oMR0E1Yijvs",
//           "snippet": {
//               "publishedAt": "2022-10-13T12:03:48Z",
//               "channelId": "UCupvZG-5ko_eiXAupbDfxWw",
//               "title": "Video reveals a major problem for new Russian soldiers",
//               "description": "In a new video posted to social media, newly mobilized Russian soldiers are complaining about their lack of training before being sent to the war with Ukraine.  #CNN #News",
//               "thumbnails": {
//                   "default": {
//                       "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/default.jpg",
//                       "width": 120,
//                       "height": 90
//                   },
//                   "medium": {
//                       "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/mqdefault.jpg",
//                       "width": 320,
//                       "height": 180
//                   },
//                   "high": {
//                       "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg",
//                       "width": 480,
//                       "height": 360
//                   },
//                   "standard": {
//                       "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/sddefault.jpg",
//                       "width": 640,
//                       "height": 480
//                   },
//                   "maxres": {
//                       "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/maxresdefault.jpg",
//                       "width": 1280,
//                       "height": 720
//                   }
//               },
//               "channelTitle": "CNN",
//               "tags": [
//                   "latest News",
//                   "Happening Now",
//                   "CNN",
//                   "Russia",
//                   "Ukraine",
//                   "Radio Free Europe",
//                   "Erin Burnett",
//                   "World News"
//               ],
//               "categoryId": "25",
//               "liveBroadcastContent": "none",
//               "defaultLanguage": "en",
//               "localized": {
//                   "title": "Video reveals a major problem for new Russian soldiers",
//                   "description": "In a new video posted to social media, newly mobilized Russian soldiers are complaining about their lack of training before being sent to the war with Ukraine.  #CNN #News"
//               },
//               "defaultAudioLanguage": "en"
//           },
//           "contentDetails": {
//               "duration": "PT3M29S",
//               "dimension": "2d",
//               "definition": "hd",
//               "caption": "true",
//               "licensedContent": true,
//               "contentRating": {},
//               "projection": "rectangular"
//           },
//           "statistics": {
//               "viewCount": "1830264",
//               "likeCount": "16287",
//               "favoriteCount": "0",
//               "commentCount": "3979"
//           }
//       }
//   ],
//   "pageInfo": {
//       "totalResults": 1,
//       "resultsPerPage": 1
//   }
// }

// {
//   "url": "oMR0E1Yijvs",
//   "likes": "17.7K",
//   "id": {
//       "videoId": "oMR0E1Yijvs"
//   },
//   "snippet": {
//       "publishedAt": "2022-10-13T12:03:48Z",
//       "title": "Video reveals a major problem for new Russian soldiers",
//       "channelTitle": "CNN",
//       "thumbnails": {
//           "medium": {
//               "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/mqdefault.jpg"
//           }
//       }
//   }
// }

// {
//   "kind": "youtube#videoListResponse",
//   "items": [
//       {
//           "kind": "youtube#video",
//           "id": "coX1Mwwmj5Y",
//           "snippet": {
//               "publishedAt": "2022-10-20T13:42:26Z",
//               "channelId": "UC8p1vwvWtl6T73JiExfWs1g",
//               "title": "Iranian-supplied kamikaze drones usher in new era of warfare in Ukraine",
//               "description": "Russia's latest onslaught inside Ukraine has been led by Moscow's new weapon of choice -- Iranian-supplied drones. It could be the dawn of a new kind of warfare. David Martin is at the Pentagon to take a look.\n\n#news #russia #ukraine \n\n\"CBS Evening News with Norah O'Donnell\" delivers the latest news and original reporting, and goes beyond the headlines with context and depth. Catch the \"CBS Evening News\" weeknights at 6:30 p.m. ET on the CBS Television Network and at 10 p.m. ET on the CBS News app.\n\nSubscribe to the \"CBS Evening News\" YouTube channel: https://bit.ly/1S7Dhik\nWatch full episodes of \"CBS Evening News\": https://cbsn.ws/23XekKA\nFollow \"CBS Evening News\" on Instagram: https://bit.ly/1T8icTO\nLike \"CBS Evening News\" on Facebook: https://on.fb.me/1KxYobb\nFollow \"CBS Evening News\" on Twitter: https://bit.ly/1O3dTTe\nDownload the CBS News app: https://cbsn.ws/1Xb1WC8\nTry Paramount+ free: https://bit.ly/2OiW1kZ\n\nFor video licensing inquiries, contact: licensing@veritone.com",
//               "thumbnails": {
//                   "default": {
//                       "url": "https://i.ytimg.com/vi/coX1Mwwmj5Y/default.jpg",
//                       "width": 120,
//                       "height": 90
//                   },
//                   "medium": {
//                       "url": "https://i.ytimg.com/vi/coX1Mwwmj5Y/mqdefault.jpg",
//                       "width": 320,
//                       "height": 180
//                   },
//                   "high": {
//                       "url": "https://i.ytimg.com/vi/coX1Mwwmj5Y/hqdefault.jpg",
//                       "width": 480,
//                       "height": 360
//                   },
//                   "standard": {
//                       "url": "https://i.ytimg.com/vi/coX1Mwwmj5Y/sddefault.jpg",
//                       "width": 640,
//                       "height": 480
//                   },
//                   "maxres": {
//                       "url": "https://i.ytimg.com/vi/coX1Mwwmj5Y/maxresdefault.jpg",
//                       "width": 1280,
//                       "height": 720
//                   }
//               },
//               "channelTitle": "CBS News",
//               "tags": [
//                   "Ukraine",
//                   "russia",
//                   "moscow",
//                   "weapon",
//                   "iran",
//                   "drones",
//                   "warfare",
//                   "aircraft",
//                   "explosives",
//                   "war",
//                   "artillery"
//               ],
//               "categoryId": "25",
//               "liveBroadcastContent": "none",
//               "localized": {
//                   "title": "Iranian-supplied kamikaze drones usher in new era of warfare in Ukraine",
//                   "description": "Russia's latest onslaught inside Ukraine has been led by Moscow's new weapon of choice -- Iranian-supplied drones. It could be the dawn of a new kind of warfare. David Martin is at the Pentagon to take a look.\n\n#news #russia #ukraine \n\n\"CBS Evening News with Norah O'Donnell\" delivers the latest news and original reporting, and goes beyond the headlines with context and depth. Catch the \"CBS Evening News\" weeknights at 6:30 p.m. ET on the CBS Television Network and at 10 p.m. ET on the CBS News app.\n\nSubscribe to the \"CBS Evening News\" YouTube channel: https://bit.ly/1S7Dhik\nWatch full episodes of \"CBS Evening News\": https://cbsn.ws/23XekKA\nFollow \"CBS Evening News\" on Instagram: https://bit.ly/1T8icTO\nLike \"CBS Evening News\" on Facebook: https://on.fb.me/1KxYobb\nFollow \"CBS Evening News\" on Twitter: https://bit.ly/1O3dTTe\nDownload the CBS News app: https://cbsn.ws/1Xb1WC8\nTry Paramount+ free: https://bit.ly/2OiW1kZ\n\nFor video licensing inquiries, contact: licensing@veritone.com"
//               },
//               "defaultAudioLanguage": "en"
//           },
//           "contentDetails": {
//               "duration": "PT2M19S",
//               "dimension": "2d",
//               "definition": "hd",
//               "caption": "false",
//               "licensedContent": true,
//               "regionRestriction": {
//                   "blocked": [
//                       "AU",
//                       "CA",
//                       "JP"
//                   ]
//               },
//               "contentRating": {},
//               "projection": "rectangular"
//           },
//           "statistics": {
//               "viewCount": "14231",
//               "likeCount": "126",
//               "favoriteCount": "0",
//               "commentCount": "114"
//           }
//       }
//   ],
//   "pageInfo": {
//       "totalResults": 1,
//       "resultsPerPage": 1
//   }
// }
