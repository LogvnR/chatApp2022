import { useStore } from "../../../helpers/useStore";
import { useMessagesSubscription } from "../../../src/generated/graphql";

export const MessagesCell = () => {
  const { data, loading, error } = useMessagesSubscription();
  const { username } = useStore();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="mt-20 text-3xl font-light text-center text-red-600 font-roboto animate-pulse">
        Cannot Connect to Server...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 mt-5">
      {data?.MessageSubscription?.map((message, i) => {
        return (
          <div
            key={message?.message}
            className={message?.sender === username ? "place-self-end" : ""}
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

export default MessagesCell;
