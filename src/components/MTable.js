/** @format */

import React, { useState, forwardRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MaterialTable, { MTableToolbar } from "material-table";
import TablePagination from "@mui/material/TablePagination";
import { ArrowDropDownSharp } from "@mui/icons-material";
import Vector from '../assets/Vector.svg'
import {
  Avatar,
  InputBase,
  IconButton,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import { Link } from "react-router-dom";
import { MoreVert } from "@mui/icons-material";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import CustomPagination from "./CustomPagination";
// className=" h-screen w-full mt-20 "

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Table() {
  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 30));
    setPage(0);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEll, setAnchorEll] = React.useState(null);
  const [hidden, setHidden] = React.useState("visible");
  const [hide, setHide] = React.useState("hidden");
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEll);
  const [showError, setShowError] = useState(false);
  const [showError2, setShowError2] = useState(false);
  const handleButton = (event) => {
    setHide("visible");
  };

  const handleClick = (event) => {
    // setHidden('hidden');
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    // setHidden('hidden');
    event.preventDefault();

    setAnchorEll(event.currentTarget);
  };
  const handleClose = (event) => {
    // setHidden('visible');

    event.preventDefault();
    setAnchorEl(null);
  };
  const handleYes = (event) => {
    // setHidden('visible');

    event.preventDefault();
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      
    }, 3000);
    setAnchorEl(null);
  };
  const handleClose2 = (event) => {
    // setHidden('visible');
    event.preventDefault();
    setAnchorEll(null);
  };
  const handleYes2 = (event) => {
    // setHidden('visible');
    event.preventDefault();
    setShowError2(true);
    setTimeout(() => {
      setShowError2(false);
      
    }, 3000);
    setAnchorEll(null);
  };

  const handleMenuClick = () => {
    // e.preventDefault();
  };

  return (
    <div style={{ height: "100vh", width: "100%", marginTop: "100px" }}>
      <div className="lg:flex flex-col justify-between text-white md:flex-row ">
        <div style={{ width: "250px" }}>
          <Paper component="form" className="mb-4 w-60">
            <IconButton type="submit" sx={{ p: "5px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Paper>
        </div>
        <div style={{ width: "250px" }}>
          <button className="bg-black text-white font-bold py-2 px-4 rounded w-full h-4/5 mb-3">
            Add New
          </button>
        </div>
      </div>

      <MaterialTable
        style={{ overflow: "hidden" , zIndex : "1" }}
        icons={{
          SortArrow: forwardRef((props, ref) => (
            <ArrowDropDownSharp sx={{ color: "black" }} {...props} ref={ref} />
          )),
        }}
        localization={{
          pagination: {
            labelRowsSelect: "Showing results",
            labelDisplayedRows: " out of {count}",

            labelRowsPerPage: "Showing results",
            paginationPosition: "left",
          },
        }}
        title=""
        options={{
          search: false,
          sorting: true,
          headerStyle: { position: "sticky", paddingLeft: "20px" },

          searchFieldAlignment: "left",
          searchFieldStyle: {
            background: "gray",
          },
          actionsColumnIndex: -1,
        }}
        // actions={[

        //   rowData => ({
        //     icon: "⋮",
        //     tooltip: 'Details',
        //     onClick: (event, rowData) => {
        //       return (<DialogBox/>)}
        //   })]}

        columns={[
          {
            title: "First Name",
            field: "name",
            sortMethod: (a, b) => {
              if (a === b) {
                return 0;
              }
              const aReverse = a.split("").reverse().join("");
              const bReverse = b.split("").reverse().join("");
              return aReverse > bReverse ? 1 : -1;
            },
            render: (rowData) => (
              <div className="flex justify-center items-center">
                <Avatar src={rowData.imageUrl} className="mr-2" />
                <h1>{rowData.name}</h1>
              </div>
            ),
            cellStyle: {
              minWidth: "200px",
              paddingRight: "80px",
            },
          },

          {
            title: "Last Name",
            field: "lastName",
            cellStyle: {
              minWidth: "150px",
            },
          },
          { title: "Email Address", field: "Email" },
          {
            title: "Status",
            field: "status",
            render: (rowData) => (
              <span
                style={{
                  border: `${
                    rowData.status == "Verified"
                      ? "solid #00b36b"
                      : "solid #ff3385"
                  }`,
                  borderRadius: "20px",
                  padding: "5px 8px 5px",
                  color: `${
                    rowData.status == "Verified" ? "#00b36b" : "#ff3385"
                  }`,
                  fontWeight: "bold",
                }}
              >
                {" "}
                {rowData.status}{" "}
              </span>
            ),
            cellStyle: {
              minWidth: "150px",
            },
          },
          {
            title: "Profile Status",
            field: "ProfileStatus",
            render: (rowData) => (
              <span
                style={{
                  border: `${
                    rowData.ProfileStatus == "In complete"
                      ? "solid orange"
                      : "solid #e0e0d1"
                  }`,
                  borderRadius: "20px",
                  padding: "5px 8px 5px",
                  color: `${
                    rowData.ProfileStatus == "In complete"
                      ? "orange"
                      : "#e0e0d1"
                  }`,
                  fontWeight: "bold",
                }}
              >
                {" "}
                {rowData.ProfileStatus}{" "}
              </span>
            ),
            cellStyle: {
              minWidth: "150px",
            },
          },
          {
            title: "Created On",
            field: "createdOn",
            cellStyle: {
              minWidth: "200px",
            },
          },
          {
            title: "",
            field: "actions",
            render: (rowData) => (
              <div>
                {/* <IconButton onClick={handleButton}><MoreVert/></IconButton> */}
                <Menu as="div" className="relative inline-block  text-left ">
                  <div>
                    <Menu.Button className="inline-flex z-50 justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700  focus:outline-none">
                      <MoreVert
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute z-50 right-0 mt-2 w-56 rounded-md bg-white ring-1 ring-black ring-opacity-5 w-40 focus:outline-none">
                      <div className="py-1">
                        <Link to="/Users/Userdetails">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                View Details
                              </a>
                            )}
                          </Menu.Item>
                        </Link>
                        <Link to="/edituser">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={handleClick}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Deactivate User
                              </a>
                            )}
                          </Menu.Item>
                        </Link>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Make Profile Complete
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                style={{ color: "red" }}
                                onClick={handleClick2}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-red-500"
                                    : "text-gray-700",
                                  "block w-full text-left px-4 py-2 text-sm"
                                )}
                              >
                                Delete User
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div>
                  <Dialog
                    BackdropProps={{
                      style: { backgroundColor: "rgba(0,0,0,0.03)" },
                    }}
                    sx={{
                      "& .MuiDialog-container .MuiPaper-root": {
                        boxShadow: "none",
                        height: "36%",
                        borderRadius: "15px",
                        paddingTop: "20px",
                      },
                    }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Are you sure?"}
                    </DialogTitle>
                    <DialogContent style={{ overflow: "hidden" }}>
                      <DialogContentText id="alert-dialog-description">
                        User will not longer be able to access the account if
                        you deactivate it. Click "Yes" to deactivate or "No" to
                        cancel the action.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        style={{ height: "40px", width: "80px", margin: "0px" }}
                        onClick={handleClose}
                      >
                        No
                      </Button>
                      <Button
                        style={{
                          background: "black",
                          height: "40px",
                          width: "80px",
                          color: "white",
                          margin: "20px",
                        }}
                        onClick={handleYes}
                        autoFocus
                      >
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Dialog
                    BackdropProps={{
                      style: { backgroundColor: "rgba(0,0,0,0.03)" },
                    }}
                    sx={{
                      "& .MuiDialog-container .MuiPaper-root": {
                        boxShadow: "none",
                        height: "37%",
                        borderRadius: "15px",
                        paddingTop: "20px",
                      },
                    }}
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Are you sure?"}
                    </DialogTitle>
                    <DialogContent sx={{ overflow: "hidden" }}>
                      <DialogContentText id="alert-dialog-description">
                        All information related to the user wil be deleted. You
                        can still see the information linked to that user in
                        other section of the application. Click 'Yes' to delete
                        or 'No' to cacncel the action.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        style={{ height: "40px", width: "80px", margin: "0px" }}
                        onClick={handleClose2}
                      >
                        No
                      </Button>
                      <Button
                        style={{
                          background: "black",
                          height: "40px",
                          width: "80px",
                          color: "white",
                          margin: "20px",
                        }}
                        onClick={handleYes2}
                        autoFocus
                      >
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            ),
          },
        ]}
        // className={` mx-4 px-4 py-2 text-base rounded-full text-${rowData.ProfileStatus=="incomplete"?"yellow":"gray"}-600 border border-${rowData.ProfileStatus=="incomplete"?"yellow":"gray"}-600`}

        data={[
          {
            name: "Jason",
            lastName: "Brady",
            Email: "jason@toothfairyapp.co.uk",
            createdOn: "25-10-2021 11:18:00",
            imageUrl:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            status: "Verified",
            ProfileStatus: "In complete",
          },
          {
            name: "Kumar",
            lastName: "Ariz",
            Email: "kumar@toothfairyapp.co.uk",
            createdOn: "25-10-2021 11:18:00",
            imageUrl:
              "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            status: "Not verified",
            ProfileStatus: "Complete",
          },
          {
            name: "Kireten",
            lastName: "Morrison",
            Email: "kriten@toothfairyapp.co.uk",
            createdOn: "25-10-2021 11:18:00",
            imageUrl:
              "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            status: "Not verified",
            ProfileStatus: "Complete",
          },
          {
            name: "Jason",
            lastName: "Brady",
            Email: "jason@toothfairyapp.co.uk",
            createdOn: "25-10-2021 11:18:00",
            imageUrl:
              "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
            status: "Verified",
            ProfileStatus: "In complete",
          },
        ]}
      />
      {showError ? (
       
       <div
         className="fixed top-0 left-0 z-50 py-3  pl-2 leading-normal   rounded-lg text-black"
         role="alert"
         style={{
           marginTop: "42%",
           marginLeft: "1%",
           color: "#fff",
           width: "300px",
           background: "#05944f",
         }}
       >
         <p>User is now deactivated</p>
         <span className="absolute inset-y-0 right-0 text-white flex items-center mr-4 cursor-pointer" onClick={() => setShowError(false)}>
           <img  src={Vector}  alt='' onClick={()=>setShowError(false)}  />
           {/* <svg
             className="w-4 h-4 text-white fill-current"
             style={{ color: "#fff" }}
             role="button"
             viewBox="0 0 20 20"
            
           >
             <path
               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
               clip-rule="evenodd"
               fill-rule="evenodd"
             ></path>
           </svg> */}

         </span>
       </div>
     ) : (
       ""
     )}

      {showError2 ? (
       <div
       className="fixed top-0 left-0 z-50 py-3  pl-2 leading-normal   rounded-lg text-black"
       role="alert"
       style={{
         marginTop: "42%",
         marginLeft: "1%",
         color: "#fff",
         width: "300px",
         background: "#05944f",
       }}
     >
       <p>User account Deleted</p>
       <span className="absolute inset-y-0 right-0 text-white flex items-center mr-4 cursor-pointer" onClick={() => setShowError(false)}>
         <img  src={Vector}  alt=''    onClick={()=>setShowError2(false)}/>
         {/* <svg
           className="w-4 h-4 text-white fill-current"
           style={{ color: "#fff" }}
           role="button"
           viewBox="0 0 20 20"
          
         >
           <path
             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
             clip-rule="evenodd"
             fill-rule="evenodd"
           ></path>
         </svg> */}

       </span>
     </div>
   ) : (
     ""
   )}
    </div>
  );
}
