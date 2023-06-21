import { getNowTime } from "@/utils/utils";

import UserSvg from "@/asset/user.svg";

const RightChatBox = ({ info }: { info: string }) => {
  return (
    <div className="chat chat-end animate-textFromRight">
      <div className="chat-image avatar bg-[#dd6a6a] p-[4px]">
        <div className="w-10 rounded-full bg-[#dd6a6a] text-white">
          <UserSvg className="h-full w-full" />
        </div>
      </div>
      <div className="chat-header text-white opacity-80">User</div>
      <div className="chat-bubble text-white">{info}</div>
      <div className="chat-footer text-white opacity-80">
        Seen at {getNowTime()}
      </div>
    </div>
  );
};

export default RightChatBox;
