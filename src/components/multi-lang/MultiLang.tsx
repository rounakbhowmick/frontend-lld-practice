import React, { useState } from "react";
import About, { type LangType } from "./About";

const MultiLang = () => {
  const [lang, setLang] = useState<LangType>("en");

  return (
    <div>
      <h2> Multi Lang</h2>

      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as LangType)}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="sp">Spanish</option>
        <option value="ru">Russian</option>
      </select>
      <About lang={lang} />
    </div>
  );
};

export default MultiLang;
