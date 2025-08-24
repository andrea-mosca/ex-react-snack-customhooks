import useDate from "./custom_hooks/useDate";
import useSwitch from "./custom_hooks/useSwitch";

export default function App() {
  const { isOn, toggle } = useSwitch();
  const currentDate = useDate();

  return (
    <div className="container">
      <section>
        <h2>SNACK 1: useSwitch</h2>
        <p>Stato: {isOn ? "ON" : "OFF"}</p>
        <button className="btn btn-primary" onClick={toggle}>
          cambia stato
        </button>
      </section>
      <section>
        <h2>SNACK 2: useDate</h2>
        <p>Data e ora attuali: {currentDate.toLocaleString()}</p>
      </section>
    </div>
  );
}
