import Roboat from "@/asset/roboat.svg";

const LeftChatBox = ({ info }: { info: string }) => {
  return (
    <div className="chat chat-start animate-textFromLeft">
      <div className="chat-image avatar bg-[#32a37f] p-[4px]">
        <div className="w-10 rounded-full bg-[#32a37f] text-[#fff]">
          <Roboat />
        </div>
      </div>
      <div className="chat-header">
        Roboat
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className="chat-bubble">{info}</div>
      <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
};

export default LeftChatBox;
