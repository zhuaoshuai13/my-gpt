import { useState } from "react";

import { getNowTime } from "@/utils/utils";

import MarkDown from "../markDown/markDown";
import { ChatApi } from "@/services";

import Roboat from "@/asset/roboat.svg";

const LeftChatBox = ({
  info,
  question,
  totalChat,
  fixedChildValue,
}: {
  info: string;
  target: number;
  question: string;
  totalChat: any;
  fixedChildValue: any;
}) => {
  const [realInfo, setRealInfo] = useState(info);

  return (
    <div className="chat chat-start animate-textFromLeft">
      <div className="chat-image avatar bg-[#32a37f] p-[4px]">
        <div className="w-10 rounded-full bg-[#32a37f] text-[#fff]">
          <Roboat />
        </div>
      </div>
      <div className="chat-header text-white opacity-80">Chat AI</div>
      <div className="chat-bubble text-white">
        <MarkDown info={realInfo} />
        <div className=" block">
          {realInfo == "接口请求超时" && (
            <button
              className="btn-primary btn-sm btn mt-5"
              onClick={async () => {
                setRealInfo("正在重新请求....");
                if (question === "") return;
                const res = await ChatApi.chatApi(question);
                if (res) {
                  const backMsg = res.content;
                  setRealInfo(backMsg);
                  fixedChildValue(totalChat);
                } else {
                  setRealInfo("接口请求超时");
                }
              }}
            >
              重新请求
            </button>
          )}
        </div>
      </div>
      <div className="chat-footer text-white opacity-80">
        Seen at {getNowTime()}
      </div>
    </div>
  );
};

export default LeftChatBox;
