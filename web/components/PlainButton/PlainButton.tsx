import React, { FC } from "react";
import styles from "../../styles/PlainButton.module.css";

interface PlainButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  width: "full" | "limited";
}

const PlainButton: FC<PlainButtonProps> = ({ children, ...props }) => {
  return (
    <button
      style={{
        maxWidth: props.width === "full" ? "100%" : "15rem",
      }}
      className={styles.btn}
      {...props}
    >
      {children}
    </button>
  );
};

export default PlainButton;
