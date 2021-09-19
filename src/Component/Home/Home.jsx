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
import Footer from "../Footer/Footer";
import Slide from "../Slide/Silde";

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
  search_input: {
    display: "flex",
    width: "40%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  heading: {
    fontSize: "50px",
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [date, setDate] = useState("2014-01-20");
  console.log(date);

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
  const filterByDate = () => {
    dispatch(fetchData(date));
    // console.log(data);
  };

  const data = useSelector((state) => state.data);
  // console.log(data);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(page, date));
  }, [page, date]);

  return (
    <>
      <Slide />
      <h1 className={classes.heading}>Car Crash Details </h1>
      <h2 style={{ textAlign: "center" }}> Search By Date </h2>
      <div className={classes.search_input}>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          placeholder="Enter the Date...."
        />
        <button className={styles.search_btn} onClick={filterByDate}>
          Search
        </button>
      </div>

      <div className={styles.btn_container}>
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
          <Card data={data} toggle={toggle} />
          <Pagination
            size="large"
            className={classes.Pagination}
            count={50}
            page={page}
            onChange={handleChange}
          />
        </>
      )}
      <Footer />
    </>
  );
};

export default Home;
