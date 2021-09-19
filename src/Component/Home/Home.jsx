import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/actions";
import Card from "../Card/Card";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import AppsIcon from "@mui/icons-material/Apps";
import ReorderIcon from "@mui/icons-material/Reorder";
import styles from "./styles.module.css";

const useStyles = makeStyles((theme) => ({
  page: {
    marginTop: "100px",
  },
  Pagination: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "60px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "30px 0",
    },
  },
  loader: {
    width: "100vw",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [date, setDate] = useState("");
  //   console.log(date)

  const [toggle, setToggle] = useState(true);
  const changeToList = () => {
    setToggle(false);
  };
  const changeToGrid = () => {
    setToggle(true);
  };
  const handleChange = (event, value) => {
    setPage(value);
  };

  const data = useSelector((state) => state.data);
  console.log(data);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(page));
  }, [page]);

  return (
    <>
    <h1 style={{textAlign:"center"}} >Accident Details</h1>


      <div className={styles.btn_container}>
        Filter by Date :
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          // value={date}
          // name="date"
          // className={styles.input_filter}
          placeholder="Enter the Date...."
        />
        <button className={styles.btn} onClick={changeToGrid}>
          <AppsIcon />
        </button>
        <button className={styles.btn} onClick={changeToList}>
          <ReorderIcon />
        </button>
      </div>
      {isLoading ? (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Card data={data} date={date} toggle={toggle} />
          <Pagination
            size="large"
            className={classes.Pagination}
            count={50}
            page={page}
            onChange={handleChange}
          />
        </>
      )}
    </>
  );
};

export default Home;
