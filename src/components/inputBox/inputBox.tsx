import ky from "ky";

import Send from "@/src/asset/send.svg";
import { useState } from "react";

const Input = (props: any) => {
  const [msgList, setMsgList] = useState<[string]>(["first"]);

  const [info, setInfo] = useState("");

  const handleInput = (e: any) => {
    const msg = e.target.value;

    setInfo(msg);
  };

  const click = () => {
    const temp = msgList;
    temp.push(info);
    props.getValue(temp);
    setMsgList(temp);
    // ky.post("http://localhost:9527/chat", {
    //   json: {
    //     msg: info,
    //   },
    //   timeout: 100000,
    // });
  };

  return (
    <div className="m-aut0 w-full">
      <div className="m-auto flex w-[90%] items-center">
        <textarea
          className="textarea textarea-md w-full text-white"
          placeholder=""
          onInput={handleInput}
        ></textarea>
        <button className="btn-ghost btn" onClick={click}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Input;
