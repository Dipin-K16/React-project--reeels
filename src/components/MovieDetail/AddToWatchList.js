import React from "react";
import MyContext from "../../context";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { useContext } from "react";

import "./MovieDetail.css";


const AddToWatchList = ({selectedMovie}) => {
  const { watchList, setWatchList } = useContext(MyContext);

  const addToWatchlist = () => {
    setWatchList([...watchList, selectedMovie]);
  };

  return (
    <>
      <Button
        variant="contained"
        className="button1"
        onClick={() => {
          addToWatchlist();
        }}
      >
        Add to watchlist
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </Button>
    </>
  );
};

export default AddToWatchList;
