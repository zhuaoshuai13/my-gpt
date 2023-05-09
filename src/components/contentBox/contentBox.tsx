import { RightChatBox, LeftChatBox, InputBox } from "@/components";
import { useState } from "react";

const ContentBox = () => {
  const [msgList, setMsgList] = useState<Array<string>>([]);

  const handleChildValue = (value: []) => {
    setMsgList([...value]);
  };
  return (
    <div className="flex flex-1 flex-col bg-[#444655] py-[20px]">
      <div className="h-[50px] text-center text-[30px] leading-[50px] text-white">
        Chat
      </div>
      <div className="flex-1 overflow-scroll">
        <div className="relative m-auto h-full w-4/5">
          <LeftChatBox />
          {msgList.map((item) => (
            <RightChatBox info={item} key={item} />
          ))}
        </div>
      </div>
      <InputBox getValue={handleChildValue} />
    </div>
  );
};

export default ContentBox;
