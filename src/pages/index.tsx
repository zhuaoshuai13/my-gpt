import { HistoryChat } from "@/components";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="w-[260px] bg-black p-[5px]">
          <HistoryChat info="test" />
          <HistoryChat info="啊啊啊" />
        </div>
        <div className="flex flex-1 flex-col bg-[#444655] py-[20px]">
          <div className="h-[50px] text-center text-[30px] leading-[50px] text-white">
            ChatGpt
          </div>
          <div className="flex-1">
            {/* 没有内容 */}
            <div className="relative h-full w-full">
              <div className=" absolute left-0 right-0 top-0 bottom-0 m-auto h-fit w-fit text-[60px] text-white">
                广告位招租
              </div>
            </div>
          </div>
          <div className="m-aut0 w-full">
            <div className="m-auto flex w-4/5">
              <input
                type="textarea"
                className="block flex-1 rounded-[5px] border-none bg-black text-white outline-none"
                placeholder="请输入内容"
              />
              <div className="text-white">发送</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
