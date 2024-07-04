import { type ReactNode, createContext, useContext, useState } from "react";
type Timer = {
  name: string;
  duration: number;
};
type TimerState = {
  isRunnig: boolean;
  timer: number[];
};
type TimerContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

export const TimeContext = createContext<TimerContextValue | null>(null);
export function useTimersContext() {
  const timersCtx = useContext(TimeContext);

  if (timersCtx == null) {
    throw new Error("TimersContext is null - that should be the case!");
  }
  return timersCtx;
}

type TimeContextProviderProps = {
  children: ReactNode;
};
export default function TimerContextProvider({
  children,
}: TimeContextProviderProps) {
  const ctx: TimerContextValue = {
    timer: [],
    isRunnig: false,
    addTimer(timerData) {},
    stopTimer() {},
    startTimer() {},
  };
  return <TimeContext.Provider value={ctx}>{children}</TimeContext.Provider>;
}
