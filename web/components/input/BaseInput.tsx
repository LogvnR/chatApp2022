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
  register?: any;
}

const BaseInput: FC<InputProps> = ({ register, ...props }) => {
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
      {...register}
      {...props}
    />
  );
};

export default BaseInput;
