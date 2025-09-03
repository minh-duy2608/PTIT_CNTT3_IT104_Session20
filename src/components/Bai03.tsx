import { useEffect } from "react";

export default function Bai03() {
  useEffect(() => {
    console.log("Component Welcome đã được render lần đầu!");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Chào mừng bạn đến với ứng dụng của chúng tôi!</h2>
    </div>
  );
}
