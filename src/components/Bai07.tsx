import { useReducer } from "react";

type State = { count: number };
type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Bai07() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <p>Số đếm: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "decrement" })} style={{ marginLeft: "10px" }}>
        Giảm
      </button>
    </div>
  );
}
