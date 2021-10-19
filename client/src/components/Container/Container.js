import React from "react";
import styles from "../Container/Container.module.scss";
import cn from "classnames";

function Container(props) {
  const { children, isHeight } = props;

  return (
    <div
      className={cn(
        { [styles.AppBackground]: isHeight },
        styles.MainContainer
      )}>
      <div
        className={cn(styles.Container, { [styles.WindowHeight]: isHeight })}>
        {children}
      </div>
    </div>
  );
}

export default Container;
