import React from 'react';
import Dwarikaimg1 from "./img/Dwarikaimg1.jpg";
import Dwarikaimg2 from "./img/Dwarikaimg2.jpg";
import ContacctForm from './ContacctForm';
import downloads from "./img/downloads.png"


const Dwarikaresidency = () => {

  return (
     
   <div className="tour-details-container">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
           {/* <div className="carousel-indicators">
             // <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
             // <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
           </div> */}
           <div className="carousel-inner">
             <div className="carousel-item active">
               <img src={Dwarikaimg1} className="d-block w-100 carousel-image" alt="..." />
               <div className="overlayy"></div>
               <div className="carousel-caption d-md-block centered-caption"><br /><br /><br />
                
               </div>
             </div>
             <div className="carousel-item">
               <img src={Dwarikaimg2} className="d-block w-100 carousel-image" alt="..." />
               <div className="overlayy"></div>
               <div className="carousel-caption d-md-block centered-caption"><br /><br /><br />
                
               </div>
             </div>
             {/* <div className="carousel-item">
               <img src={VedPuram2} className="d-block w-100 carousel-image" alt="..." />
               <div className="overlayy"></div>
               <div className="carousel-caption d-md-block centered-caption"><br /><br /><br />
                
               </div>
             </div> */}
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
           <h2 className="tour-title text-white">Adinath Dwarika Residency </h2>
           
           <div className="tour-info-container">
             <div className="tour-info">
               <div className="info-item">
                 <span className="icon">
                 <div className="download-container">
     <a href="/DwarikaResidencyBrochure.pdf" target="_blank" rel="noopener noreferrer" className="bounce-effect">
       <img src={downloads} alt="Icon" width="45" height="45" />
     </a>
   </div>
   
                 </span>
                 <span className="label text-white"> Dwarika Residency Brochure<br />
                 <span style={{ color: 'grey' }}>Click for Download</span></span>
               </div>
              
               <div className="info-item">
                 {/* <span className="icon"> */}
                 {/* <svg className='ms-2'
       width="35px"
       height="35px"
       viewBox="0 0 17.00 17.00"
       xmlns="http://www.w3.org/2000/svg"
       xmlnsXlink="http://www.w3.org/1999/xlink"
       fill="#000000"
     >
       <g fill="none" fillRule="evenodd">
         <g transform="translate(1.000000, 0.000000)" fill="#fffafa">
           <path d="M4.428,13.572 L0.629,12.142 L0.145,13.315 C0.145,13.315 -0.318,15.213 1.342,15.838 C3.004,16.465 3.961,14.751 3.961,14.751 L4.428,13.572 Z" />
           <path d="M7.207,3.193 C5.565,2.534 3.26,3.979 2.463,5.8 C2.135,6.55 1.986,7.359 1.862,8.157 C1.803,8.538 1.761,8.929 1.686,9.309 C1.59,9.786 1.447,10.245 1.305,10.708 C1.108,11.351 1.325,11.459 1.924,11.569 L4.022,12.361 C4.236,12.463 4.654,12.72 4.869,12.48 C5.059,12.265 5.021,11.873 5.148,11.618 C5.312,11.287 5.496,10.95 5.699,10.638 C6.148,9.94 7,9.43 7.577,8.828 C8.292,8.08 8.687,7.33 8.905,6.338 C9.195,5.017 8.528,3.722 7.207,3.193 Z" />
           <g transform="translate(8.000000, 0.000000)">
             <path d="M0.977,9.289 L4.632,10.732 C4.632,10.732 3.878,13.685 1.646,12.826 C-0.586,11.965 0.977,9.289 0.977,9.289 Z" />
             <path d="M6.19,0.217 C7.75,0.797 8.378,3.255 7.721,5.024 C7.45,5.751 7.018,6.403 6.575,7.038 C6.363,7.34 6.133,7.636 5.932,7.949 C5.685,8.339 5.479,8.75 5.271,9.16 C4.98,9.73 4.759,9.665 4.275,9.366 L2.31,8.593 C2.097,8.529 1.641,8.441 1.653,8.142 C1.664,7.872 1.949,7.622 2.031,7.368 C2.137,7.035 2.234,6.683 2.3,6.34 C2.452,5.572 2.204,4.679 2.208,3.899 C2.208,2.93 2.435,2.159 2.94,1.334 C3.617,0.228 4.932,-0.248 6.19,0.217 Z" />
           </g>
         </g>
       </g>
     </svg> */}
                 {/* </span> */}
                 {/* <span className="label text-start text-white">Tour Type<br /><span style={{ color: 'grey' }}>Daily Tour</span></span>            </div>
               <div className="info-item">
                 <span className="icon">
                 <svg
     className="w-6 h-6 ms-2"
     aria-hidden="true"
     xmlns="http://www.w3.org/2000/svg"
     width={35}
     height={35}
     fill="none"
     viewBox="0 0 24 24"
   >
     <path
       style={{ stroke: '#ffffff' }}
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M16 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3ZM8 11c1.656 0 3-1.344 3-3S9.656 5 8 5 5 6.344 5 8s1.344 3 3 3Zm8 2c2.21 0 4 1.79 4 4v1H12v-1c0-2.21 1.79-4 4-4ZM8 13c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4Z"
     />
   </svg>
   
                 </span> */}
                 {/* <span className="label text-white">Group Size<br /><span style={{ color: 'grey' }}>Unlimited</span></span>
               </div>
           
               <div className="info-item">
                 <span className="icon">
                 <svg className='ms-2'
       width="35px"
       height="35px"
       viewBox="0 0 512 512"
       xmlns="http://www.w3.org/2000/svg"
       xmlnsXlink="http://www.w3.org/1999/xlink"
       fill="#000000"
     >
       <g fill="none" fillRule="evenodd">
         <g fill="#ffffff" transform="translate(42.666667, 85.333333)">
           <path d="M426.666667,85.3333333 L426.666667,341.333333 L362.626302,341.333333 L362.666667,405.333333 L256,341.333333 L170.666667,341.333333 L170.666667,85.3333333 L426.666667,85.3333333 Z M256,1.42108547e-14 L256,64 L149.333333,64 L149.333,268.8 L64,320 L64.0403648,256 L6.39488462e-14,256 L6.39488462e-14,1.42108547e-14 L256,1.42108547e-14 Z M311.198683,149.333333 L286.267137,149.333333 L238.933333,277.333333 L261.425923,277.333333 L274.524018,240.658669 L322.580475,240.658669 L335.768901,277.333333 L359.616467,277.333333 L311.198683,149.333333 Z M298.552247,170.741943 C300.501905,177.275935 302.566831,183.717713 304.747024,190.067278 L305.68845,192.782875 L316.43792,223.134321 L280.576241,223.134321 L291.325712,192.782875 C294.336768,184.412138 296.745613,177.065161 298.552247,170.741943 Z M117.030949,34.5391157 L95.6976158,34.5391157 L95.6973576,45.2051157 L42.3642825,45.2057824 L42.3642825,66.5391157 L121.995716,66.5400848 C120.716368,84.7084858 116.106956,101.073346 108.17419,115.733999 C99.560792,103.887475 93.627247,90.6461433 90.3372583,75.9278184 L90.1264414,74.9658328 L69.2687902,79.445732 L70.8337641,85.9582885 C75.5835399,103.786573 83.778254,119.851708 95.3786478,134.061926 C82.7968575,147.638694 64.7668657,157.161751 40.9572973,162.588992 L40.0503576,162.79312 L44.6782074,183.618444 L51.0461873,182.085779 C75.8970327,175.630085 95.7303277,164.729984 110.29054,149.351848 C120.495309,158.153416 133.141117,166.473384 148.224582,174.354521 L149.332601,174.930407 L149.332449,150.637452 C139.011433,144.692193 130.308211,138.579415 123.22105,132.322953 C134.984339,113.206613 141.674551,91.5943352 143.304052,67.6309686 L143.374635,66.540106 L149.332358,66.5391157 L149.332358,45.2051157 L117.030358,45.2051157 L117.030949,34.5391157 Z" />
         </g>
       </g>
     </svg>
                 </span> */}
                 {/* <span className="label text-white">Languages<br /><span style={{ color: 'grey' }}>---</span></span> */}
               </div>
             </div>
           </div>
         </div>
         <div>
           <br />
           {/* Any additional content you add here will not have the background color */}
   
           <p className='text-start texp ms-4'> 
             {/* <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={25} height={30} fill="none" viewBox="0 0 24 24">
                     <path style={{ stroke: '#7CA24A' }} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                   </svg>  */}
                   Top Rated |   <i className="fa fa-star " aria-hidden="true" style={{ color: 'gold' }}></i> <i className="fa fa-star ms-1" aria-hidden="true" style={{ color: 'gold' }}></i><i className="fa fa-star ms-1" aria-hidden="true" style={{ color: 'gold' }}></i><i className="fa fa-star ms-1" aria-hidden="true" style={{ color: 'gold' }}></i><i className="fa fa-star ms-1 " aria-hidden="true" style={{ color: 'gold' }}> </i>  </p>
         </div>
         <hr />
         <div className="overview-contact-wrapper">
           <div className="overview-container">
             <h1 className="overvieyw-title text-start ms-3">Overview</h1> <br />
             <h4 className='vedpuramtext text-start ms-3'>Adinath's Dwarika Residency – A Perfect Blend of Comfort & Elegance

</h4>
             <p className="overview-text text-start ms-3">
             Welcome to Dwarika Residency, a premium residential project designed to offer a harmonious blend of luxury, comfort, and modern living. Nestled in a prime location, this thoughtfully planned community ensures a lifestyle of convenience and tranquility for its residents.


             </p>
             <h5 className='vedpuramtext text-start ms-3'>Prime Location with Excellent Connectivity</h5>
             <p className="overview-text text-start ms-3">
             Strategically situated, Dwarika Residency provides easy access to major landmarks, essential services, and urban conveniences. With well-planned infrastructure and a serene environment, this residential enclave is an ideal choice for families looking for a peaceful yet well-connected home.                 </p>
                 <h5 className='vedpuramtext text-start ms-3'>World-Class Amenities for an Enhanced Lifestyle
                 </h5>
             <p className="overview-text text-start ms-3">
             Dwarika Residency is designed with state-of-the-art features to ensure a comfortable and fulfilling living experience. The project includes:
             <ul className="mt-3 ms-0 space-y-2 ">
           <li>✅ <strong>Well-Laid Wide Roads</strong> – Ensuring smooth connectivity within the community.</li>
           <li>✅ <strong>Beautiful Landscaped Gardens</strong> – Providing a refreshing natural retreat.</li>
           <li>✅ <strong>Secure Gated Community</strong> – 24/7 security for a safe and worry-free living.           </li>
           <li>✅ <strong>Reliable Water & Electricity Supply</strong> – Offering uninterrupted daily essentials.
           </li>
           <li>✅ <strong>Proximity to Key Landmarks</strong> – Schools, hospitals, shopping centers, and transportation hubs just a short distance away.</li>
         </ul></p>
            
   
   
   
           </div>
           <div className="contact-form-wrapper">
             <ContacctForm />
           </div>
         </div>
         <div className="map-container">
         <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.0181178808735!2d77.8979951!3d27.16111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDA5JzQwLjAiTiA3N8KwNTQnMDIuMSJF!5e0!3m2!1sen!2sin!4v1711717200000!5m2!1sen!2sin" 
    allowFullScreen 
    loading="lazy" 
    title="Google Map"
></iframe>

   </div>
   
       </div>
  )
}

export default Dwarikaresidency
