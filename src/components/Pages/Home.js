import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import image1 from '../imge/Group 37568.png'
import cap from '../imge/GraduationCap.png'
import student from '../imge/Student.png'
import video from '../imge/VideoCamera.png'
import users from '../imge/UsersThree.png'
import icon from '../imge/icon.png'
import noutbuk from '../imge/noutbuk.png'
import { BiSolidRightArrow } from "react-icons/bi";
import photo1 from '../imge/photo1.png'

function Home() {
  return (
    <div>
      <section className='home-top'>
     <div className='container'>
      <div className='home-top-right'>
        <h1>
        Gələcəyin peşələrini
        öyrənməyə indi başla
        </h1>
        <p>
        Ekspert müəllimlər tərəfindən tədris olunan müxtəlif fənləri əhatə edən geniş kursları kəşf edin.
        </p>
        <div>
          <button className='nav-btn'>
          Tədris sahələri
          </button>
          <button className='home-btn'>Onlayn təqdimat</button>
        </div>

      </div>
      <div className='home-top-left'>
        <img src={image1}/>

      </div>
     </div>
     <div className='home-top-items container'>
<div className="home-top-item">
<div className='cap'>
  <img  src={cap}/>

</div>
<div>
  <h5 className='home-item-titel'>300</h5>
  <p className='home-item-text'>Instructor</p>
</div>
</div>
<div className="home-top-item">
<div className='student'>
  <img  src={student}/>

</div>
<div>
  <h5 className='home-item-titel'>300</h5>
  <p className='home-item-text'>Instructor</p>
</div>
</div>
<div className="home-top-item">
<div className='video'>
  <img  src={video}/>

</div>
<div>
  <h5 className='home-item-titel'>300</h5>
  <p className='home-item-text'>Instructor</p>
</div>
</div>
<div className="home-top-item">
<div className='users'>
  <img  src={users}/>

</div>
<div>
  <h5 className='home-item-titel'>300</h5>
  <p className='home-item-text'>Instructor</p>
</div>
</div>

     </div>

      </section>
      <br/>
      <br/>
      <br/>
     <section className='oure-courses'>
      <div className='container'>
        <div className='courses-title'>
          <h2>Ən <span>məhşur kurslarımız</span></h2>
          <p>
       <Link className='bootcamp-link'>kursları araşdırın</Link>
       <img src={icon}/>
          </p>
        </div>
        <div className='corses-cards'>
          <div className='courses-card'>
            <div className='courses-img'>
              <img src={noutbuk}/>

            </div>
            <div className='courses-card-bottom'>
              <div className='card-bottom-date'>
                <span className='card-buttom'>
                  <BiSolidRightArrow/>
                </span>
                <span className='card-text'>Başlama tarixi</span>

              </div>
              <h3>
              UX/UI Dizayn Bootcamp
              </h3>
              <hr/>
              <div className='card-bottom-instractr'>
                <div>
                  <div>
                    <img src={photo1}/>
                  </div>
                  <div>
                  İnstruktor
                  <br/> 
                  adı
                  </div>
                </div>
              <button>
              Proqramlaşdırma
              </button>

              </div>

            </div>

          </div>
          <div className='courses-card'>
            <div className='courses-img'>
              <img src={noutbuk}/>

            </div>
            <div className='courses-card-bottom'>
            <div className='card-bottom-date'>
                <span className='card-buttom'>
                  <BiSolidRightArrow/>
                </span>
                <span className='card-text'>Başlama tarixi</span>

              </div>
              <h3>
              Front-End Bootcamp
              </h3>
              <hr/>
              <div className='card-bottom-instractr'>
                <div>
                  <span>
                    <img src={photo1}/>
                  </span>
                  <span>
                  İnstruktor
                  <br/> 
                  adı
                  </span>
                </div>
              <button>
              Proqramlaşdırma
              </button>

              </div>

            </div>

          </div>
          <div className='courses-card'>
            <div className='courses-img'>
              <img src={noutbuk}/>

            </div>
            <div className='courses-card-bottom'>
            <div className='card-bottom-date'>
                <span className='card-buttom'>
                  <BiSolidRightArrow/>
                </span>
                <span className='card-text'>Başlama tarixi</span>

              </div>
              <h3>
              Front-End Bootcamp
              </h3>
              <hr/>
              <div className='card-bottom-instractr'>
                <div>
                  <span>
                    <img src={photo1}/>
                  </span>
                  <span>
                  İnstruktor
                  <br/> 
                  adı
                  </span>
                </div>
              <button>
              Proqramlaşdırma
              </button>

              </div>

            </div>

          </div>

        </div>

      </div>

     </section>
     <section className='popular-categories'>
      <div className=''>
      <h2>
      Popular <span>kateqoriyalar</span>
      </h2>

      </div>

     </section>
    </div>
  )
}

export default Home
