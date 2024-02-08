import { Route, Routes } from "react-router-dom";
import { AboutUsPage, BlogsPage, HomePage, NotFoundPage } from "./pages";
import Navbar from "./components/Navbar.component";
import Footer from "./components/Footer.component";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
