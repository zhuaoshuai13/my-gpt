import { useRef } from "react";

import { SildeBox, ContentBox } from "@/components";

export default function Home() {
  const sideRef = useRef<any>(null);
  return (
    <>
      <div className="flex h-screen w-screen">
        <SildeBox cRef={sideRef} />
        <ContentBox sideProp={sideRef} />
      </div>
    </>
  );
}
