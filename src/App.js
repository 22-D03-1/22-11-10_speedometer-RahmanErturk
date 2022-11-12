import "./App.css";
import Car from "./components/Car";
import { useReducer } from "react";

const initState = {
  isSwitchedOn: false,
  speed: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "switchOn/Off":
      if (state.isSwitchedOn === false) {
        state = {
          ...state,
          speed: 0,
        };
      }
      return (state = {
        ...state,
        isSwitchedOn: !state.isSwitchedOn,
      });

    case "accelerate":
      return (state = {
        ...state,
        speed: state.speed + 10,
      });
    case "brake":
      if (state.speed >= 5) {
        return (state = {
          ...state,
          speed: state.speed - 5,
        });
      } else {
        return (state = {
          ...state,
          speed: 0,
        });
      }
    default:
      console.warn("unknown action");
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App">
      <Car state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
