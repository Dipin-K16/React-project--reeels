import { Button, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";

import "./MovieDetail.css";


const ShareButton = ({ selectedMovie }) => {
  const sentWhatsapp = () => {
    const message = `Name: ${selectedMovie?.name}\nYear: ${selectedMovie?.year}\nGenre: ${selectedMovie?.genre} \nDirector name : ${selectedMovie?.director_name} \nCast :  ${selectedMovie?.cast_name}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://web.whatsapp.com/send?phone=918137839779&text=${encodedMessage}&app_absent=0`
    );
  };

  return (
    <>
      <Button className="button3" variant="contained" onClick={sentWhatsapp}>
        Share to whatsapp
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </Button>
    </>
  );
};

export default ShareButton;
