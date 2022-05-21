import React, { FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  subtitle?: string;
}

const Button: FC<ButtonProps> = ({ title, subtitle, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {title} <span className={styles.subtitle}>{subtitle}</span>
    </button>
  );
};

export default Button;
