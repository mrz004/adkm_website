import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <>
      {/* <ThemeConfig dark={false} /> */}
      <main className="App">
        <Header />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
