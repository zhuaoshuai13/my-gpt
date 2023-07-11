import { useRef } from "react";
import store from "@/store/modules/app/store";
import { Provider } from "react-redux";

import { SildeBox, ContentBox } from "@/components";

export default function Home() {
  const sideRef = useRef<any>(null);
  return (
    <Provider store={store}>
      <div className="flex h-screen w-screen">
        <SildeBox cRef={sideRef} />
        <ContentBox sideProp={sideRef} />
      </div>
    </Provider>
  );
}
