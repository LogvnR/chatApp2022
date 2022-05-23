import React from "react";
import { useForm } from "react-hook-form";
import {
  useSendMessageMutation,
  useSetIsTypingMutation,
  useMessagesSubscription,
  useIsTypingSubscription,
} from "../../src/generated/graphql";
import Button from "../button/Button";
import styles from "../../styles/test-chatroom.module.css";
import BaseInput from "../input/BaseInput";

interface InputInterface {
  username: string;
  message: string;
}

const Chatroom = () => {
  /* 
Fully working example of graphql hooks + react-hook-form
The basics of the application are being applied on this page.

- Websocket subscription
- Graphql Mutations
  - Graphql hooks created with introspection code-gen
- React-Hook-Form best practices
- istyping hooks + message hooks

*/

  const {
    register,
    handleSubmit,
    resetField,
    getValues,
    watch,
    formState: { errors },
  } = useForm<InputInterface>();

  const { username } = watch();

  const [sendMessage] = useSendMessageMutation();
  const [setIsTyping] = useSetIsTypingMutation();
  const { data, loading } = useMessagesSubscription();
  const { data: typingData } = useIsTypingSubscription();

  const isTyping = async (isTyping: boolean) => {
    await setIsTyping({
      variables: {
        username,
        isTyping,
      },
    });
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <h1 className={styles.loading__header}>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Test Chat Room </h1>
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
        <BaseInput
          mr={10}
          placeholder="username"
          autoComplete="off"
          register={register("username", {
            required: "Username is required...",
          })}
          type="text"
        />

        <BaseInput
          placeholder="message"
          autoComplete="off"
          onFocus={async () => isTyping(true)}
          register={register("message", {
            required: "Message is required...",
            onBlur: async () => isTyping(false),
          })}
          type="text"
        />

        <p className={styles.error}>
          {errors.username?.message} {errors.message?.message}
        </p>

        <Button title="Submit" subtitle="Send Your Message" type="submit" />
      </form>
      {data?.MessageSubscription?.map((message) => {
        return (
          <div
            key={message?.message}
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
      {typingData?.IsTypingSubscription?.isTyping && (
        <div className={styles.isTypingMessage}>
          {typingData?.IsTypingSubscription?.username} is typing...
        </div>
      )}
    </div>
  );
};

export default Chatroom;
