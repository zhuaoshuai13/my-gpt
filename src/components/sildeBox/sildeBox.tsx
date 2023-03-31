import UseResponse from "@/hooks/useResponse";

import { HistoryChat } from "@/components";

const SildeBox = () => {
  const { responsive } = UseResponse();

  return (
    <>
      {responsive?.md ? (
        <div className="w-[260px] bg-black p-[5px]">
          <HistoryChat info="test" />
          <HistoryChat info="啊啊啊" />
        </div>
      ) : null}
    </>
  );
};
export default SildeBox;
