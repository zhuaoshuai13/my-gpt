import UseSendQuestion from "@/hooks/useSendQuestion";

import Send from "@/src/asset/send.svg";

const Input = (props: { getValue: Function }) => {
  const { info, isLoading, handleInput, handleSendQuestion } =
    UseSendQuestion(props);

  return (
    <div className="m-auto flex w-[90%] items-center pt-2">
      <textarea
        className="textarea textarea-md mr-3 w-full text-white"
        placeholder=""
        onInput={handleInput}
        value={info}
      ></textarea>
      <button
        className="btn-ghost btn text-white"
        onClick={handleSendQuestion}
        disabled={isLoading}
      >
        <Send />
        <span className="ml-1">发送</span>
      </button>
    </div>
  );
};

export default Input;
