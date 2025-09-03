import { useReducer } from "react";

const initialState = { name: "", email: "" };

function reducer(state: any, action: any) {
  return { ...state, [action.field]: action.value };
}

export default function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ width: "350px", margin: "30px auto" }}>
      <h2>User Information Form</h2>
      
      <div>
        <label>Tên:</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ field: "name", value: e.target.value })
          }
        />
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ field: "email", value: e.target.value })
          }
        />
      </div>

      <div style={{ marginTop: "15px", border: "1px solid #ccc", padding: "10px" }}>
        <h4>Thông tin người dùng:</h4>
        <p>Tên: {state.name || "(Chưa nhập)"}</p>
        <p>Email: {state.email || "(Chưa nhập)"}</p>
      </div>
    </div>
  );
}
