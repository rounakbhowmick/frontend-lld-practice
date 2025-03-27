import { useEffect, useRef, useState } from "react";
import Grid from "../../common/Grid";
import { OTPWrapper } from "./styles";

const Otp = () => {
  const OTP_DIGITS = 5;
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));
  const refArr: any = useRef([]);
  const handleInput = (value: string, index: number) => {
    const newInputArr = [...inputArr];
    value = value.trim();
    if (isNaN(Number(value))) return;
    if (value) {
      newInputArr[index] = value; //slice not required. If we want last input remove max length
      setInputArr(newInputArr);
      refArr.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Backspace") {
      //   refArr.current[index - 1]?.focus();
      const newInputArr = [...inputArr];
      newInputArr[index] = "";
      setInputArr(newInputArr);
      if (index > 0) {
        refArr.current[index - 1]?.focus();
      }
    }
  };
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  return (
    <OTPWrapper direction="column">
      <h1>Validate input</h1>
      <Grid>
        {inputArr.map((input, index) => (
          <input
            key={index}
            className="otp-input"
            value={inputArr[index]}
            type="text"
            maxLength={1}
            ref={(refVal: any) => (refArr.current[index] = refVal)}
            onChange={(e) => handleInput(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </Grid>
    </OTPWrapper>
  );
};

export default Otp;
