import UseHistoryChat from "@/hooks/useHistoryChat";

import ChatSvg from "@/src/asset/chat.svg";
import Edit from "@/src/asset/edit.svg";
import Del from "@/src/asset/del.svg";
import Wrong from "@/src/asset/wrong.svg";
import Right from "@/src/asset/right.svg";

interface HistoryChatPropsType {
  info: string;
}

const HistoryChat = (props: HistoryChatPropsType) => {
  const { info } = props;
  const { isDel, handleDelete, handleCancleDelete } = UseHistoryChat();

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
            {!isDel ? <Edit /> : <Right />}
          </div>
          <div className="text-white">
            {!isDel ? (
              <Del onClick={handleDelete} />
            ) : (
              <Wrong onClick={handleCancleDelete} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryChat;
