import { NextPage } from "next";
import React from "react";
import {
  useMessagesSubscription,
  useSendMessageMutation,
} from "../src/generated/graphql";
import { useForm } from "react-hook-form";

interface InputInterface {
  username: string;
  message: string;
}

const TestChatRoom: NextPage = () => {
  /* 
Fully working graphql custom subscription hooks
*/

  const { register, handleSubmit, reset } = useForm<InputInterface>();

  const { data, loading } = useMessagesSubscription();
  const [sendMessage, {}] = useSendMessageMutation();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Test Chat Room</h1>

      <form
        onSubmit={handleSubmit(async ({ message }) => {
          await sendMessage({
            variables: {
              username: "John Doe",
              message,
            },
          });

          reset();
        })}
      >
        <input autoComplete="off" {...register("message")} type="text" />

        <input type="submit" />
      </form>

      {data?.MessageSubscription?.map((message) => {
        return (
          <div>
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
