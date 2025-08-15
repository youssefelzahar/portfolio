import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); // بعد تسجيل الدخول خزنه هنا
    fetch("http://localhost:8000/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Unauthorized"));
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>{message}</p>
    </div>
  );
};

export default Dashboard;
