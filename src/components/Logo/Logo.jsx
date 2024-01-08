import React from "react";
import s from "./style.module.css";

const Logo = ({ img, title, subtitle }) => {
  return (
    <>
      <div className={s.container}>
        <img src={img} alt="logo" className={s.img} />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitle}>{subtitle}</span>
    </>
  );
};

export default Logo;
