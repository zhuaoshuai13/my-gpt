import { useCallback, useState } from "react";

import { ChatApi } from "@/services";

const UseSendQuestion = (props: { getValue: Function }) => {
  const [msgList, setMsgList] = useState<
    Array<{
      role: string;
      content: string;
    }>
  >([]);

  const [info, setInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendQuestion = useCallback(async () => {
    setIsLoading(true);
    if (info === "") return;
    const newMsgArray = [...msgList, { role: "user", content: info }];
    props.getValue(newMsgArray);
    setMsgList(newMsgArray);
    setInfo("");
    const res = await ChatApi.chatApi(info);
    setIsLoading(false);
    if (res) {
      const backMsg = res.content;
      const newBackMsgArray = [
        ...newMsgArray,
        { role: "roboat", content: backMsg },
      ];

      props.getValue(newBackMsgArray);
      setMsgList(newBackMsgArray);
    } else {
    }
  }, [info, msgList, props]);

  const handleInput = (e: any) => {
    const msg = e.target.value;
    setInfo(msg);
  };

  return {
    info,
    isLoading,
    handleInput,
    handleSendQuestion,
  };
};
export default UseSendQuestion;
