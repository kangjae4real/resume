import { useEffect, useState } from "react";

interface Size {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  const onResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return size;
};

export default useWindowSize;
