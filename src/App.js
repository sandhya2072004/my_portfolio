import "./App.css";
import Home from "./screens/Home";
import CustomThemeProvider from "./ThemeContext";

function App() {
  return (
    <CustomThemeProvider>
      <Home />
    </CustomThemeProvider>
  );
}

export default App;
