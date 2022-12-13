import React from "react";
import style from "./pageWaterLoader.module.css";

const PageWaterLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-ui-pink-50/60">
      <div className={style.water} />
    </div>
  );
};

export default PageWaterLoader;
