import React, { useState, useEffect } from "react";
import Layout from "../components/layout";

function useOnline() {
  const [isOnline, setOnline] = useState(window.navigator.onLine);
  function updateOnline() {
    setOnline(window.navigator.onLine);
  }
  useEffect(() => {
    window.addEventListener("offline", updateOnline);
    window.addEventListener("online", updateOnline);
    return () => {
      window.removeEventListener("offline", updateOnline);
      window.removeEventListener("online", updateOnline);
    };
  }, []);
  return isOnline;
}

const IndexPage = () => {
  const isOnline = useOnline();
  return (
    <Layout title="Home">
      <h1>{`You are ${isOnline ? "online" : "offline"}.`}</h1>
    </Layout>
  );
};

export default IndexPage;
