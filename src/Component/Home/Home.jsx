import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/actions";
import Card from "../Card/Card";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import styles from "./styles.module.css";
const useStyles = makeStyles({
  page: {
    marginTop: "100px",
  },
  Pagination: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

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
    <div>
      <div style={{ background: "black", height: "90px", width: "100%" }}></div>

      <input
        type="text"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        name="date"
        className="input-filter"
        placeholder="filter based on date"
      />
      <div>
        <button onClick={changeToGrid}>Grid</button>
        <button onClick={changeToList}>List</button>
      </div>
      <Card data={data} date={date} toggle={toggle} />
      <Pagination
        size="large"
        className={classes.Pagination}
        count={50}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default Home;
