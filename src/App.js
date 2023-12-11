import logo from "./logo.svg";
import "./App.css";
// import { Button } from '@mui/material';
import Btn from "./Components/Button";
import Main from "./Components/Main";
import { Stack, dividerClasses } from "@mui/material";
import MainData from "./Components/MainData";

function App() {
  return (
    <Stack>
      <Main />
      <MainData />
    </Stack>
  );
}

export default App;
