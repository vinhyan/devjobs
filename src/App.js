//components
import Nav from "./components/Nav";
import JobList from "./components/JobList";
import Detail from "./components/Detail";
//styles
import GlobalStyles, { darkModeSet, lightModeSet } from "./util/GlobalStyles";
import { ThemeProvider } from "styled-components";
//Router
import { Routes, Route } from "react-router-dom";
//util
import ScrollToTop from "./util/ScrollToTop";
//redux
import { useSelector } from "react-redux";
import { darkModeSelect } from "./features/darkModeSlice";

function App() {
  const darkMode = useSelector(darkModeSelect);

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkModeSet : lightModeSet}>
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/job/:id" element={<Detail />} />
        </Routes>
        <ScrollToTop />
      </ThemeProvider>
    </div>
  );
}

export default App;
