import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import {
  useMessagesSubscription,
  useSendMessageMutation,
} from "../src/generated/graphql";
import styles from "../styles/test-chatroom.module.css";

interface InputInterface {
  username: string;
  message: string;
}

const TestChatRoom: NextPage = () => {
  /* 
Fully working example of graphql hooks + react-hook-form
The basics of the application are being applied on this page.

- Websocket subscription
- Graphql Mutations
  - Graphql hooks created with introspection code-gen
- React-Hook-Form best practices

*/

  const {
    register,
    handleSubmit,
    resetField,
    getValues,
    formState: { errors },
  } = useForm<InputInterface>();

  const { data, loading } = useMessagesSubscription();
  const [sendMessage] = useSendMessageMutation();

  if (loading) {
    return (
      <div className={styles.loading}>
        <h1 className={styles.loading__header}>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Test Chat Room</h1>

      <form
        onSubmit={handleSubmit(async ({ username, message }) => {
          await sendMessage({
            variables: {
              username,
              message,
            },
          });

          resetField("message");
        })}
      >
        <input
          placeholder="username"
          autoComplete="off"
          {...register("username", { required: "Username is required..." })}
          type="text"
        />
        <input
          placeholder="message"
          autoComplete="off"
          {...register("message", {
            required: "Message is required...",
          })}
          type="text"
        />
        <p className={styles.error}>
          {errors.username?.message} {errors.message?.message}
        </p>

        <input type="submit" />
      </form>

      {data?.MessageSubscription?.map((message) => {
        return (
          <div
            className={
              message?.sender === getValues("username")
                ? `${styles.self} ${styles.message}`
                : styles.message
            }
          >
            <div>
              <b>{message?.sender}:</b> {message?.message}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestChatRoom;
