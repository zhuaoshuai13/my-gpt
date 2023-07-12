import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { ChatApi } from "@/services";
import { exchange } from "@/store/modules/app/appSlice";

interface chatType {
  role: string;
  content: string;
  target: number;
}

const UseSendQuestion = (props: { getValue: Function }) => {
  const [msgGropuList, setMsgGropuList] = useState<Array<Array<chatType>>>([]);
  const dispatch = useDispatch();

  // const [msgList, setMsgList] = useState<
  //   Array<{
  //     role: string;
  //     content: string;
  //   }>
  // >([]);

  const [info, setInfo] = useState("");

  const handleSendQuestion = useCallback(async () => {
    // 如果内容为空 返回
    if (info === "") return;
    // loading状态修改
    dispatch(exchange());
    // 定义一个新的空数组存放本次chat
    const newChat = [];
    // 获取之前的chat
    const newMsgArray = [...msgGropuList];
    const index = newMsgArray.length;
    // 新对话的question
    newChat.push({ role: "user", content: info, target: index });

    // 总的对话列表增加本次chat
    newMsgArray.push(newChat);
    // 更新试图数据
    setMsgGropuList(newMsgArray);
    // 传递数据
    props.getValue(newMsgArray);
    // 置空input框
    setInfo("");
    // 发送请求
    const res = await ChatApi.chatApi(info);
    // loading状态修改
    dispatch(exchange());
    if (res) {
      // 获取返回answer
      const backMsg = res.content;
      // 新对话的answer
      newMsgArray[index].push({
        role: "roboat",
        content: backMsg,
        target: index,
      });
      // 更新试图数据
      setMsgGropuList(newMsgArray);
      // 传递数据
      props.getValue(newMsgArray);
    } else {
      const totalChat = newMsgArray.length - 1;
      newMsgArray[totalChat].push({
        role: "roboat",
        content: "接口请求超时",
        target: index,
      });
      // 更新试图数据
      setMsgGropuList(newMsgArray);
      // 传递数据
      props.getValue(newMsgArray);
    }
  }, [dispatch, info, msgGropuList, props]);

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
