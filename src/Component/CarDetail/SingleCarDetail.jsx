import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleData } from "../../Redux/actions";
import { useParams } from "react-router-dom";
import img1 from "../../Images/accident.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Socialmedia from "../Footer/Socialmedia";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "70%",
    border: "none",
    minHeight: "200px",
    margin: "3% 16%",
    fontSize: "15px",

    boxShadow: "rgba(75, 73, 73, 0.75) 0px 5px 15px",
    zIndex: "2",
    borderRadius: "10px",

    "&:hover": {
      transform: "scale(0.9)",
      transition: " all 0.3s ease-in-out",
      cursor: "pointer",
    },
  },

  left_container: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "340px",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
      width: "90%",
    },
  },
  right_container: {
    width: "50%",
    display: "flex",
    margin: "0 10px",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      fontSize: "8px",
      color: "#000",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
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

const SingleCarDetail = () => {
  const classes = useStyles();
  const singledata = useSelector((state) => state.singleData);
  const isLoading = useSelector((state) => state.isLoading);
  //   console.log(singledata);

  const { collision_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleData(collision_id));
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      ) : (
        <>
          {singledata?.map((item) => {
            return (
              <Paper key={item.collision_id} className={classes.paper}>
                <div className={classes.container}>
                  <div className={classes.left_container}>
                    <img width="100%" height="100%" src={img1} alt="image" />
                  </div>
                  <div className={classes.right_container}>
                    <div>
                      <h3> Accident Deatils</h3>
                      <h4>Vehicle-1 : {item.vehicle_type_code1}</h4>
                      <h4>Vehicle-2 : {item.vehicle_type_code2}</h4>
                      <p>Crash-Date : {item.crash_date}</p>
                      <p>Crash-Time : {item.crash_date.slice(0, 10)}</p>
                      <p>Street-Name : {item.on_street_name}</p>
                    </div>
                    <div>
                      <h3>Injured Deatils</h3>
                      <p>Cyclist-Injured : {item.number_of_cyclist_injured}</p>
                      <p>Cyclist-Killed : {item.number_of_cyclist_killed}</p>
                      <p>
                        Motorist-Injured : {item.number_of_motorist_injured}
                      </p>
                      <p>Motorist-Killed : {item.number_of_motorist_killed}</p>
                      <p>
                        Pedestrians-Injured :
                        {item.number_of_pedestrians_injured}
                      </p>
                      <p>
                        Pedestrians-Killed : {item.number_of_pedestrians_killed}
                      </p>
                      <p>Persons-Injured : {item.number_of_persons_injured}</p>
                      <p>Persons-Killed : {item.number_of_persons_killed}</p>
                    </div>
                  </div>
                </div>
              </Paper>
            );
          })}
        </>
      )}
      <Socialmedia />
    </div>
  );
};

export default SingleCarDetail;
