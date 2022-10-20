import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
import myIcon from './svgFiles/myIcon.svg'
import './NavBar.css'
import myImage from './svgFiles/me.jpeg'



function SideBar() {
  return (

      <div className='nav-bar'>
          <div className='image-div' >
              <img className='nav-image' src={myImage}/>
          </div>
          <div className='nav-me'>
              <p>Emrah</p>
              <p>Emrem</p>
          </div>

          <ul>
              <li> <Link className='active' to='/'>HOME</Link></li>
              <li> <Link to='/ArchProjects'>ARCH PROJECTS</Link></li>
              <li> <Link to='/CodingProjects'>CODING PROJECTS</Link></li>
          </ul>


      </div>

  );
}

export default SideBar;