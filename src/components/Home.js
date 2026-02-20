import React from 'react'
import Banner from './Banner'
// import Taj1Banner from "../components/Taj1Banner";
// import FeaturedTour from './FeaturedProperties';
// import OverNight from './OverNight';
import Hill from './Hill';
import PlanStat from './PlanStat';
// import TajVideo from './TajVideo';
import TourTypes from './TourTypes';
// import TripAdvisorWidget from './TripAdvisorWidget';
import CenterMain from './CenterMain';
import Aminities from './Aminities';
import HomeAbout from './HomeAbout';
import AllProjects from './AllProjects';
import HomeVideo from './HomeVideo';
// import FeaturedProperties from './FeaturedProperties';
// import UpComingProjects from './UpComingProject';
// import ColonySection from './ColonySection';
// import CompletedProjects from './CompletedProjects';
// import FeaturedProperties from './Properties';


// import Carousel from './Carousel';






const Home = () => {
  return (
    <div>
      
        <Banner/> <br />
       <CenterMain/><hr /><br /><br />
       <Aminities/>
       <AllProjects/>
       <HomeAbout/>
       <HomeVideo/>
       {/* <FeaturedProperties/>
       <UpComingProjects/> */}
       {/* <ColonySection/> */}
        <PlanStat/><br />
        <Hill/>
        
       
        <TourTypes/><br /><br />
       <br /><br />
      
     
         <br /><br />
       
      
    </div>
  )
}

export default Home
