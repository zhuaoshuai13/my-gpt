import { useState, useImperativeHandle } from "react";

import UseResponse from "@/hooks/useResponse";

import { HistoryChat } from "@/components";
import CloseSVG from "@/src/asset/close.svg";
import MenuSVG from "@/src/asset/menu.svg";

const SildeBox = (prop: any) => {
  const { responsive } = UseResponse();
  const [showSidebar, setShowSidebar] = useState(false);
  const [menuBtn, setMenuBtn] = useState(false);
  const sideBarStyle = showSidebar ? "w-[230px] p-[12px]" : "w-[0] p-[0]";

  useImperativeHandle(prop.cRef, () => ({
    setShowSidebar: setShowSidebar,
    setMenuBtn: setMenuBtn,
  }));

  return (
    <>
      {responsive?.md ? (
        <div
          className={`relative flex flex-col justify-between bg-black transition-all ${sideBarStyle}`}
        >
          <div className="relative flex justify-center gap-2 text-white">
            <div
              className={`whitespace-nowrap ${
                showSidebar ? "visible" : "invisible"
              }`}
            >
              我的问题
            </div>
            {menuBtn && (
              <div
                className={`absolute h-[100%] ${
                  showSidebar ? "right-0" : "right-[-30px] top-[12px]"
                }`}
              >
                <label className="swap-rotate swap ">
                  <input
                    type="checkbox"
                    onClick={() => {
                      setShowSidebar(!showSidebar);
                    }}
                  />
                  <CloseSVG className="swap-off fill-current delay-[140ms]" />
                  <MenuSVG className="swap-on fill-current delay-[140ms]" />
                </label>
              </div>
            )}
          </div>

          <div className="scrollbar my-[14px] box-border w-[100%] flex-1 overflow-y-scroll">
            <HistoryChat info="test" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <HistoryChat info="啊啊啊啊啊啊啊啊啊啊" />
            <div className="pointer-events-none sticky bottom-0 flex h-40 bg-[#000] [mask-image:linear-gradient(transparent,#000000)]"></div>
          </div>

          <div className="top w-[100%] overflow-hidden">
            <div className="box-border h-[1px] bg-[#444655]"></div>
            <div className="mt-[24px] w-full cursor-pointer overflow-clip truncate text-ellipsis rounded-[3px] border border-solid border-gray-300  p-[8px] text-white transition hover:bg-[#444655]">
              关于我们
            </div>
            <div className="mt-[10px] w-full cursor-pointer overflow-clip truncate text-ellipsis rounded-[3px] border border-solid border-gray-300  p-[8px] text-white transition hover:bg-[#444655]">
              联系我们
            </div>
            <div className="mt-[12px] box-border h-[1px] bg-[#444655]"></div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default SildeBox;
