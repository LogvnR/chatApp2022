import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import { useStore } from "../helpers/useStore";
import PlainButton from "../components/PlainButton/PlainButton";

interface FormState {
  username: string;
}

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  const { setUsername } = useStore();

  return (
    <form
      onSubmit={handleSubmit(({ username }) => {
        setUsername(username);
      })}
    >
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h4 className={styles.title}>ChatApp</h4>
          <div className={styles["intro-container"]}>
            <h1 className={styles.welcome}>Welcome!</h1>
            <p className={styles.desc}>please enter a username</p>
          </div>
          <div className={styles["input-container"]}>
            <input
              autoComplete="off"
              className={
                errors.username
                  ? `${styles.input} ${styles.error}`
                  : styles.input
              }
              {...register("username", { required: "Username is required..." })}
              type="text"
            />
            {errors.username && (
              <p className={styles["error-text"]}>
                {" "}
                {errors.username.message}{" "}
              </p>
            )}
          </div>
          <PlainButton width="full">enter</PlainButton>
        </main>
      </div>
    </form>
  );
};

export default Home;
