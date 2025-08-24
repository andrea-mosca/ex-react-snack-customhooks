import useSwitch from "./custom_hooks/useSwitch";
function App() {
  const { isOn, toggle } = useSwitch();
  return (
    <div className="container">
      <section>
        <h2>SNACK 1: useSwitch</h2>
        <p>Stato: {isOn ? "ON" : "OFF"}</p>
        <button className="btn btn-primary" onClick={toggle}>
          cambia stato
        </button>
      </section>
    </div>
  );
}

export default App;
