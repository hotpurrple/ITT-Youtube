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