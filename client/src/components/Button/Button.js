import React from "react";
import cn from "classnames";
import styles from "../Button/Button.module.scss";

const Button = props => {
  const { children, className, onClick } = props;

  return (
    <button className={cn(styles.Button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
