import { useState, useRef, useEffect } from "react";

export default function Bai06() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Ứng dụng React với Modal và Focus Input</h2>
      <button onClick={() => setIsOpen(true)}>Mở Modal</button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ background: "white", padding: "20px", borderRadius: "5px" }}>
            <h3 style={{color:"black"}}>Đăng nhập</h3>
            <input ref={inputRef} type="text" placeholder="Nhập tên người dùng" />
            <br />
            <button onClick={() => setIsOpen(false)} style={{ marginTop: "10px",backgroundColor:"red" }}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
