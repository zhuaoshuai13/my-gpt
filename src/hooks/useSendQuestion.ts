import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { ChatApi } from "@/services";
import { exchange } from "@/store/modules/app/appSlice";

const UseSendQuestion = (props: { getValue: Function }) => {
  const dispatch = useDispatch();

  const [msgList, setMsgList] = useState<
    Array<{
      role: string;
      content: string;
    }>
  >([]);

  const [info, setInfo] = useState("");

  const handleSendQuestion = useCallback(async () => {
    dispatch(exchange());
    if (info === "") return;
    const newMsgArray = [...msgList, { role: "user", content: info }];
    props.getValue(newMsgArray);
    setMsgList(newMsgArray);
    setInfo("");
    const res = await ChatApi.chatApi(info);
    dispatch(exchange());
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
  }, [dispatch, info, msgList, props]);

  const handleInput = (e: any) => {
    const msg = e.target.value;
    setInfo(msg);
  };

  return {
    info,
    handleInput,
    handleSendQuestion,
  };
};
export default UseSendQuestion;
