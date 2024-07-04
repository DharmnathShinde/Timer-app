import "./App.css";
import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timer from "./components/Timer";
import TimerContextProvider from "./components/context/Timer-context";

function App() {
  return (
    <TimerContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timer />
      </main>
    </TimerContextProvider>
  );
}
export default App;
