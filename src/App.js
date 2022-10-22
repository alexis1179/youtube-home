//import logo from './logo.svg';
import './App.css';
import iconYt from './resources/youtube.png';
import iconSearch from './resources/icon-search.png';
import iconNotif from './resources/icon-notif.png';
import iconUser from './resources/icon-user.png';
import iconVideo from './resources/icon-video.png';
import { Themes } from './components/Themes';
import { Options } from './components/Options';
import { Videos } from './components/Videos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <div className="nav-p start">
            <div className="burger">
              <div className="burger-l1 line"></div>
              <div className="burger-l2 line"></div>
              <div className="burger-l3 line"></div>
            </div>
            <div className="logo">
              <a href="https://www.youtube.com">
                <img src={iconYt} alt="youtube logo" width="45px"/>
                <i className="text">YouTube</i>
              </a>
            </div>
          </div>
          <div className="nav-p center">
            <div className="searchBar">
              <input type="search" name="search" id="search" className="search input" 
                     placeholder='Search something...'/>
                <button type="submit">
                  <img src={iconSearch} alt="search" width="20px" />
                </button>
            </div>
          </div>
          <div className="nav-p end">
            <div className="nav-p-end-son createVideo">
              <a href="">
                <img src={iconVideo} alt="create video" width="30px" />
              </a>
            </div>
            <div className="nav-p-end-son notifications">
              <a href="">
                <img src={iconNotif} alt="notifications" width="30px" />
              </a>
            </div>
            <div className="nav-p-end-son user">
              <a href="">
                <img src={iconUser} alt="user" width="30px" />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="App-body">
      <div className="body-aside">
          <div className="aside-section sec1">
            <Options name="Home"></Options>
            <Options name="Explore"></Options>
            <Options name="Shorts"></Options>
            <Options name="Subs"></Options>
          </div>
          <div className="aside-section sec2">
            <Options name="Library"></Options>
            <Options name="History"></Options>
            <Options name="My videos"></Options>
            <Options name="Watch later"></Options>
            <Options name="Videos that I like"></Options>
          </div>
          <div className="aside-section sec3">
            <div className="section-title">Susbcriptions</div>
            <Options name="Lofi Girl"></Options>
            <Options name="Aimer"></Options>
            <Options name="FIA Oficial"></Options>
            <Options name="Minami"></Options>
          </div>
          <div className="aside-section sec4">
          <div className="section-title">Explore</div>
            <Options name="Videogames"></Options>
            <Options name="Live"></Options>
            <Options name="Fashion"></Options>
            <Options name="Learning"></Options>
          </div>
          <div className="aside-section sec5">
          <div className="section-title">About Youtube</div>
            <Options name="Youtube Premium"></Options>
            <Options name="Creator Studio"></Options>
            <Options name="Youtube Music"></Options>
            <Options name="Youtube Kids"></Options>
            <Options name="Youtube TV"></Options>
          </div>
          <div className="aside-section sec6">
          <Options name="Settings"></Options>
          <Options name="Complaint History"></Options>
          <Options name="Help"></Options>
          <Options name="Suggests"></Options>
          </div>
        </div>
        <div className="body-main">
          <div className="body-themesBar">
            <Themes name="Videogames"></Themes>
            <Themes name="J-pop"></Themes>
            <Themes name="K-pop"></Themes>
            <Themes name="Salsa"></Themes>
            <Themes name="Auron"></Themes>
            <Themes name="Movies"></Themes>
            <Themes name="Jujutsu Kaisen"></Themes>
            <Themes name="Anime"></Themes>
            <Themes name="Python"></Themes>
            <Themes name="C#"></Themes>
            <Themes name="Java"></Themes>
            <Themes name="Javascript"></Themes>
          </div>
          <div className="body-videos">
            <div className='videos-box'>
              <Videos 
                name="afterdark"
                title="After Dark - Aimer"
                author="Aimer Official Channel Youtube"
                views="2.5M"
                date="5 years ago"></Videos>
            </div>
            <div className='videos-box'>
              <Videos 
                name="domekano"
                title="Crying for rain"
                author="Minami Official Channel"
                views="2.5M"
                date="3 years ago"></Videos>
            </div>
            <div className='videos-box'>
              <Videos 
                name="linux"
                title="What's Linux?"
                author="LinuxScoop"
                views="2k"
                date="1 year ago"></Videos>
            </div>
            <div className='videos-box'>
              <Videos 
                name="classelite"
                title="Classroom of the Elite - OP"
                author="Crunchyroll"
                views="1.2M"
                date="3 years ago"></Videos>
            </div>
            <div className='videos-box'>
              <Videos 
                name="fate"
                title="Brave Shine"
                author="Aimer Official Channel Youtube"
                views="2.5M"
                date="5 years ago"></Videos>
            </div>
            <div className='videos-box'>
              <Videos 
                name="reactjs"
                title="ReactJs Full Course"
                author="Free Code Camp"
                views="2.5M"
                date="2 months ago"></Videos>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
