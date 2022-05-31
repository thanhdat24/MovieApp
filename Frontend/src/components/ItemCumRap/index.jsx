import React, { Fragment } from "react";
import BtnGoToCheckout from "../BtnGoToCheckOut";
import { colorTheater } from "../../constants/theaterData";
import {
  useStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./style";

export default function ItemCumRap({
  theaterClusterName,
  idShowtime,
  moviesShedule,
  currentSelectedHeThongRapChieu,
  theaterClusterAddress,
  theaterClusterPhoto,
  defaultExpanded,
}) {
  const classes = useStyles({
    color: colorTheater[theaterClusterName?.slice(0, 3).toUpperCase()],
  });
  console.log("theaterClusterName", theaterClusterName);
  console.log("moviesShedule", moviesShedule);
  console.log("currentSelectedHeThongRapChieu", currentSelectedHeThongRapChieu);
  console.log("theaterClusterAddress", theaterClusterAddress);
  console.log("theaterClusterPhoto", theaterClusterPhoto);
  return (
    <>
      <div className={classes.cumRapItem}>
        <Accordion
          key={theaterClusterName}
          square
          defaultExpanded={defaultExpanded ?? false}
        >
          <AccordionSummary>
            <img
              className={classes.imgTheater}
              src={theaterClusterPhoto}
              alt="theater"
            />
            <div className={classes.wrapInfo}>
              <p className={classes.text__first}>
                <span>{theaterClusterName.split("-")[0]}</span>
                <span className={classes.text__second}>
                  -{theaterClusterName.split("-")[1]}
                </span>
              </p>
              <p className={classes.address}>{theaterClusterAddress}</p>
            </div>
            <div style={{ clear: "both" }}></div>
          </AccordionSummary>
          <AccordionDetails>
            {moviesShedule.map((lcp) => (
              <Fragment key={lcp._id}>
                <BtnGoToCheckout movieShowtimes={lcp} />
              </Fragment>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
