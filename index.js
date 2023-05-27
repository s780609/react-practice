import "./node_modules/react/umd/react.development.js";
import "./node_modules/react-dom/umd/react-dom.development.js";

const root = ReactDOM.createRoot(document.getElementById("app"));

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [double, setDouble] = React.useState(0);

  React.useEffect(() => {
    setDouble(count * 2);
  }, [count]);

  return (
    <>
      Counter: {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <div>double: {double}</div>
    </>
  );
};

const Editor = () => {
  return (
    <div>
      Editor:
      <input></input>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Counter></Counter>
      <Editor></Editor>
    </>
  );
};

//root.render(React.createElement(App));
root.render(<App></App>);
