import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.scss";
const DATE_OPTIONS = {
  year: "numeric",
  month: "short"
};

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive =
        currentSlide && currentSlide.admin_video_id === movie.admin_video_id;

      return (
        <div
          ref={elementRef}
          className={cx("item sliderthumb-text", {
            "item--open": isActive
          })}
          style={{ backgroundImage: "url(" + movie.default_image + ")" }}
        >
          <a onClick={() => onSelectSlide(movie)} className="close-overlay" />
          <div className="width-100 slider-content-box">
            <Link to={`/video/${movie.admin_video_id}`}>
              <div className="thumb-playicon">
                <i className="fas fa-play" />
              </div>
            </Link>
            <h4 className="thumb-title">{movie.title}</h4>
            <h5 className="thumb-details">
              <span className="green-clr">
                {new Date(movie.publish_time).toLocaleDateString(
                  "en-US",
                  DATE_OPTIONS
                )}
              </span>
              <span className="grey-box">
                {movie.age}
                <i className="fas fa-plus small" /> / 25{" "}
                <span className="small">Views</span>
              </span>
            </h5>
            <p className="thumb-desc">{movie.description} </p>
            <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
          </div>
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
