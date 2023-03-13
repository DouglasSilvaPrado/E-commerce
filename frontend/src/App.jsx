import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes/index.jsx";
import styles from "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
};
