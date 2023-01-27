import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/global/Dashboard";
import Team from "./scenes/global/Team";
import Contacts from "./scenes/global/Contacts";
import Invoices from "./scenes/global/Invoices";
import Form from "./scenes/global/Form";
import Bar from "./scenes/global/Bar";
import Pie from "./scenes/global/Pie";
import Line from "./scenes/global/Line";
import Faq from "./scenes/global/Faq";
import Geography from "./scenes/global/Geography";
import Calendar from "./scenes/global/Calendar";
import MySidebar from "./scenes/global/MySidebar";

import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <ProSidebarProvider>
              <MySidebar />
            </ProSidebarProvider>
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
