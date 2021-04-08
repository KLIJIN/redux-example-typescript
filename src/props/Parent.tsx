import { Child } from "./Child";

const Parent = () => {
  const clickFunc = () => console.log("AAAA Что ты сделал то? ");

  return (
    <Child color="red" clickFunc={clickFunc}>
      <br /> Чилдрен <br />
    </Child>
  );
};

export default Parent;
