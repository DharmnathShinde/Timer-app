import "./App.css";
import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Header />
      <main>
        <AddTimer />
        <Timer />
      </main>
    </>
  );
}
export default App;
