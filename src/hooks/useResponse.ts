import { useCallback, useEffect, useState } from "react";

// type MediaScreenKeysType = keyof typeof globalConfig.mediaScreens

const mediaScreens = {
  md: 768,
};

type MediaScreenKeysType = keyof typeof mediaScreens;

type MediaScreensInfoType = Record<MediaScreenKeysType, boolean>;

const UseResponse = () => {
  const [responsive, setResponsive] = useState<MediaScreensInfoType>();

  const handleResize = useCallback(() => {
    const width = window.innerWidth;

    const newInfo = {} as MediaScreensInfoType;
    for (const key of Object.keys(mediaScreens)) {
      newInfo[key as MediaScreenKeysType] =
        width >= mediaScreens[key as MediaScreenKeysType];
    }
    console.log(newInfo);

    setResponsive(newInfo);
  }, []);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, false);
  }, [handleResize]);
  return { handleResize };
};

export default UseResponse;
