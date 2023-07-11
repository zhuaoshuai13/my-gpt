import UseSendQuestion from "@/hooks/useSendQuestion";
import { useSelector } from "react-redux";
import Send from "@/src/asset/send.svg";

const Input = (props: { getValue: Function }) => {
  const loading = useSelector(
    (state: { loadingReducer: { loading: boolean } }) =>
      state.loadingReducer.loading
  );
  const { info, handleInput, handleSendQuestion } = UseSendQuestion(props);

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
        disabled={loading}
      >
        <Send />
        <span className="ml-1">发送</span>
      </button>
    </div>
  );
};

export default Input;
