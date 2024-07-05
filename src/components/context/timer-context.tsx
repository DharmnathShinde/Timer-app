import { type ReactNode, createContext, useContext, useReducer } from "react";
type Timer = {
  name: string;
  duration: number;
};
type TimerState = {
  isRunnig: boolean;
  timer: Timer[];
};

const initialState: TimerState = {
  isRunnig: true,
  timer: [],
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
type AddTimersAction = {
  type: "add_timer";
  payload: Timer;
};
type StopTimerAction = {
  type: "stop_timer";
};
type StartTimerAction = {
  type: "start_timer";
};
type Action = StartTimerAction | StopTimerAction | AddTimersAction;

function reducer(State: TimerState, action: Action): TimerState {
  if (action.type == "start_timer") {
    return { ...State, isRunnig: false };
  }
  if (action.type == "stop_timer") {
    return {
      ...State,
    };
  }
  if (action.type == "add_timer") {
    return {
      ...State,
      timer: [
        ...State.timer,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }
  return State;
}
export default function TimerContextProvider({
  children,
}: TimeContextProviderProps) {
  const [timersState, dispatch] = useReducer(reducer, initialState);
  const ctx: TimerContextValue = {
    timer: timersState.timer,
    isRunnig: timersState.isRunnig,
    addTimer(timerData) {
      dispatch({ type: "add_timer", payload: timerData });
    },
    stopTimer() {
      dispatch({ type: "stop_timer" });
    },
    startTimer() {
      dispatch({ type: "start_timer" });
    },
  };
  return <TimeContext.Provider value={ctx}>{children}</TimeContext.Provider>;
}
