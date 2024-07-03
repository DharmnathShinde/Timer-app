import { createContext } from "react";
type Timer = {
  name: string;
  duration: number;
};
type TimerState = {
  isRunnig: boolean;
  timer: number;
};

type TimerContext = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const TimeContext = createContext<TimerContext | null>(null);
