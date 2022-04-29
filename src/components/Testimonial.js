import React from 'react';
import './Testimonial.css';

const Testimonial = (props) => {
  console.log(props.colorTheme);

  return (
    <div
      style={{
        width: `${props.width}%`,
        backgroundColor: props.bgColor,
      }}
      className="testimonial"
    >
      <div className="user">
        <img
          src={props.profile_image}
          className="profile-image"
          style={{ borderColor: props.borderColor }}
          alt={props.username}
        />
        <div className="user-info">
          <p className={`username ${props.colorTheme.username}`}>
            {props.username}
          </p>
          <p className={`job-title ${props.colorTheme.jobTitle}`}>
            {props.jobTitle}
          </p>
        </div>
      </div>
      <p className={`main-para ${props.colorTheme.mainPara}`}>
        {props.main_para}
      </p>
      <blockquote className={`review-quote ${props.colorTheme.reviewQuote}`}>
        {props.quote}
      </blockquote>
    </div>
  );
};

export default Testimonial;
