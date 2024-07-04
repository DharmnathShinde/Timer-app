import Button from "./UI/Button.tsx";
import { useTimersContext } from "./context/Timer-context.tsx";
export default function Header() {
  const timersCtx = useTimersContext();
  return (
    <header>
      <h1>Timer</h1>
      <Button>{timersCtx.isRunnig ? "Stop" : "Start"}Timers</Button>
    </header>
  );
}
