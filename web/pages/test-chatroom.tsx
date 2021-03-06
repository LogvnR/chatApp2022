import { NextPage } from "next";
import { useForm } from "react-hook-form";
import IsTypingCell from "../components/cells/IsTypingCell/IsTypingCell";
import MessagesCell from "../components/cells/MessagesCell/MessagesCell";
import { useIsTyping } from "../hooks/useIsTyping";
import { useSendMessage } from "../hooks/useSendMessage";

interface InputInterface {
  message: string;
}

const TestChatRoom: NextPage = () => {
  /**
   * Fully working example of graphql hooks + react-hook-form
   * The basics of the application are being applied on this page.
   * - Websocket subscription
   * - Graphql Mutations
   *  - Graphql hooks created with introspection code-gen
   * - React-Hook-Form best practices
   * - istyping hooks + message hooks
   */

  const { isTyping } = useIsTyping();
  const { sendMessage } = useSendMessage();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<InputInterface>();

  return (
    <div className="max-w-3xl px-4 mx-auto ">
      <h1 className="mt-5 text-3xl font-extrabold text-center font-roboto ">
        Test Chat Room
      </h1>
      <form
        className="flex flex-col items-center gap-2 mt-8 sm:items-start"
        onSubmit={handleSubmit(async ({ message }) => {
          await sendMessage(message);
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

      {/**
       *  Seperate Components for Fetching
       *  Following the structure of RedwoodJS ??? Making components
       * for fetching and keeping the state scoped to those
       * components seems like the best option here.
       */}

      <MessagesCell />
      <IsTypingCell />
    </div>
  );
};

export default TestChatRoom;
