import React, { useState } from 'react';
import Over1 from "./img/Over1.jpg";
import Over2 from "./img/Over2.jpg";
import Over3 from "./img/Over3.jpg";
import Over4 from "./img/Over4.jpg";
import Over5 from "./img/Over5.webp";
import Over6 from "./img/Over6.jpg";
import Over7 from "./img/Over7.jpg";
import Over8 from "./img/Over8.webp";
import Over9 from "./img/Over9.jpg";
import { Link } from "react-router-dom";

const OverNight = () => {

  const [hoveredLink, setHoveredLink] = useState(null);
  return (
    <div><br /><br />
         <div className="style-F">
        <h6>Multi Day Trips</h6>
        </div><br />
        {/* <h2>Overnight Tour Packages</h2><br /> */}
          <div className="container-A py-3 px-4">
  <div className="row">
    <div className="col-lg-4 col-md-6 mb-4 ">
      <div className="card-A">
        <img src={Over1} className="card-img-top" alt="" />
        <div className="card-body"><br />
     


<Link
        to="/2-day-golden-triangle-to-agr-and-jaipur-from"
        onMouseEnter={() => setHoveredLink('Overnight')}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          textDecoration: 'none',
          color: hoveredLink === 'Overnight' ? 'black' : 'black',
          transform: hoveredLink === 'Overnight' ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
      >
        <h3 className='text-start ms-3'><b>2 Day Golden Triangle to Agra and Jaipur from Delhi</b></h3>
      </Link>          {/* <p className='text-start ms-0 '><b>Get compassionate and individualized care in your infertility matters from our devoted infertility care team. We are here to provide customized solutions with continuous support on your journey.</b></p> */}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
  {/* <i className="fa fa-star ms-3" aria-hidden="true" style={{ color: 'gold' }}></i> */}
  <p className='ms-5'> 3 Reviews</p><br />
</div><br />
        <div className="container-F">
      <div className="item text-start"></div>
      <div className="item text-center"></div>
      <div className="item text-end"></div>
    </div><br />
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card-A">
        <img src={Over2} className="card-img-top" alt="" />
        <div className="card-body">
        <br />
     
<Link
        to="/3-day-golden-triangle-to-agra-and-jaipur-from-delhi"
        onMouseEnter={() => setHoveredLink('jaipur')}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          textDecoration: 'none',
          color: hoveredLink === 'jaipur' ? 'black' : 'black',
          transform: hoveredLink === 'jaipur' ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
      >
        <h3 className='text-start ms-3'><b>3 Day Golden Triangle to Agra and Jaipur from Delhi</b></h3>
      </Link>        </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
  {/* <i className="fa fa-star ms-3" aria-hidden="true" style={{ color: 'gold' }}></i> */}
  <p className='ms-5'> 0 Reviews</p><br />
</div>
        <div className="container-F">
      <div className="item"></div>
      <div className="item">03 DAY</div>
      <div className="item"></div>
    </div><br />
      </div>
    </div>
    <div className="col-lg-4 col-md-1 mb-4">
      <div className="card-A">
        <img src={Over3} className="card-img-top" alt="Dr. Shweta Goswami" />
        <div className="card-body"><br />
     

<Link
        to="/4-day-golden-triangle-to-agra-and-jaipur-from-delhi"
        onMouseEnter={() => setHoveredLink('tour')}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          textDecoration: 'none',
          color: hoveredLink === 'tour' ? 'black' : 'black',
          transform: hoveredLink === 'tour' ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
      >
        <h3 className='text-start ms-3'><b>4 Day Golden Triangle to Agra and Jaipur from Delhi</b></h3>
      </Link>        </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
  {/* <i className="fa fa-star ms-3" aria-hidden="true" style={{ color: 'gold' }}></i> */}
  <p className='ms-5'> 0 Reviews</p><br />
</div>
        <div className="container-F">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </div><br /><br />
      </div>
    </div>
    <div className="col-lg-4 col-md-1 mb-4">
      <div className="card-A">
        <img src={Over4} className="card-img-top" alt="Dr. Shweta Goswami" />
        <div className="card-body"><br />
   

<Link
        to="/5-day-golden-triangle-to-agra-and-jaipur-from-delhi"
        onMouseEnter={() => setHoveredLink('5 Day Golden Triangle to Agra and Jaipur from Delhi')}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          textDecoration: 'none',
          color: hoveredLink === '5 Day Golden Triangle to Agra and Jaipur from Delhi' ? 'black' : 'black',
          transform: hoveredLink === '5 Day Golden Triangle to Agra and Jaipur from Delhi' ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
      >
        <h3 className='text-start ms-3'><b>5 Day Golden Triangle to Agra and Jaipur from Delhi</b></h3>
      </Link>        </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
  {/* <i className="fa fa-star ms-3" aria-hidden="true" style={{ color: 'gold' }}></i> */}
  <p className='ms-5'> 0 Reviews</p><br />
</div>
        <div className="container-F">
      <div className="item"></div>
      <div className="item">05 DAY</div>
      <div className="item"></div>
    </div><br /><br />
      </div>
    </div>
    <div className="col-lg-4 col-md-1 mb-4">
      <div className="card-A">
        <img src={Over5} className="card-img-top" alt="Dr. Shweta Goswami" />
        <div className="card-body"><br />
    

<Link
        to="/6-Day-golden-triangle-tour-with-varanasi"
        onMouseEnter={() => setHoveredLink('6 Day Golden Triangle Tour with Varanasi')}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          textDecoration: 'none',
          color: hoveredLink === '6 Day Golden Triangle Tour with Varanasi' ? 'black' : 'black',
          transform: hoveredLink === '6 Day Golden Triangle Tour with Varanasi' ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
      >
        <h3 className='text-start ms-3'><b>6 Day Golden Triangle Tour with Varanasi</b></h3>
      </Link>        </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
  {/* <i className="fa fa-star ms-3" aria-hidden="true" style={{ color: 'gold' }}></i> */}
  <p className='ms-5'> 0 Reviews</p><br />
</div>
        <div className="container-F">
      <div className="item"></div>
      <div className="item">06 DAY</div>
      <div className="item"></div>
    </div><br /><br />
      </div>
    </div>
    <div className="col-lg-4 col-md-1 mb-4">
      <div className="card-A">
        <img src={Over6} className="card-img-top" alt="Dr. Shweta Goswami" />
        <div className="card-body"><br />
       

<Link
        to="/6-day-golden-triangle-tour-with-mumbai"
        onMouseEnter={() => setHoveredLink('tour')}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          textDecoration: 'none',
          color: hoveredLink === 'tour' ? 'black' : 'black',
          transform: hoveredLink === 'tour' ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
      >
        <h3 className='text-start ms-3'><b>6 Day Golden Triangle tour with Mumbai</b></h3>
      </Link>        </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
  {/* <i className="fa fa-star ms-3" aria-hidden="true" style={{ color: 'gold' }}></i> */}
  <p className='ms-5'> 0 Reviews</p><br />
</div>
        <div className="container-F">
      <div className="item"></div>
      <div className="item">06 DAY</div>
      <div className="item"></div>
    </div><br /><br />
      </div>
    </div>
    <div className="col-lg-4 col-md-1 mb-4">
      <div className="card-A">
        <img src={Over7} className="card-img-top" alt="Dr. Shweta Goswami" />
        <div className="card-body"><br />
    

<Link
        to="/6-day-golden-triangle-tour-with-udaipur"
        onMouseEnter={() => setHoveredLink('6 Day Golden Triangle Tour with Udaipur')}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          textDecoration: 'none',
          color: hoveredLink === '6 Day Golden Triangle Tour with Udaipur' ? 'black' : 'black',
          transform: hoveredLink === '6 Day Golden Triangle Tour with Udaipur' ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
      >
        <h3 className='text-start ms-3'><b>6 Day Golden Triangle Tour with Udaipur</b></h3>
      </Link>        </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
  {/* <i className="fa fa-star ms-3" aria-hidden="true" style={{ color: 'gold' }}></i> */}
  <p className='ms-5'> 0 Reviews</p><br />
</div>
        <div className="container-F">
      <div className="item"></div>
      <div className="item">06 DAY</div>
      <div className="item"></div>
    </div><br /><br />
      </div>
    </div>
    <div className="col-lg-4 col-md-1 mb-4">
      <div className="card-A">
        <img src={Over8} className="card-img-top" alt="Dr. Shweta Goswami" />
        <div className="card-body"><br />
     

<Link
        to="/4-day-golden-triangle-tour-with-ranthambore"
        onMouseEnter={() => setHoveredLink('tour')}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          textDecoration: 'none',
          color: hoveredLink === 'tour' ? 'black' : 'black',
          transform: hoveredLink === 'tour' ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
      >
        <h3 className='text-start ms-3'><b>4 Day Golden Triangle Tour with Ranthambore</b></h3>
      </Link>        </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
  {/* <i className="fa fa-star ms-3" aria-hidden="true" style={{ color: 'gold' }}></i> */}
  <p className='ms-5'> 0 Reviews</p><br />
</div>
        <div className="container-F">
      <div className="item"></div>
      <div className="item">04 DAY</div>
      <div className="item"></div>
    </div><br /><br />
      </div>
    </div>
    <div className="col-lg-4 col-md-1 mb-4">
      <div className="card-A">
        <img src={Over9} className="card-img-top" alt="Dr. Shweta Goswami" />
        <div className="card-body"><br />
    

<Link
        to="/6-day-golden-triangle-tour-from-delhi"
        onMouseEnter={() => setHoveredLink('6 Day Golden Triangle Tour from Delhi')}
        onMouseLeave={() => setHoveredLink(null)}
        style={{
          textDecoration: 'none',
          color: hoveredLink === '6 Day Golden Triangle Tour from Delhi' ? 'black' : 'black',
          transform: hoveredLink === '6 Day Golden Triangle Tour from Delhi' ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
      >
        <h3 className='text-start ms-3'><b>6 Day Golden Triangle Tour from Delhi</b></h3>
      </Link>        </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
  {/* <i className="fa fa-star ms-3" aria-hidden="true" style={{ color: 'gold' }}></i> */}
  <p className='ms-5'> 0 Reviews</p><br />
</div>
        <div className="container-F">
      <div className="item"></div>
      <div className="item">06 DAY</div>
      <div className="item"></div>
    </div><br /><br />
      </div>
    </div>

  </div>
</div>
    </div>
  )
}

export default OverNight
