import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleData } from "../../Redux/actions";
import { useParams } from "react-router-dom";

const SingleCarDetail = () => {
  const singledata = useSelector((state) => state.singleData);
  //   console.log(singledata);

  const { collision_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleData(collision_id));
  }, []);
  return (
    <div>
      {singledata?.map((item) => {
        return (
          <>
            <h1>Vehicle-{item.vehicle_type_code1}</h1>
            <h3>Vehicle-Type-{item.vehicle_type_code2}</h3>
            <p>Crash-Date: {item.crash_date}</p>
            <p>Crash-Time :{item.crash_time}</p>
            <p>Cyclist-Injured:{item.number_of_cyclist_injured}</p>
            <p>Cyclist-Killed: {item.number_of_cyclist_killed}</p>
            <p>Motorist-Injured: {item.number_of_motorist_injured}</p>
            <p>Motorist-Killed{item.number_of_motorist_killed}</p>
            <p>Pedestrians-Injured:{item.number_of_pedestrians_injured}</p>
            <p>Pedestrians-Killed:{item.number_of_pedestrians_killed}</p>
            <p>Persons-Injured:{item.number_of_persons_injured}</p>
            <p>Persons-Killed:{item.number_of_persons_killed}</p>
            <p>Street-Name:{item.on_street_name}</p>
          </>
        );
      })}
    </div>
  );
};

export default SingleCarDetail;
