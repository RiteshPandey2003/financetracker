import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, UserButton } from "@clerk/clerk-react";
// import { dark } from "@clerk/themes";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
        <SignedIn>
            <UserButton />
          </SignedIn>
          <Link to="/"> Dashboard</Link>
         
         <Link to="/auth" className="login"> Login </Link>
          
         
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <FinancialRecordsProvider>
                <Dashboard />
              </FinancialRecordsProvider>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
