import { useEffect } from "react";
import Route from "./routes/Index";

function App() {
  useEffect(() => {
    // login
    // sigup
    // axios.get("backend/api/auth/me") send jwt token along witht he request
    // setu up user in redux
  }, []);

  return (
    <>
      <Route />
    </>
  );
}

export default App;
