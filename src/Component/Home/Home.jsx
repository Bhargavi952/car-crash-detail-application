import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/actions";
import Card from "../Card/Card";
// import Pagination from "./Pagination";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import styles from './styles.module.css'
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
  const [date , setDate] = useState("")
  console.log(date)
  const handleChange = (event, value) => {
    setPage(value);
  };

  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  console.log(data, isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(page));
  }, [page]);

  return (
    <div>
      <div style={{ background: "black", height: "90px", width: "100%" }}></div>

      <input type="date" onChange={(e)=>setDate(e.target.value)}/>
      <Card data={data} />
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
