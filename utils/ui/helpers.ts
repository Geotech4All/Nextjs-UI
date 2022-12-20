import React from "react";

export const isInViewPort = (element: React.RefObject<HTMLElement> | string): boolean => {
  if (typeof element !== "string") {
    const rect = element.current?.getBoundingClientRect();
    return rect !== undefined && rect !== null && rect.bottom <= 0;
  } else {
    const rect = document.getElementById(element)?.getBoundingClientRect();
    return rect !== undefined && rect !== null && rect.bottom <= 0;
  }
};
