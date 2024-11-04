import React from "react";
import { LANG } from "./utils";
export type LangType = "en" | "hi" | "sp" | "ru";
const About: React.FC<{ lang: LangType }> = ({ lang }) => {
  const data = LANG[lang];
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl my-5">{data.title}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className="font-bold text-2xl my-5">{data.title2}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className="font-bold text-2xl my-5">{data.title3}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className="font-bold text-2xl my-5">{data.title4}</h1>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default About;
