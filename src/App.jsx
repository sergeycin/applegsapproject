import Jumpbutron from "./components/Jumpbutron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from './components/Loader'
import { useRef } from "react";

function App() {
  const webgiViewerRef = useRef()
  const contentRef = useRef()

  const handlePreview = () =>{
    console.log('handler')
    webgiViewerRef.current.triggerPreview()
  }

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
      <Nav/>
    <Jumpbutron/>
    <SoundSection/>
    <DisplaySection trriggerPreview={handlePreview}/>
      </div> 
    <WebgiViewer contentRef={contentRef} ref={webgiViewerRef}/>
    </div>
  );
}

export default App;
