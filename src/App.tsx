import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNav from "./Components/SideNav/SideNav";
import TimeSheet from "./Pages/TimeSheet/TimeSheet";

function App() {
  return (
    <BrowserRouter>
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<SideNav />}>
          <Route path="timesheet" element={<TimeSheet />} />
          <Route path="dashboard" element={<p>Under Development</p>} />
          <Route path="accounts" element={<p>Under Development</p>} />
          <Route path="settings" element={<p>Under Development</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
