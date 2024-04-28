import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import './app.css'

// images
import live_desktop from '../assets/slides/desktop/LIVE_desktop_2-scaled.jpg';
import live_mobile from '../assets/slides/mobile/LIVE_mobile_2.jpg';
import play_desktop from "../assets/slides/desktop/PLAY_desktop-scaled.jpg";
import play_mobile from "../assets/slides/mobile/PLAY_mobile.jpg"
import manager_desktop from "../assets/slides/desktop/MANAGER_desktop-scaled.jpg";
import manager_mobile from "../assets/slides/mobile/MANAGER_mobile.jpg";
import explore_desktop from '../assets/slides/desktop/EXPLORE_desktop-scaled_2.jpg';
import explore_mobile from '../assets/slides/mobile/EXPLORE_mobile_2.jpg';
import teams_desktop from '../assets/slides/desktop/TEAMS_desktop-scaled.jpg';
import teams_mobile from '../assets/slides/mobile/TEAMS_mobile-scaled.jpg';

export default function FullPageScroll() {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection className="section__slide">
          <img className='slide-image desktop' src={live_desktop} alt="live" />
          <img className='slide-image mobile' src={live_mobile} alt="live" />
          <button className='slide-button' type="button">WATCH</button>
        </FullpageSection>
        <FullpageSection className="section__slide">
          <img className='slide-image desktop' src={play_desktop} alt="live" />
          <img className='slide-image mobile' src={play_mobile} alt="live" />
          <button className='slide-button' type="button">PLAY</button>
        </FullpageSection>
        <FullpageSection className="section__slide">
          <img className='slide-image desktop' src={manager_desktop} alt="live" />
          <img className='slide-image mobile' src={manager_mobile} alt="live" />
          <button className='slide-button' type="button">PLAY</button>
        </FullpageSection>
        <FullpageSection className="section__slide">
          <img className='slide-image desktop' src={explore_desktop} alt="live" />
          <img className='slide-image mobile' src={explore_mobile} alt="live" />
          <button className='slide-button' type="button">ANALYSE</button>
        </FullpageSection>
        <FullpageSection className="section__slide">
          <img className='slide-image desktop' src={teams_desktop} alt="live" />
          <img className='slide-image mobile' src={teams_mobile} alt="live" />
          <button className='slide-button' type="button">CLUBS</button>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
}
