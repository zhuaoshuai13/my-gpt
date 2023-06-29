import { useState, useImperativeHandle } from "react";
import Image from "next/image";
import UseResponse from "@/hooks/useResponse";

import { HistoryChat } from "@/components";
import CloseSVG from "@/src/asset/close.svg";
import MenuSVG from "@/src/asset/menu.svg";
import Vx from "@/src/asset/vx.png";
import Zfb from "@/src/asset/zfb.png";

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
        <>
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
              <HistoryChat info="历史对话" />
              <HistoryChat info="正在开发中..." />
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
              <div
                className="mt-[10px] w-full cursor-pointer overflow-clip truncate text-ellipsis rounded-[3px] border border-solid border-gray-300  p-[8px] text-white transition hover:bg-[#444655]"
                onClick={() => (window as any).my_modal_1.showModal()}
              >
                打赏
              </div>
              <div className="mt-[12px] box-border h-[1px] bg-[#444655]"></div>
            </div>
          </div>
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="text-lg font-bold">感谢老板</h3>
              <p className="py-4">点击切换</p>
              <label className="swap swap-flip text-9xl">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                <div className="swap-on">
                  <Image src={Vx} alt="收款"></Image>
                </div>
                <div className="swap-off">
                  <Image src={Zfb} alt="收款"></Image>
                </div>
              </label>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </>
      ) : null}
    </>
  );
};
export default SildeBox;
