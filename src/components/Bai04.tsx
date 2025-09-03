import { useState, useEffect } from "react";

export default function Bai04() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name) {
      document.title = `Xin chào, ${name}!`;
    } else {
      document.title = "Trang của tôi";
    }
  }, [name]); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Chào mừng bạn đến với trang của chúng tôi!</h2>
      <input
        type="text"
        placeholder="Nhập tên của bạn..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          marginTop: "10px",
          width: "250px",
        }}
      />
      <p style={{ marginTop: "10px" }}>
        {name ? `Tiêu đề trang đã thay đổi thành: Xin chào, ${name}!` : "Hãy nhập tên để thay đổi tiêu đề trang."}
      </p>
    </div>
  );
}
