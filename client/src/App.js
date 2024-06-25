import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery/gallery";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Videos from "./pages/Videos/videos";
import Matches from "./pages/Matches/match";
import Schedule from "./pages/Schedule/schedule";
import CricketLoader from "./pages/Others/spinner";
import TeamForm from "./pages/Teams/teamform";
import Teams from "./pages/Teams/teamshow";
import Admin from "./pages/Admin/Admin";
import AdminVideos from "./pages/Videos/adminvideos";
import AdminGallery from "./pages/Gallery/admingallery";
import { Toaster } from "react-hot-toast";
import Access from "./pages/Access/access";
import List from "./pages/List/List";
import ContactUs from "./pages/Contact/contact";
import Terms from "./pages/TermsandConditions/Terms";
import AdminPlayers from "./pages/AdminPlayers/Players";
import AdminList from "./pages/AdminPlayers/Adminlist";
import Update from "./pages/AdminPlayers/update";
import Design from "./pages/Newdesign/design";
import Pointstable from "./pages/Pointstable/points";

// import Footer from "./pages/Footer/footer";
// import Navbar from "./pages/Navbar/navbar";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <CricketLoader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="videos" element={<Videos />} />
          <Route path="matches" element={<Matches />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="teamform" element={<TeamForm />} />
          <Route path="teams" element={<Teams />} />
          <Route path="list" element={<List />} />
          <Route path="form" element={<ContactUs />} />
          <Route path="adminjobways" element={<Admin />} />
          <Route path="adminvideos" element={<AdminVideos />} />
          <Route path="admingallery" element={<AdminGallery />} />
          <Route path="access" element={<Access />} />
          <Route path="termsandconditions" element={<Terms />} />
          <Route path="adminplayers" element={<AdminList />} />
          <Route path="update" element={<Update />} />
          <Route path="design" element={<Design />} />
          <Route path="pointstable" element={<Pointstable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
