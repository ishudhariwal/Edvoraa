import {useContext, useEffect, useRef} from "react";
import EdvoraContext from "../context/edvora/EdvoraContext";

export const useOutsideAlerter = () => {
  const context = useContext(EdvoraContext);
  const {setfilteropen} = context;
  const ref = useRef < HTMLDivElement > null;
  const handleClickOutside = (event) => {
    console.log(ref);
    if (ref.current && !ref.current.contains(event.target)) setfilteropen(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return {ref};
};
