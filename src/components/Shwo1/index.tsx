import useStore from "../../store";

function Show1() {
  const { count, increase, decrease } = useStore();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  );
}

export default Show1;
