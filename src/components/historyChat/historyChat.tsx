interface HistoryChatPropsType {
  info: string;
}

import ChatSvg from "@/src/asset/chat.svg";
import Edit from "@/src/asset/edit.svg";
import Del from "@/src/asset/del.svg";

const HistoryChat = (props: HistoryChatPropsType) => {
  const { info } = props;
  return (
    <div className="mt-[10px] w-full cursor-pointer overflow-clip truncate text-ellipsis rounded-[3px] border border-solid border-gray-300  p-[8px] text-white transition hover:bg-[#444655]">
      <div className="flex items-center">
        <div className="pr-[10px] text-white">
          <ChatSvg />
        </div>
        <div className="mr-[5px] flex-1 overflow-clip truncate text-ellipsis text-white">
          {info}
        </div>

        <div className="flex">
          <div className="pr-[10px] text-white">
            <Edit />
          </div>
          <div className="text-white">
            <Del />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryChat;
