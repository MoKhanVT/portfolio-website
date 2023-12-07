import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Layout from "./layout/Layout";
import routes from "./config/routes";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndCondition/TermsAndCondition";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Layout><LandingPage /></Layout>} />
          <Route path={routes.termsAndCondition} element={<Layout><TermsAndConditions /></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
