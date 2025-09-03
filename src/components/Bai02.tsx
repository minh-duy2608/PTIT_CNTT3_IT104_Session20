import { useState } from "react";

export default function Bai02() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h3>Thông tin người dùng</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Gửi</button>
      </form>

      {submitted && (
        <div>
          <p>Tên: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}
