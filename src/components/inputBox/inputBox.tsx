import ky from "ky";

import Send from "@/src/asset/send.svg";
import { useState } from "react";

const Input = (props: { getValue: Function }) => {
  const [msgList, setMsgList] = useState<Array<string>>([]);

  const [info, setInfo] = useState("");

  const handleInput = (e: any) => {
    const msg = e.target.value;
    setInfo(msg);
  };

  const click = () => {
    if (info === "") return;
    const newMsgArray = [...msgList, info];
    props.getValue(newMsgArray);
    setMsgList(newMsgArray);
    setInfo("");

    const res = ky
      .post("http://112.74.109.58:8080/chat", {
        json: {
          msg: JSON.stringify(info),
        },
        timeout: 100000,
      })
      .json();
    res.then((data) => {
      const newBackMsgArray = [...newMsgArray, data as string];
      const sleep = (time: number): Promise<unknown> => {
        return new Promise((resolve) => setTimeout(resolve, time));
      };
      sleep(500).then(() => {
        props.getValue(newBackMsgArray);
        setMsgList(newBackMsgArray);
      });
    });
  };

  return (
    <div className="m-aut0 w-full">
      <div className="m-auto flex w-[90%] items-center pt-2">
        <textarea
          className="textarea textarea-md mr-3 w-full text-white"
          placeholder=""
          onInput={handleInput}
          value={info}
        ></textarea>
        <button className="btn-ghost btn text-white" onClick={click}>
          <Send />
          <span className="ml-1">发送</span>
        </button>
      </div>
    </div>
  );
};

export default Input;
