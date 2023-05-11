import React from 'react'
import { Button } from "@mui/material";
import YouTube from "react-youtube";


const YouTubeDisplay = ({urlId,close}) => {

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
        <div className="youtube-video">
          <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: "5px", float: "right" }}
            onClick={() => {
              close(false);
            }}
          >
            close
          </Button>
          <YouTube videoId={urlId.key} opts={opts} />
        </div>

    </>
  )
}

export default YouTubeDisplay