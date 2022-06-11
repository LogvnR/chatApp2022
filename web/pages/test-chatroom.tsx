import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useStore } from "../helpers/useStore";
import {
  useIsTypingSubscription,
  useMessagesSubscription,
  useSendMessageMutation,
  useSetIsTypingMutation,
} from "../src/generated/graphql";

interface InputInterface {
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

  const { username: globalUsername } = useStore();

  // const { username } = watch();

  const [sendMessage] = useSendMessageMutation();
  const [setIsTyping] = useSetIsTypingMutation();
  const { data, loading } = useMessagesSubscription();
  const { data: typingData } = useIsTypingSubscription();

  const isTyping = async (isTyping: boolean) => {
    await setIsTyping({
      variables: {
        username: globalUsername,
        isTyping,
      },
    });
  };

  if (loading) {
    return (
      <div className="">
        <h1 className="">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl px-4 mx-auto ">
      <h1 className="mt-5 text-3xl font-extrabold text-center">
        Test Chat Room{" "}
      </h1>
      <form
        className="flex flex-col items-center gap-2 mt-8 sm:items-start"
        onSubmit={handleSubmit(async ({ message }) => {
          await sendMessage({
            variables: {
              username: globalUsername,
              message,
            },
          });

          resetField("message");
        })}
      >
        <input
          className="w-4/6 px-2 py-1 mx-1 transition-all duration-200 border rounded-sm outline-none sm:w-60 focus-within:ring ring-amber-400"
          placeholder="message"
          autoComplete="off"
          onFocus={async () => isTyping(true)}
          {...register("message", {
            required: "Message is required...",
            onBlur: async () => isTyping(false),
          })}
          type="text"
        />
        {errors && <p className="text-red-500">{errors.message?.message}</p>}

        <button className="bg-[#e3a83a] text-white rounded mx-auto w-32 px-2 py-1 sm:mx-0  hover:bg-[#eebf68] outline-dashed">
          <p> Submit</p>
          <p className="text-sm">Send Message</p>
        </button>
      </form>
      <div className="flex flex-col gap-1 mt-5">
        {data?.MessageSubscription?.map((message) => {
          return (
            <div
              key={message?.message}
              className={
                message?.sender === globalUsername ? "place-self-end" : ""
              }
            >
              <div>
                <b>{message?.sender}:</b> {message?.message}
              </div>
            </div>
          );
        })}
        {typingData?.IsTypingSubscription?.isTyping && (
          <div className="text-sm text-black/40">
            {typingData?.IsTypingSubscription?.username} is typing...
          </div>
        )}
      </div>
    </div>
  );
};

export default TestChatRoom;
