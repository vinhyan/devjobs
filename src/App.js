//components
import Nav from "./components/Nav";
import JobList from "./components/JobList";
import Detail from "./components/Detail";
//styles
import GlobalStyles from "./util/GlobalStyles";
//Router
import { Routes, Route } from "react-router-dom";
//util
import ScrollToTop from "./util/ScrollToTop";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/job/:id" element={<Detail />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
