interface HistoryChatPropsType {
  info: string;
}

const HistoryChat = (props: HistoryChatPropsType) => {
  const { info } = props;
  return (
    <div className=" mt-[10px] w-full cursor-pointer overflow-clip truncate text-ellipsis rounded-[3px] border border-solid border-gray-300  p-[8px] text-white transition hover:bg-[#444655]">
      {info}
    </div>
  );
};

export default HistoryChat;
