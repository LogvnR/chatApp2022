import React from "react";
import { useIsTypingSubscription } from "../../../graphql/generated/graphql";

const IsTypingCell = () => {
  const { data: typingData } = useIsTypingSubscription();
  return (
    <>
      {typingData?.IsTypingSubscription?.isTyping && (
        <div className="text-sm text-black/40 animate-pulse">
          {typingData?.IsTypingSubscription?.username} is typing...
        </div>
      )}
    </>
  );
};

export default IsTypingCell;
