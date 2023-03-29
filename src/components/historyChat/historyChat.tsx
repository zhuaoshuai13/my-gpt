interface HistoryChatPropsType {
  info: string;
}

import ChatSvg from '@/src/asset/chat.svg'
import Edit from '@/src/asset/edit.svg'
import Del from '@/src/asset/del.svg'


const HistoryChat = (props: HistoryChatPropsType) => {
  const { info } = props;
  return (
    <div className="mt-[10px] w-full cursor-pointer overflow-clip truncate text-ellipsis rounded-[3px] border border-solid border-gray-300  p-[8px] text-white transition hover:bg-[#444655]">
      <div className="flex">
        <div className="text-white">
          <ChatSvg />
        </div>
        <div className="text-white flex-1">
          {info}
        </div>

        <div className="flex">
        <div className="text-white">
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
