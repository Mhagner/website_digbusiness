import React from "react";

const PhotoBox = ({ image, label}) => {
  return (
    <div className="col-12 col-lg-4 work-box">
      <div className="photobox photobox_type10">
        <div className="photobox__previewbox">
          <img src={image} className="photobox__preview" alt="Preview" />
          <span className="photobox__label">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoBox
