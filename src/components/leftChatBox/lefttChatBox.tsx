import { getNowTime } from "@/utils/utils";

import Roboat from "@/asset/roboat.svg";

const LeftChatBox = ({ info }: { info: string }) => {
  return (
    <div className="chat chat-start animate-textFromLeft">
      <div className="chat-image avatar bg-[#32a37f] p-[4px]">
        <div className="w-10 rounded-full bg-[#32a37f] text-[#fff]">
          <Roboat />
        </div>
      </div>
      <div className="chat-header text-white opacity-80">Chat AI</div>
      <div className="chat-bubble text-white">{info}</div>
      <div
        className="chat-bubble text-white"
        dangerouslySetInnerHTML={{ __html: info.replace(/\n/g, "<br/>") }}
      />
      <div className="chat-footer text-white opacity-80">
        Seen at {getNowTime()}
      </div>
    </div>
  );
};

export default LeftChatBox;
