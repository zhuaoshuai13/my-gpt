import { useRef } from "react";

import { RightChatBox, LeftChatBox, InputBox } from "@/components";
import UseContentBox from "@/hooks/useContentBox";

const ContentBox = () => {
  const scrollContainerRef = useRef(null);
  const { msgList, handleChildValue } = UseContentBox(scrollContainerRef);

  return (
    <div className="flex flex-1 flex-col bg-[#444655] py-[20px]">
      <div className="h-[50px] text-center text-[30px] leading-[50px] text-white">
        Chat
      </div>
      <div
        className="flex-1 overflow-scroll scroll-smooth"
        ref={scrollContainerRef}
      >
        <div className="relative m-auto h-full w-4/5">
          {msgList.map((item, index) =>
            index % 2 === 0 ? (
              <RightChatBox info={item} key={index} />
            ) : (
              <LeftChatBox info={item} key={index} />
            )
          )}
        </div>
      </div>
      <InputBox getValue={handleChildValue} />
    </div>
  );
};

export default ContentBox;
