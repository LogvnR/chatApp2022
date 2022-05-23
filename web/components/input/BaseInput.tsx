import React, { FC } from "react";
import styles from "./BaseInput.module.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

const BaseInput: FC<InputProps> = (props) => {
  return (
    <input
      style={{
        marginTop: props.mt,
        marginBottom: props.mb,
        marginRight: props.mr,
        marginLeft: props.ml,
      }}
      className={styles.input}
      placeholder={props.placeholder}
      {...props}
    />
  );
};

export default BaseInput;
