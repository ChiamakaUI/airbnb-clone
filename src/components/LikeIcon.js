import React, { useState, useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { Box } from "@mui/material";
import { currentUserContext } from "../App";
import LoginForm from "./LoginForm";

const LikeIcon = ({ isLiked }) => {
  const [liked, setLiked] = useState(isLiked);
  const [isOpen, setIsOpen] = useState(false);
  const iconStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
  };
  const { currentUser } = useContext(currentUserContext);

  const likeLocation = () => {
    if(Object.keys(currentUser).length === 0){
      setIsOpen(true)
      return
    }
    setLiked(!liked)
  }
  const displayIcon = liked ? (
    <FcLike
      onClick={(event) => {
        setLiked(!liked);
        event.stopPropagation();
      }}
      style={iconStyle}
    />
  ) : (
    <AiOutlineHeart
      onClick={(event) => {
        // setLiked(!liked);
        likeLocation()
        event.stopPropagation();
      }}
      style={iconStyle}
      color="white"
    />
  );
  return <Box>
    {displayIcon}
      {isOpen && <LoginForm setIsOpen={setIsOpen}/> }
  </Box>;
};

export default LikeIcon;
