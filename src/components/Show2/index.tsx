import { useStore2 } from "../../store";

function Show2() {
  const { count2, increase, decrease } = useStore2();

  return (
    <>
      <h1>{count2}</h1>
      <button onClick={() => increase(2)}>increase</button>
      <button onClick={() => decrease(2)}>decrease</button>
    </>
  );
}

export default Show2;
