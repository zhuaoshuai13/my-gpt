import { HistoryChat } from "@/components";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="w-[260px] bg-black p-[5px]">
          <HistoryChat info="为什么人类要吃饭为什么人类要吃饭为什么人类要吃饭为什么人类要吃饭" />
          <HistoryChat info="啊啊啊" />
        </div>
        <div className="flex-1 bg-[#444655]"></div>
      </div>
    </>
  );
}
