import './App.css';
import {MainView, SubView} from "./MainView"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainView/>} />
          <Route path="/postview/:postID" element={<SubView/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;