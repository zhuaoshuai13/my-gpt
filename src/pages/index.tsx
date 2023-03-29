import { HistoryChat, RightChatBox,LeftChatBox } from "@/components";

import Send from '@/src/asset/send.svg'


export default function Home() {
  const input = (e) =>{
    console.log(e)
  }

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
          <div className="flex-1 overflow-scroll">
            {/* 没有内容 */}
            <div className="relative h-full w-4/5 m-auto">
              {/* <div className=" absolute left-0 right-0 top-0 bottom-0 m-auto h-fit w-fit text-[60px] text-white">
                广告位招租啊
              </div> */}
              <RightChatBox />
              <LeftChatBox />
              <RightChatBox />
              <RightChatBox />
              <LeftChatBox />
              <RightChatBox />
              <LeftChatBox />
              <RightChatBox />
              <LeftChatBox />
              <RightChatBox />
              <LeftChatBox />
              <RightChatBox />
              <LeftChatBox />
              <RightChatBox />
              <LeftChatBox />
              <RightChatBox />
              <LeftChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />
              <RightChatBox />

            </div>
          </div>
          <div className="m-aut0 w-full">
            <div className="m-auto flex w-[90%] items-center">
              <textarea className="textarea w-full textarea-md text-white" placeholder="" 
              onInput={input}
              ></textarea>
              <button className="btn btn-ghost"><Send /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
