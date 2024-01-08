import React from "react";
import s from "./style.module.css";

const Logo = ({ img, title, subtitle }) => {
  return (
    <>
      <div className={s.container}>
        <img src={img} alt="logo" className={s.img} />
        <div className={s.title}>{title}</div>
        <div className={s.subtitle}>{subtitle}</div>
      </div>
    </>
  );
};

export default Logo;
