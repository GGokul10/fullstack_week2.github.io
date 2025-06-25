import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";

function App() {
  const [likedVideos, setLikedVideos] = useState({});
  const [watchLater, setWatchLater] = useState({});

  useEffect(() => {
    const liked = JSON.parse(sessionStorage.getItem("likedVideos")) || {};
    const watch = JSON.parse(sessionStorage.getItem("watchLater")) || {};
    setLikedVideos(liked);
    setWatchLater(watch);
  }, []);

  return (
    <BrowserRouter>
      {/* Parent container with vertical flex layout */}
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar watchLaterCount={Object.values(watchLater).filter(Boolean).length} />

        {/* Content area that expands to fill space */}
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    likedVideos={likedVideos}
                    setLikedVideos={setLikedVideos}
                    watchLater={watchLater}
                    setWatchLater={setWatchLater}
                  />
                }
              />
              <Route
                path="/watch-later"
                element={
                  <WatchLater
                    watchLater={watchLater}
                    setWatchLater={setWatchLater}
                    likedVideos={likedVideos}
                    setLikedVideos={setLikedVideos}
                  />
                }
              />
            </Routes>
          </div>
        </div>

        {/* Always at the bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
