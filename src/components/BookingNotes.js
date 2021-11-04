import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Divider, Avatar } from "@mui/material";
import { Edit } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";

function BookingNotes() {
  const [loader, setLoader] = useState(true);

  const handleLoading = () => {
    setLoader(false);
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  };

  return (
    <div
      style={{ background: "white", width: "100%", height: "80%" }}
      className="overflow-auto"
    >
      <div className="md:flex p-4">
        <div className="pt-4  p-1 w-full">
          <div className="flex flex-row justify-between">
            <div className="font-semibold">Booking Notes</div>
          </div>
          <Divider sx={{ width: "100%", margin: "0" }} />
          <div className="flex flex-col">
            <p
              style={{ color: "gray", fontSize: "small" }}
              className="p-2 pl-7"
            >
              Dentist Notes
            </p>
            <div className="flex justify-between">
              <div className="w-full flex justify-center items-center">
                <textarea
                  style={{ width: "90%", outline: "none", marginRight: "10px" }}
                  className="bg-gray-100 p-4"
                  placeholder="Enter Dentist Notes here.."
                ></textarea>

                <button
                  onClick={handleLoading}
                  className="bg-black text-white   h-10 w-20"
                >
                  Add
                </button>
              </div>
            </div>

            {loader ? (
              <>
                <div className="flex flex-col mt-8">
                  <p className="w-40 md:w-full">
                    You are suffering from hypertension
                  </p>
                  <div className="flex justify-between">
                    <a style={{ color: "#4dc3ff", fontSize: "medium" }}>
                      Dr Deepak Aulak
                    </a>
                    <a style={{ color: "#0099e6", fontSize: "large" }}>
                      View booking
                    </a>
                  </div>
                  <div className="">
                    <p style={{ color: "gray", fontSize: "small" }}>
                      12/02/2021 14:34:00
                    </p>
                  </div>
                </div>
                <Divider sx={{ width: "100%", margin: "0" }} />
                <div className="flex flex-col mt-8">
                  <p className="w-40 md:w-full">
                    You are suffering from hypertension
                  </p>
                  <div className="flex justify-between">
                    <a style={{ color: "#4dc3ff", fontSize: "medium" }}>
                      Dr Deepak Aulak
                    </a>
                    <a style={{ color: "#0099e6", fontSize: "large" }}>
                      View booking
                    </a>
                  </div>
                  <div className="">
                    <p style={{ color: "gray", fontSize: "small" }}>
                      12/02/2021 14:34:00
                    </p>
                  </div>
                </div>
                <Divider sx={{ width: "100%", margin: "0" }} />
                <div className="flex flex-col mt-8">
                  <p className="w-40 md:w-full">
                    You are suffering from hypertension
                  </p>
                  <div className="flex justify-between">
                    <a style={{ color: "#4dc3ff", fontSize: "medium" }}>
                      Dr Deepak Aulak
                    </a>
                    <a style={{ color: "#0099e6", fontSize: "large" }}>
                      View booking
                    </a>
                  </div>
                  <div className="">
                    <p style={{ color: "gray", fontSize: "small" }}>
                      12/02/2021 14:34:00
                    </p>
                  </div>
                </div>
                <Divider sx={{ width: "100%", margin: "0" }} />
              </>
            ) : (
              <div
                className="bg-white h-19/20 flex m-4 justify-center align-center"
                style={{ marginTop: "100px" }}
              >
                <CircularProgress sx={{ color: "black", marginTop: "40px" }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingNotes;