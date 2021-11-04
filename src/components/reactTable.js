import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTable, useSortBy,usePagination } from 'react-table'
import { Avatar } from '@mui/material'
import {MoreVert} from '@mui/icons-material'
import { Menu, Transition } from "@headlessui/react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './reacttab.css';
import {
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
import zIndex from '@mui/material/styles/zIndex'

const Styles = styled.div`

 

  
 
  table {
    
    background:'white';
    border-spacing: 0;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    
   

    
    tr {
        
      border-style: solid;
      border-width: 0 0 0.4px 0;
      border-color: #E5E5EA;
      
  
      :last-child {
       
      }
    }
        th{ 
            
            
            
            
            
            :nth-child(7){
                color:white;
                max-width:20px;
                width:10px;
                padding-right:0px;
                margin-right:0px;
                
            }

        }
    th,
    td {
      margin: 0;
      padding: 0.5rem; 
      min-width:150px;     
      overflow:visible;
      
        :first-child {
            padding-right:20px;
        }
      :last-child {
        border-right: 0;
        margin-right: 0;
        padding-right: 0;
        min-width:10px;
       
        
      }
      :nth-child(5){
        
        text-align:center;
        

        
    }
      :nth-child(6){
        min-width:200px;
        padding-right:0px;
        margin-right:0px;
        text-align:right;
        

        
    }
    }
  }
`
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Table({ 
  columns,
    data,
    dataCount,
  fetchData,
  loading,
  pageCount: controlledPageCount, }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    headerGroups,
    rows,
    prepareRow,
    getTableProps,
    getTableBodyProps,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0 }, 
      manualPagination: true, 
      pageCount: controlledPageCount,
      sortBy: [
        {
            id: 'columnId',
            desc: false
        }
    ]
  },
    useSortBy,
    usePagination
   
  )
  
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize })
  }, [fetchData, pageIndex, pageSize])

  // Render the UI for your table
  return (
      <div  >
    <div  style={{overflowX:'auto',height:'70vh'}}>
    <table className='bg-white' {...getTableProps()}>
      <thead style ={{fontFamily: 'Epilogue, sans-serif',paddingTop:'20px'}}>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th  {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                {column.isSorted
                      ? column.isSortedDesc
                        ? <ArrowDropDownIcon/>
                        : <ArrowDropUpIcon/>
                      : <ArrowDropDownIcon/>}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td  {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
    <div className ="overflow-auto" style ={{display:'flex',justifyContent:'space-between',width:'100%',fontFamily: 'Epilogue, sans-serif',fontWeight:'normal'}}>
       {' '}
        <div>
          Showing results{'    '}

          <select
          style ={{color:'black',fontWeight:'normal'}}
          className='bg-white p-2 m-4 outline-none'
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {dataCount >=10?[10, 20, 30, 40, 50].map(pageSize => (
            <option  key={pageSize} value={pageSize}>
             {pageSize}
            </option>
          )):<option>{dataCount}</option>}
        </select>
           
            Out of {dataCount}
         {' '} 
        </div>
        
        
       <div >
       <button style ={{color:`${canPreviousPage?'black':'grey'}`,fontWeight:'normal'}} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button  style ={{color:`${canPreviousPage?'black':'grey'}`,fontWeight:'normal'}} onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'Prev'}
        </button>{' '}
        <select
        style ={{color:'black',fontWeight:'normal'}}
          className='bg-white p-2 m-4 outline-none'
          value={pageIndex+1}
          onChange={e => {
            console.log("INdEX",e.target.value)
            gotoPage(Number(e.target.value))
          }}
        >
          {[1, 2, 3, 4, 5].map(pageS => (
            <option className=' text-grey-100' key={pageS} value={pageS}>
             {pageS}
            </option>
          ))}
        </select> {' '}
        <button  style ={{color:`${canNextPage?'black':'grey'}`,fontWeight:'normal'}} onClick={() => nextPage()} disabled={!canNextPage}>
          {'Next'}
        </button>{' '}
        <button style ={{color:`${canNextPage?'black':'grey'}`,fontWeight:'normal'}} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>'}
        </button>
       </div>
      </div>

    </div>
  )
}

function Rtable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEll, setAnchorEll] = React.useState(null);
  const [showError, setShowError] = React.useState(false);
  const [showError2, setShowError2] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);



  const handleClose = (event) => {
    // setHidden('visible');
    
    event.preventDefault();
    setAnchorEl(null);
  };
  const handleYes = (event) => {
    // setHidden('visible');
    
    event.preventDefault();
    setShowError2(true);
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    // setHidden('hidden');
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = (event) => {
    // setHidden('visible');
    
    event.preventDefault();
    setAnchorEll(null);
  };
  const handleYes2 = (event) => {
    // setHidden('visible');
    
    event.preventDefault();
    setShowError(true);
    setAnchorEll(null);
  };
  const handleClick2 = (event) => {
    // setHidden('hidden');
    event.preventDefault();
    setAnchorEll(event.currentTarget);
  };

  React.useEffect(()=>{
    setOpen(Boolean(anchorEl));
    setOpen2(Boolean(anchorEll));
    
  })

  const columns =  [
     
          {
            Header: 'First Name',
            accessor: d =>(
              `${d.name},${d.imageUrl}`
            ),
            width:'200px',
            padding:'40px',
            Cell: ({ cell: { value } }) => {
              const val = value.split(',');
              return(
                <div className="flex justify-center items-center">
                
                  
                  <Avatar src={val[1]} className="mr-2" />
                  <h1>{val[0]}</h1>
                
                
              
             
            </div>
              )
              }
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
            maxWidth:'400px',
            padding:'40px',
            width: 200,
          },
          {
            Header: 'Email address',
            accessor: 'Email',
          },
          {
            Header: 'Status',
            accessor: 'status',
            padding:100,
           
            Cell: ({ cell: { value } }) => (
              <span
                style={{
                  
                  border: `${
                    value == "Verified"
                      ? "solid #00b36b"
                      : "solid #ff3385"
                  }`,
                  borderRadius: "20px",
                  padding: "5px 8px 5px",
                  color: `${
                    value == "Verified" ? "#00b36b" : "#ff3385"
                  }`,
                  fontWeight: "bold",
                }}
              >
                {" "}
                {value}{" "}
              </span>
             
             
              )

          },
          {
            Header: 'Profile Status',
            accessor: 'ProfileStatus',
            Cell: ({ cell: { value } }) => (
              <span
              style={{
                border: `${
                  value == "In complete"
                    ? "solid orange"
                    : "solid #e0e0d1"
                }`,
                borderRadius: "20px",
                padding: "5px 8px 5px",
                color: `${
                  value == "In complete"
                    ? "orange"
                    : "#e0e0d1"
                }`,
                fontWeight: "bold",
              }}
            >
              {" "}
              {value}{" "}
            </span>
              )
          },
          {
            Header: 'Created On',
            accessor: 'createdOn',
          },
         
         


          {
            Header: '',
            accessor: 'action',
           
            Cell: ({ cell: { value } }) => {
             
             return(
              <div >
              {/* <IconButton onClick={handleButton}><MoreVert/></IconButton> */}
              <Menu as="div" className="relative inline-block  text-left ">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700  focus:outline-none">
                    <MoreVert
                      className="p-0 m-0"

                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

              
                  <div >
                  <Menu.Items className="origin-top-right absolute z-50 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-40 focus:outline-none">
                    <div   className="py-1">
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
                  </div>
               
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
                      borderRadius:'15px',
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
                      borderRadius:'15px',
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
                  <DialogContent sx ={{overflow:'hidden'}}>
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
           
             )
              
                            }


            
          },
      
    ]
    
  


 const  sdata=[
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
    

  ]

  const [data, setData] = React.useState([])
  const [dataCount, setDataCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false)
  const [pageCount, setPageCount] = React.useState(0)
  const fetchIdRef = React.useRef(0)

  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current

    // Set the loading state
    setLoading(true)
    setDataCount(sdata.length)

    // We'll even set a delay to simulate a server here
    setTimeout(() => {
      // Only update the data if this is the latest fetch
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex
        const endRow = startRow + pageSize
        setData(sdata.slice(startRow, endRow))
        
        // Your server could send back total page count.
        // For now we'll just fake it, too
        setPageCount(Math.ceil(sdata.length / pageSize))

        setLoading(false)
      }
    }, 1000)
  }, [])

  // const data = React.useMemo(() => makeData(20), [])

  return (
    <Styles>
      <Table


getTdProps={(state, rowInfo, column, instance) => ({
  style: {
      cursor: 'pointer',
      overflow: 'hidden',
      background:'red',
  },
  onClick: () => this.onSelect(rowInfo, column)
})}
      
       columns={columns}
       data={data}
       dataCount={dataCount}
       fetchData={fetchData}
       loading={loading}
       pageCount={pageCount} />
       {showError2 ? (
            <Dialog open style={{marginRight:'84%',marginTop:'37%',width:'25%'}}
            sx ={{
              "& .MuiDialog-paper": {
                boxShadow: "none"
              }
            }}
            BackdropProps={{
              style: { backgroundColor: "transparent" ,boxShadow:'none'},
            }}
            
            >
              <div
                class="relative py-3 pl-4 pr-10  text-white bg-green-500 rounded-lg"
                role="alert"
              >
                <p>user account deactivated</p>
                <span
                  onClick={()=>setShowError2(false)}
                  class="absolute inset-y-0 text-bold cursor-pointer right-0 text-white flex items-center mr-4"
                >
                  x
                </span>
              </div>
            </Dialog>
          ) : (
            ""
          )}
          {showError ? (
             <Dialog open style={{marginRight:'80%',marginTop:'37%',width:'25%'}}
             sx ={{
               "& .MuiDialog-paper": {
                 boxShadow: "none",
                 marginLeft:'0',
                 marginBottom:'0',
               }
             }}
            BackdropProps={{
              style: { backgroundColor: "transparent" },
            }}
            
            >
              <div
                class="relative py-3 pl-4 pr-10  text-white bg-green-500 rounded-lg"
                role="alert"
              >
                <p>Account Deleted</p>
                <span
                  onClick={()=>setShowError(false)}
                  class="absolute inset-y-0 text-bold cursor-pointer right-0 text-white flex items-center mr-4"
                >
                  x
                </span>
              </div>
            </Dialog>
          ) : (
            ""
          )}
    </Styles>
  )
}

export default Rtable;
