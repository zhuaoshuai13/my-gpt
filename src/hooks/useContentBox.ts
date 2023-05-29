import { useState, useEffect, MutableRefObject } from "react";

const scrollToBottom = (scrollContainerRef: MutableRefObject<null>) => {
  if (scrollContainerRef.current) {
    const scrollContainer: { scrollTop: number; scrollHeight: number } =
      scrollContainerRef.current;
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }
};
const UseContentBox = (scrollContainerRef: MutableRefObject<null>) => {
  const [msgList, setMsgList] = useState<Array<string>>([]);

  const handleChildValue = (value: []) => {
    setMsgList([...value]);
  };

  useEffect(() => {
    scrollToBottom(scrollContainerRef);
  }, [msgList, scrollContainerRef]);

  return { msgList, handleChildValue };
};

export default UseContentBox;
