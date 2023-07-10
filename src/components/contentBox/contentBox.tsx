import { useRef, useState, useEffect } from "react";

import { RightChatBox, LeftChatBox, InputBox } from "@/components";
import UseContentBox from "@/hooks/useContentBox";

// import LoadingSVG from "@/asset/loading.svg";

const ContentBox = (prop: any) => {
  const scrollContainerRef = useRef(null);
  const { msgList, handleChildValue } = UseContentBox(scrollContainerRef);
  const [showHero, setShowHero] = useState(true);
  const [hideHero, setHideHero] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isEnter") === "true") {
      setShowHero(false);
      prop.sideProp.current.setShowSidebar(true);
      prop.sideProp.current.setMenuBtn(true);
    }
  }, [prop.sideProp]);

  return (
    <div className="flex flex-1 flex-col bg-[#444655]">
      <div
        className={`text-center text-[30px] leading-[50px] text-white transition-all duration-[1s] ${
          showHero ? "h-[0]" : "h-[50px]"
        }`}
      >
        Chat
      </div>
      <div
        className="scrollbar content flex-1 overflow-scroll scroll-smooth bg-base-200"
        ref={scrollContainerRef}
      >
        {!hideHero && (
          <div
            className={`opacity-1 hero h-[100%] bg-base-200 transition-all delay-[.5s] duration-[1s] ${
              showHero ? "visible" : "invisible opacity-0"
            }`}
          >
            <div
              className={`hero-content text-center text-white transition-all duration-[1.5s] ${
                showHero ? "" : "blur-2xl"
              }`}
            >
              <div className="max-w-md">
                <h1 className={`text-5xl font-bold`}>👋 哈喽</h1>
                <p className={`py-6`}>
                  ChatGPT是一款强大的AI聊天机器人，它可以自动回复、解答问题并提供趣味互动。ChatGPT能够模拟真实对话，并且具有智能学习和适应性，使得它在与用户交互时更加自然流畅。本网站为您提供免费使用ChatGPT的服务，让您随时随地与这位超级聪明的机器人进行沟通交流！
                </p>
                <button
                  className={`transiton- btn-primary btn`}
                  onClick={() => {
                    setShowHero(!showHero);
                    localStorage.setItem("isEnter", "true");
                    prop.sideProp.current.setShowSidebar(true);
                    prop.sideProp.current.setMenuBtn(true);
                    setTimeout(() => setHideHero(true), 1500);
                  }}
                >
                  开始体验
                </button>
              </div>
            </div>
          </div>
        )}
        {!showHero && (
          <div className="relative m-auto h-full w-4/5">
            {msgList.map((item, index) =>
              item.role === "user" ? (
                <RightChatBox info={item.content} key={index} />
              ) : (
                <LeftChatBox info={item.content} key={index} />
              )
            )}
            {/* <button
              type="button"
              className="... bg-indigo-500 p-[10px]"
              disabled
            >
              <div>
                <LoadingSVG className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" />
              </div>
              <div className="text-white">稍等...</div>
            </button> */}
            {/* <LoadingSVG className="h-9 w-9 animate-spin text-white" /> */}
          </div>
        )}
      </div>
      <div
        className={`m-auto w-full  transition-all duration-[1s] ${
          showHero ? "h-[0]" : "h-[100px]"
        }`}
      >
        <InputBox getValue={handleChildValue} />
      </div>
    </div>
  );
};

export default ContentBox;
