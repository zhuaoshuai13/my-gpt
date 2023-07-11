import ky from "ky";

import { BackMessageType } from "./type";

export const chatApi = async (info: string) => {
  const res: Promise<BackMessageType> = ky
    .post("https://chat.jetbrains.page/chat", {
      json: {
        role: "user",
        content: info,
      },
      timeout: 100000,
    })
    .json();

  try {
    const result = await res;
    if (result.message !== "success") return;

    return result.data;
  } catch (error) {
    console.log("接口报错啦！！！");
    return false;
  }
};
