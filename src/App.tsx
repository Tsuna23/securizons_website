import { Routes, Route } from "react-router-dom";
import Header from "./app/components/header";
import Footer from "./app/components/footer";
import Home from "./app/pages/home";
import About from "./app/pages/about";
import Solutions from "./app/pages/solutions";
import Interventions from "./app/pages/interventions";
import References from "./app/pages/references";
import Contact from "./app/pages/contact";
import AppelsOffres from "./app/pages/appels-offres";
import Blog from "./app/pages/blog";
import { LanguageProvider } from "./app/context/language";
import SolutionDetail from "./app/pages/solution_detail";

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/about"         element={<About />} />
        <Route path="/solutions"     element={<Solutions />} />
        <Route path="/interventions" element={<Interventions />} />
        <Route path="/references"    element={<References />} />
        <Route path="/contact"       element={<Contact />} />
        <Route path="/appels-offres" element={<AppelsOffres />} />
        <Route path="/blog"          element={<Blog />} />
        <Route path="/solutions/:slug" element={<SolutionDetail />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  );
}
