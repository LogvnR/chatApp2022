import { NextPage } from "next";
import React from "react";
import { useMessagesSubscription } from "../src/generated/graphql";

const TestChatRoom: NextPage = () => {
  /* 
Fully working graphql custom subscription hooks
*/
  const { data, loading } = useMessagesSubscription();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Test Chat Room</h1>
      {data?.MessageSubscription?.map((message) => {
        return (
          <div>
            <div>{message?.sender}</div>
            <div> {message?.message} </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestChatRoom;
