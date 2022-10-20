import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./components/NavBar";
import Image from "./components/Image";
import AboutMe from "./components/AboutMe";
import MessageForm from "./components/MessageForm";
import Footer from "./components/footer";




function App() {
  return (
      <div className='Windows'>
        <div className='side-bar'>< SideBar/></div>
          <div className='all-content'>
        <div className='image'><Image/></div>
        <div className='aboutMe'><AboutMe/></div>
        <div className='messageMe'><MessageForm/></div>
        <div className='footer'><Footer/></div>
          </div>
      </div>
  );
}

export default App;
