import React from 'react'
import ContacctForm from './ContacctForm';
import Train1 from "./img/Train1.jpg";
import Train2 from "./img/Train2.jpg";
import Train3 from "./img/Train3.jpg";
const ShimlaManaliTour = () => {
  return (
    <div className="tour-details-container"><br />
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          
           <div className="carousel-inner">
             <div className="carousel-item active">
               <img src={Train1} className="d-block w-100 carousel-image" alt="..." />
               <div className="overlayy"></div>
               <div className="carousel-caption d-md-block centered-caption"><br /><br /><br />
                
               </div>
             </div>
             <div className="carousel-item">
               <img src={Train2} className="d-block w-100 carousel-image" alt="..." />
               <div className="overlayy"></div>
               <div className="carousel-caption d-md-block centered-caption"><br /><br /><br />
                
               </div>
             </div>
             <div className="carousel-item">
               <img src={Train3} className="d-block w-100 carousel-image" alt="..." />
               <div className="overlayy"></div>
               <div className="carousel-caption d-md-block centered-caption"><br /><br /><br />
                
               </div>
             </div>
           </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
           </button>
         </div>
         <div className="tour-details">
           <h2 className="tour-title">Unforgettable Shimla Manali Tour from Delhi</h2>
           <h5 className='text-start ms-2'>$ / Per Person</h5><br />
           <div className="tour-info-container">
             <div className="tour-info">
               <div className="info-item">
                 <span className="icon">
                   <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="none" viewBox="0 0 24 24">
                     <path style={{ stroke: '#7CA24A' }} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                   </svg>
                 </span>
                 <span className="label">Duration<br />4 Day</span>
               </div>
               <div className="info-item">
                 <span className="icon">
                   <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="none" viewBox="0 0 24 24">
                     <path style={{ stroke: '#7CA24A' }} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                   </svg>
                 </span>
                 <span className="label">Min Age <br />12 +</span>
               </div>
               <div className="info-item">
                 <span className="icon">
                   <svg
                     className="w-6 h-6"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     width="35"
                     height="30"
                     fill="none"
                     viewBox="0 0 25 32"
                     style={{ fill: 'none', stroke: '#7CA24A', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}
                   >
                     <path d="M17.542,8.382L2.958,4.902l-1.25,1.26c-0.18,0.17-0.14,0.45,0.07,0.58l11.083,6.465"/>
                     <path d="M17.884,17.581l7.374,12.642c0.13,0.209,0.41,0.25,0.58,0.07l1.26-1.25l-3.903-16.359"/>
                     <path d="M9.134,19.857l-6.336-0.715l-1.19,1.189c-0.18,0.18-0.13,0.48,0.09,0.6l3.787,1.975"/>
                     <path d="M8.109,24.625l2.958,5.677c0.12,0.221,0.42,0.271,0.6,0.091l1.19-1.19l-0.715-6.333"/>
                     <path d="M7.328,24.673l0.4-0.011c0.12-0.01,2.81-0.14,4.88-2.22c0.63-0.58,14.51-13.32,15.99-14.811c2.2-2.2,2.15-5.149,1.54-5.77c-0.61-0.61-3.58-0.66-5.77,1.54c-1.5,1.5-14.23,15.359-14.82,16c-0.644,0.649-1.104,1.354-1.43,2.024"/>
                     <line x1="10.5" x2="4" y1="21.5" y2="28"/>
                     <path d="M27.498,3.502c0.552,0,1,0.448,1,1"/>
                   </svg>
                 </span>
                 <span className="label text-start">Tour Type<br />Fun </span>
               </div>
               <div className="info-item">
                 <span className="icon">
                   <svg
                     className="w-6 h-6"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     width="30"
                     height="30"
                     fill="none"
                     viewBox="0 0 20 20"
                     style={{ fill: '#7CA24A', fillRule: 'evenodd', clipRule: 'evenodd' }}
                   >
                     <path d="M9.3,19.7C8.5,18.9,2,12.2,2,8c0-4.4,3.6-8,8-8s8,3.6,8,8c0,4.2-6.5,10.9-7.3,11.7C10.3,20.1,9.7,20.1,9.3,19.7z M10,2 C6.7,2,4,4.7,4,8c0,2.5,3.8,7.2,6,9.5c2.2-2.3,6-7,6-9.5C16,4.7,13.3,2,10,2z"/>
                     <circle cx="10" cy="8" r="2"/>
                   </svg>
                 </span>
                 <span className="label">Location <br />Delhi-Shimla-Manali-Delhi</span>
               </div>
             </div>
           </div>
         </div>
         <div>
           <br />
           {/* Any additional content you add here will not have the background color */}
   
           <p className='text-start texp ms-4'> <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={25} height={30} fill="none" viewBox="0 0 24 24">
                     <path style={{ stroke: '#7CA24A' }} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                   </svg> Posted 2 days ago |  <i className="fa fa-star ms-1" aria-hidden="true" style={{ color: 'gold' }}></i> <i className="fa fa-star ms-1" aria-hidden="true" style={{ color: 'gold' }}></i><i className="fa fa-star ms-1" aria-hidden="true" style={{ color: 'gold' }}></i><i className="fa fa-star ms-1" aria-hidden="true" style={{ color: 'gold' }}></i><i className="fa fa-star ms-1 " aria-hidden="true" style={{ color: 'gold' }}> </i>   9.5 Superb </p>
         </div><hr />
         <div className="overview-contact-wrapper">
           <div className="overview-container">
             <h1 className="overvieyw-title text-start ms-3">Overview</h1>
             <p className="overview-text text-start ms-3"><br /><br />
             A 4-day tour from Delhi to Shimla and Manali offers a perfect getaway to explore the scenic beauty and charm of these hill stations in Himachal Pradesh. Shimla's colonial architecture, Jakhu Temple, and Mall Road are must-see attractions, while Manali's picturesque landscapes, Hadimba Devi Temple, and adventure sports make for an exciting visit. This trip promises a mix of cultural exploration, relaxation, and thrilling activities, making it an unforgettable experience.</p> <div className="include-exclude-wrapper">
         <h2 className='text-start'>Include/Exclude</h2><br />
         <div className="include-exclude-container">
           <ul className="include-list">
             <li>
               <span role="img" aria-label="Check">✅</span>
               Ac luxury Car
             </li>
             <li>
               <span role="img" aria-label="Check">✅</span>
               1 Meal Per Day
             </li>
             <li>
               <span role="img" aria-label="Check">✅</span>
               Govt. Approved Tour guide
             </li>
             <li>
               <span role="img" aria-label="Check">✅</span>
               All Toll Taxes and Parking
             </li>
             {/* <li>
               <span role="img" aria-label="Check">✅</span>Visit 7 Best Places in the City With Group
             </li> */}
           </ul>
           <ul className="exclude-list">
             <li>
               <span role="img" aria-label="Cross">❌</span>
               Additional Services
             </li>
             <li>
               <span role="img" aria-label="Cross">❌</span>
               Insurance
             </li>
             <li>
               <span role="img" aria-label="Cross">❌</span>
               Food & Drinks
             </li>
             <li>
               <span role="img" aria-label="Cross">❌</span>
               Tickets
             </li>
           </ul>
         </div>
         <hr /><br /><br /><h2 className='text-start ms-2'>Tour Plan</h2>
         <div className="text-box"><br />
           <h6 className='text-start ms-3'>Travel plan Highlights</h6><br />
           <h4 className='text-start ms-3'>Day 1: Delhi to Shimla</h4><br />
           {/* <h5 className='text-start ms-3'>Pickup from the Delhi area (including Gurgaon, Noida, Faridabad, and Ghaziabad) at around 3:00 AM.</h5><br /> */}
           <p className='text-start ms-3'>Start your journey from Delhi and travel to Shimla, the capital of Himachal Pradesh. <br />
Check into your hotel and relax. <br />
In the evening, you can explore the Mall Road, Ridge, and other local markets. <br />
Overnight stay in Shimla.</p>
          <br /><br /> <h4 className='text-start ms-3'>Day 2: Shimla Sightseeing</h4><br />
          <p className='text-start ms-3'>After breakfast, embark on a sightseeing tour of Shimla. <br />
Visit popular attractions like Jakhu Temple, Christ Church, Scandal Point, and the Gaiety Theatre. <br />
Enjoy panoramic views of the Himalayas from the Ridge. <br />
Return to the hotel for dinner and overnight stay.</p>
          {/* <br /><br /> <h4 className='text-start ms-3'>Full description</h4>
          <p className='text-start ms-3'>Enjoy a full-day excursion of Agra, deviating Delhi in the first blush if you want to arrive at the well-known Taj Mahal through sunup. Following a pickup from your cottage in Delhi, Gurgaon, or Noida at 03:00, transfer to Agra by private, air-conditioned auto. Rest on the 3.5-hour ride in an exclusive, air-conditioned automobile, arriving in Agra at roughly 06:15 AM, where you are going to find your personal resource and enjoy a bird's-eye view of the sunrise over the Taj Mahal. Admire the magnificent marble mausoleum coming from the outdoors before looking inside the holy place to Mumtaz Mahal, treasured partner of the Mughal empress Shah Jahan. Invest regarding 2-3 hrs at the Taj Mahal, with some totally free opportunity to stroll about. Your overview will definitely lead you to the most ideal spots to record photos, and you will certainly be actually pleased to take some pictures for yourself. Later, continue to the nearby Red Fort (Agra Fort) to observe the lovely canopies of a walled area. You will definitely spend 1.5 hr below. Enjoy some complimentary time for breakfast (very own expenditure) before moving back to Delhi, where you will get to around 3:00 PM. Includes Personal live tourist guide Entrance cost to the Taj Mahal & Agra Fort (if alternative decided on). Hotels and resorts move from/to Delhi NCR (Gurgaon, Noida, Faridabad, Ghaziabad) hotel or flight terminal. Complimentary water container as well as a sunshade. Taking in the sights through private, cool cars and trucks. All auto parking charges, tolls, gas, and tax obligations. Any sort of meals and also different companies.</p>
          <br /><br /> <h4 className='text-start ms-3'>Covid-19 safety measures.</h4>
          <p className='text-start ms-3'>Precaution in location. All places that customers contact are actually regularly cleaned up. You have to constantly keep your social range while in motor vehicles.</p>
          <br /><br /> <h4 className='text-start ms-3'>Traveler requirements</h4>
          <p className='text-start ms-3'>You are actually demanded to use a mask as well as carry. You will get a compulsory temperature examination. Important information. What to bring. Travel permit or ID card. Comfortable shoes. Know before you go. Please take note that the Taj Mahal is shut on Fridays. If you want to go to the Baby Taj, indeed not featured within this travel plan, satisfy make an ask for at the beginning of the scenic tour. You may purchase the ticket at the place. Satisfy bring a legitimate travel permit as proof of identity.</p> */}

          <br /><br /> <h4 className='text-start ms-3'>Day 3: Shimla to Manali</h4><br />
          <p className='text-start ms-3'>After breakfast, check out from the hotel and proceed to Manali, a scenic hill station famous for its beauty and adventure activities. <br />
En route, visit Kullu Valley, Pandoh Dam, Sundernagar Lake, Hanogi Mata Temple, and Kullu Shawl Factory. <br />
Arrive in Manali and check into your hotel. <br />
Dinner and overnight stay in Manali.</p>
          <br /><br /> <h4 className='text-start ms-3'>Day 4: Manali Sightseeing and Departure</h4><br />
          <p className='text-start ms-3'>After breakfast, embark on a sightseeing tour of Manali. <br />
Visit the Hadimba Devi Temple, Vashisht Village, Tibetan Monastery, and Club House. <br />
Enjoy some leisure time in the evening for shopping or exploring the local markets. <br />
In the evening, depart from Manali and travel back to Delhi, marking the end of your memorable tour.</p>
         </div>
         
       </div>
       
           </div>
           <div className="contact-form-wrapper">
             <ContacctForm />
           </div>
           
         </div>
         <div className="review-scores-container ms-2"><h2 className='text-start ms-2'>Review Scores</h2>
      <div className="review-scores">
        <div className="review-scores__left">
          <div className="review-scores__rating">8.0</div>
          <p className='text-start text'>   ⭐Superb </p>
        </div>
        <div className="review-scores__right">
          <div className="review-scores__row">
            <div className="review-scores__category">Services</div>
            <div className="review-scores__bar">
              <div className="review-scores__bar-inner" style={{ width: '50%' }} />
            </div>
            <div className="review-scores__percentage">50%</div>
          </div>
          <div className="review-scores__row">
            <div className="review-scores__category">Locations</div>
            <div className="review-scores__bar">
              <div className="review-scores__bar-inner" style={{ width: '87%' }} />
            </div>
            <div className="review-scores__percentage">87%</div>
          </div>
          <div className="review-scores__row">
            <div className="review-scores__category">Amenities</div>
            <div className="review-scores__bar">
              <div className="review-scores__bar-inner" style={{ width: '77%' }} />
            </div>
            <div className="review-scores__percentage">77%</div>
          </div>
          <div className="review-scores__row">
            <div className="review-scores__category">Prices</div>
            <div className="review-scores__bar">
              <div className="review-scores__bar-inner" style={{ width: '69%' }} />
            </div>
            <div className="review-scores__percentage">69%</div>
          </div>
          <div className="review-scores__row">
            <div className="review-scores__category">Food</div>
            <div className="review-scores__bar">
              <div className="review-scores__bar-inner" style={{ width: '40%' }} />
            </div>
            <div className="review-scores__percentage">40%</div>
          </div>
        </div>
      </div>
      
    </div><br /><br /><br /><br /><h2 className='text-start ms-4'>Tour Plan</h2>
    
    <div className="map-container">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d224160.74595955745!2d77.01993129890279!3d28.614423552588242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdelhi%20agra%20jaipur%20route!5e0!3m2!1sen!2sin!4v1632486613061!5m2!1sen!2sin"
  className="tour-details-two__location-map"
  allowFullScreen=""
  style={{ width: '100%', height: '500px', border: '0' }}
  loading="lazy"
  title="Delhi-Agra Route Map"
></iframe>

    </div>
       </div>
  )
}

export default ShimlaManaliTour
