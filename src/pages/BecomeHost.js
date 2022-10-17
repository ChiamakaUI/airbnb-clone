import { Box, Typography, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import { currentUserContext } from "../App";
import "../Styles/Host.css"
import { ref, push } from "firebase/database";
import { database, storage } from "../config/firebase";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuid } from 'uuid';


const BecomeHost = () => {
  const [step, setStep] = useState(0);
  const { currentUser } = useContext(currentUserContext);
  const [formData, setFormData] = useState({
    houseName: "",
    houseLocation: "",
    houseDescription: "",
    housePrice: "",
    houseType: "",
  });
  const [imageUrls, setImageUrls] = useState([]);
  const [images, setImages] = useState([]);

  const FormTitles = [
    "House name & location",
    "House price & description",
    "House images & House Type",
  ];
  const options = [
    "Rental unit",
    "Condo",
    "Loft",
    "Serviced apartment",
    "Casa",
    "Vacation home",
  ];
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  console.log(small_id)
  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      console.log(newImage);
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };
  const getDownloadableURL = () => {
    if (images.length === 0) {
      alert("Please, select files to continue");
      return;
    }
    images.forEach((image) => {
      const uniqueName = new Date().getTime() + image.id + image.name;
      const imageRef = storageRef(storage, `houseImages/${uniqueName}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
    alert("all done");
  };

  const addHouseListing = () => {
    // console.log(currentUser)
    const data = {
      ...formData,
      houseImages: imageUrls,
      isNew: true,
      isLiked: false,
      rating: 4.5,
      hostName: currentUser?.name,
      hostImage: currentUser?.image,
      id: 22,
    };
    // console.log(data);
    push(ref(database, "houses/"), data);
  };

  const HouseNameNLocation = ({ formData, setFormData }) => {
    return (
      <Box className="sign-up-container">
        <TextField
          label="House Name"
          variant="outlined"
          required
          type="text"
          fullWidth
          margin="dense"
          value={formData.houseName}
          onChange={(event) =>
            setFormData({ ...formData, houseName: event.target.value })
          }
        />
        {/* <TextField
          label="House Name"
          variant="outlined"
          required
          type="text"
          fullWidth
          margin="dense"
          value={houseName}
          onChange={(e) => setHouseName(e.target.value)}
        />
     <input label="House Name"  type="text" value={formData.houseName} onChange={(event) =>
            setFormData({ ...formData, houseName: event.target.value })
          }/> */}

        <TextField
          variant="outlined"
          required
          fullWidth
          margin="dense"
          label="House Location"
          placeholder="Enter State and country"
          value={formData.houseLocation}
          onChange={(event) =>
            setFormData({ ...formData, houseLocation: event.target.value })
          }
        />
      </Box>
    );
  };
  const HousePriceNDescription = ({ formData, setFormData }) => {
    return (
      <Box className="personal-info-container">
        <TextField
          variant="outlined"
          required
          fullWidth
          margin="dense"
          label="House Price"
          placeholder="How much do you charge by night"
          value={formData.housePrice}
          onChange={(event) =>
            setFormData({ ...formData, housePrice: event.target.value })
          }
        />

        <TextField
          variant="outlined"
          required
          fullWidth
          margin="dense"
          multiline
          label="House Description"
          placeholder="How would you describe your house"
          value={formData.houseDescription}
          onChange={(event) =>
            setFormData({ ...formData, houseDescription: event.target.value })
          }
        />
      </Box>
    );
  };
  const HouseImagesNType = ({ formData, setFormData }) => {
    return (
      <Box className="other-info-container">
        <select
          onChange={(event) =>
            setFormData({ ...formData, houseType: event.target.value })
          }
        >
          <option>Please choose one option</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <Box className="formInput">
          <label htmlFor="file">Upload house images:</label>
          <input type="file" id="file" multiple onChange={handleChange} />
          <MdOutlineDriveFolderUpload
            className="icon"
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={getDownloadableURL}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "85%",
            justifyContent: "space-between",
          }}
        >
          {imageUrls.map((url, index) => (
            <img
              src={url}
              alt=""
              key={index}
              style={{ width: "200px", height: "150px" }}
            />
          ))}
        </Box>
      </Box>
    );
  };
  const PageDisplay = () => {
    if (step === 0) {
      return (
        <HouseNameNLocation formData={formData} setFormData={setFormData} />
      );
    } else if (step === 1) {
      return (
        <HousePriceNDescription formData={formData} setFormData={setFormData} />
      );
    } else {
      return <HouseImagesNType formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <Box className="Host">
      <Box className="form">
        <Box className="progressbar"></Box>
        <Box className="form-container">
          <Box className="header">
            <Typography variant="h5">{FormTitles[step]}</Typography>
          </Box>
          <Box className="body">{PageDisplay()}</Box>
          <Box className="footer">
            <button
              disabled={step === 0}
              onClick={() => {
                setStep((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (step === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  // console.log(formData);
                  addHouseListing();
                } else {
                  setStep((currPage) => currPage + 1);
                }
              }}
            >
              {step === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BecomeHost;
