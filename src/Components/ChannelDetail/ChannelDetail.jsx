import React from "react";
import "./channelDetail.css";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchFromApi from "../../utils/fetchFromAPI";

export default function ChannelDetail(props) {
  const { channelId } = useParams();
  const [channelInfo, setChannelInfo] = useState({});

  useEffect(() => {
    console.log(channelId);
    fetchFromApi(`/channels?part=snippet%2Cstatistics&id=${channelId}`).then(
      (channelData) => {
        console.log(channelData);
        setChannelInfo(channelData.items[0]); //това не работи в 90% от случаите
      }
    );
  }, []);
  console.log(channelInfo); //повечето пъти тук не се отразява въпреки setChannelInfo
  return (
    <div className="channelDetailMainDiv">
      <div className="channelDetailImgDiv">
        <img
          className="channelCoverImage"
          // src={channelInfo.brandingSettings.image.bannerExternalUrl}
          alt="channelCover"
        ></img>
      </div>

      <Typography variant="body1" color="initial">
        Channel name and subscribers
      </Typography>

      <div className="channelDetailVideosDiv">
        {JSON.stringify(channelInfo)}
      </div>
    </div>
  );
}

/*
{
    "kind": "youtube#channelListResponse",
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#channel",
            "id": "UCDqzpUGQd60gTvEIeFknLzQ",
            "snippet": {
                "title": "AZIS",
                "description": "THE OFFICIAL CHANNEL OF AZIS\nОФИЦИАЛНИЯТ КАНАЛ НА АЗИС\n\nVasil Troyanov Boyanov, professionally known as AZIS, is a Bulgarian recording artist. AZIS remains a prominent figure in the Balkan music scene and he is also very well known all over the world. \n",
                "customUrl": "@azis",
                "publishedAt": "2015-11-14T16:51:08Z",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/-NpfuvdUBiR0wJBiUTfAkUORNxhBPOZInJLWPbqhUfuIUH-NxW5u196bOjamxkFOuwlsN9Vy7A=s88-c-k-c0x00ffffff-no-nd-rj",
                        "width": 88,
                        "height": 88
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/-NpfuvdUBiR0wJBiUTfAkUORNxhBPOZInJLWPbqhUfuIUH-NxW5u196bOjamxkFOuwlsN9Vy7A=s240-c-k-c0x00ffffff-no-nd-rj",
                        "width": 240,
                        "height": 240
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/-NpfuvdUBiR0wJBiUTfAkUORNxhBPOZInJLWPbqhUfuIUH-NxW5u196bOjamxkFOuwlsN9Vy7A=s800-c-k-c0x00ffffff-no-nd-rj",
                        "width": 800,
                        "height": 800
                    }
                },
                "localized": {
                    "title": "AZIS",
                    "description": "THE OFFICIAL CHANNEL OF AZIS\nОФИЦИАЛНИЯТ КАНАЛ НА АЗИС\n\nVasil Troyanov Boyanov, professionally known as AZIS, is a Bulgarian recording artist. AZIS remains a prominent figure in the Balkan music scene and he is also very well known all over the world. \n"
                },
                "country": "BG"
            },
            "contentDetails": {
                "relatedPlaylists": {
                    "likes": "",
                    "uploads": "UUDqzpUGQd60gTvEIeFknLzQ"
                }
            },
            "statistics": {
                "viewCount": "251641438",
                "subscriberCount": "521000",
                "hiddenSubscriberCount": false,
                "videoCount": "106"
            },
            "brandingSettings": {
                "channel": {
                    "title": "AZIS",
                    "description": "THE OFFICIAL CHANNEL OF AZIS\nОФИЦИАЛНИЯТ КАНАЛ НА АЗИС\n\nVasil Troyanov Boyanov, professionally known as AZIS, is a Bulgarian recording artist. AZIS remains a prominent figure in the Balkan music scene and he is also very well known all over the world. \n",
                    "keywords": "Azis Азис habibi motel хабиби мотел pop-folk popfolk попфолк поп-фолк planeta AzisOnline ciganche циганче live \"live concert\" лайф \"лайф концерт\" \"концерт 2020\" \"Azis group\" лайв лаив \"лаив концерт\" ledenakralica \"leaden kralica\" 妖王 名阿齐斯 \"ледена кралица\" \"techno v tri\" pistolet \"jeno biagai\" starboy \"жено бягай\" сагапо sagapo",
                    "unsubscribedTrailer": "j2IVk3SG7l8",
                    "country": "BG"
                },
                "image": {
                    "bannerExternalUrl": "https://yt3.ggpht.com/pWnXpcTyMeJtSBJtlFOrso-l0KjX15zRRzUsQSuISp82Kal4-CD-sttsnnO2xOe3K0--YCXn8g"
                }
            }
        }
    ]
}

*/
