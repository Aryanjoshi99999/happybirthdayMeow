import { useState } from "react";
import "./App.css";
import Mainbirthdaywish from "./Components/Mainbirthdaywish/Mainbirthdaywish";
import PhotoGallery from "./Components/Photogallery/Photogallery";
import MessageSection from "./Components/Messagesection/Messagesection";

function App() {
  return (
    <div>
      <Mainbirthdaywish />
      <PhotoGallery />
      <MessageSection />
    </div>
  );
}

export default App;
