import { useState } from "react";

import ReactMarkDown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";

import Copy from "@/asset/copy.svg";
import CopyOver from "@/asset/copyOver.svg";

const MarkDown = (props: { info: string }) => {
  const [isCopy, setIsCopy] = useState(false);
  return (
    <ReactMarkDown
      children={props.info}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <>
              <div className="flex items-center py-1.5 px-4">
                <span className="pointer-events-none flex-1 select-none text-xs lowercase text-zinc-200">
                  {match[1]}
                </span>
                <div>
                  <button
                    type="button"
                    className="flex cursor-copy items-center gap-1 rounded bg-none p-1 text-xs font-medium text-zinc-300 hover:text-zinc-50"
                    onClick={() => {
                      setIsCopy(true);
                      navigator.clipboard.writeText(children as string);
                      setTimeout(() => {
                        setIsCopy(false);
                      }, 2000);
                    }}
                  >
                    <span className="h-[20px] w-[20px]">
                      {isCopy ? <CopyOver /> : <Copy />}
                    </span>
                    {isCopy ? "Copied!" : "Copy code"}
                  </button>
                </div>
              </div>
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                style={oneDark}
                language={match[1]}
                PreTag="div"
              />
            </>
          ) : (
            <code {...props} style={oneDark} className={"testaa"}>
              {" " + children + " "}
            </code>
          );
        },
      }}
    />
  );
};
export default MarkDown;
