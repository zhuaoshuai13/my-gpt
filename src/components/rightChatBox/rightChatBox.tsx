import UserSvg from "@/asset/user.svg";

const RightChatBox = ({ info }: { info: string }) => {
  return (
    <div className="chat chat-end animate-textFromRight">
      <div className="chat-image avatar bg-[#dd6a6a] p-[4px]">
        <div className="w-10 rounded-full bg-[#dd6a6a] text-white">
          <UserSvg className="h-full w-full" />
        </div>
      </div>
      <div className="chat-header">
        Anakin
        <time className="text-xs opacity-50">12:46</time>
      </div>
      <div className="chat-bubble">{info}</div>
      <div className="chat-footer opacity-50">Seen at 12:45</div>
    </div>
  );
};

export default RightChatBox;
