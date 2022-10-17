import React, { useState, useEffect, useContext } from "react";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import "../Styles/SignUp.css"
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { currentUserContext } from "../App"
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [progressPercentage, setProgressPercentage] = useState(null);
  const { setCurrentUser } = useContext(currentUserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const upload = () => {
      const uniqueName = new Date().getTime() + file.name;
      const storageRef = ref(storage, uniqueName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgressPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, image: downloadURL }));
          });
        }
      );
    };
    file && upload();
  }, [file]);
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", (await res).user.uid), {
        ...data,
      });
      setCurrentUser({ name: data.name, email: data.email, image: data.image })
      // navigate("/")
      navigate(-1)
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(data);
  return (
    <Box className="newContainer" sx={{}}>
      <Box className="top">
        <Typography variant="h5">Create Account</Typography>
      </Box>
      <Box className="bottom">
        <Box className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
            style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", }}
          />
        </Box>
        <Box className="right">
          <form onSubmit={handleAdd}>
            <Box className="formInput">
              <label htmlFor="file">
                Upload profile image: <MdOutlineDriveFolderUpload className="icon" style={{ fontSize: "2rem", cursor: "pointer", }} />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </Box>
            <Box className="formInput">
              <label>Username</label>
              <input
                type="text"
                id="name"
                placeholder="Please enter your Name"
                onChange={handleInput}
              />
            </Box>
            <Box className="formInput">
              <label>Email address</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                onChange={handleInput}
              />
            </Box>
            <Box className="formInput">
              <label>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Please enter your password"
                onChange={handleInput}
              />
            </Box>
            <button
              disabled={progressPercentage !== null && progressPercentage < 100}
              type="submit"
              style={{ width: "150px", padding: "10px", border: "none", backgroundColor: " #FF4466", color: "white", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }}
            >
              Create Account
            </button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
