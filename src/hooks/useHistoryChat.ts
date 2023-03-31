import { useState } from "react";
const UseHistoryChat = () => {
  const [isDel, setIsDel] = useState(false);

  const handleDelete = () => {
    setIsDel(true);
  };

  const handleCancleDelete = () => {
    setIsDel(false);
  };
  return { isDel, handleDelete, handleCancleDelete };
};

export default UseHistoryChat;
