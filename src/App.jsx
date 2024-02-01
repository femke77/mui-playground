import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar";
function App() {
  return (
    <>
      <div>
        <AppBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
