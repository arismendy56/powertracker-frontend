// App.tsx
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example API endpoint — replace with your backend API URL
    fetch("http://app-alb-580610595.us-east-1.elb.amazonaws.com/api/v1/training-blocks")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>API Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
