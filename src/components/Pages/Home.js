import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import { BiSolidRightArrow } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import image1 from '../imge/Group 37568.png'
import cap from '../imge/GraduationCap.png'
import student from '../imge/Student.png'
import video from '../imge/VideoCamera.png'
import users from '../imge/UsersThree.png'
import icon from '../imge/icon.png'
import noutbuk from '../imge/noutbuk.png'
import photo1 from '../imge/photo1.png'
import dizayn from '../imge/dizayn.png'
import proqramlasdirma from '../imge/proqramlasdirma.png'
import mobile from '../imge/mobile.png'
import data from '../imge/mobile.png'
import bootcamp from '../imge/bootcamp.png'
import student1 from '../imge/student-1.png'
import student2 from '../imge/student-2.png'
import student3 from '../imge/student-3.png'
import student4 from '../imge/student-4.png'
import white from '../imge/whiteIcon.png'
import touch from '../imge/touch.png'
import whatch from '../imge/whatch.png'
import plan from '../imge/plan.png'
import ui from '../imge/uidizayn.png'
import autodesk from '../imge/Autodesc.png'
import comptia from '../imge/Comptia.png'
import digitalMarketibg from '../imge/DigitalMarceting.png'
import githup from '../imge/GitHup.png'
import redhat from '../imge/RedHat.png'
import microsoft from '../imge/Microsoft.png'

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
       <Link to="bootcamp" className='bootcamp-link'>kursları araşdırın</Link>
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
      <div className='container'>
      <h2 className='popular-categories-title'>
      Popular <span>kateqoriyalar</span>
      </h2>
      <div className='categories-items'>
        <div className='categories-item'>
          <div>
            <img src={dizayn}/>
          <h3>
            Dizayn

          </h3>
          </div>
          <div className='categories-count'>
          2 Kurs
          </div>

        </div>
        <div className='categories-item'>
          <div>
            <img src={proqramlasdirma}/>
          <h3>
          Proqramlaşdırma

          </h3>
          </div>
          <div className='categories-count'>
          3 Kurs
          </div>

        </div>
        <div className='categories-item'>
          <div>
            <img src={mobile}/>
          <h3>
          Mobil

          </h3>
          </div>
          <div className='categories-count'>
          2 Kurs
          </div>

        </div>
        <div className='categories-item'>
          <div>
            <img src={data}/>
          <h3>
          Data Analitikası

          </h3>
          </div>
          <div className='categories-count'>
          1 Kurs
          </div>

        </div>

      </div>

      </div>

     </section>
     <section className='section-bootcamp container'>
      <div>
        <img src={bootcamp} />
      </div>
      <div>
        <h2>
        Bizi seçənlərin 1 nömrəli 
        səbəbi - <span>Bootcamp sistemi</span>
        </h2>
        <p>
        Bizim fərqimiz Bootcamp məntiqi ilə işləməyimizdir. 
        Bootcamplarımız uzun vaxt deyil qısa zamanda tələbələrə ən vacib və ən aktual tərəflərini öyrənərək qısa zamanda hazır işçi dərəcəsinə çatırlar.  Tələbələr tədris zamanı real layihələr üzərində işlədikləri üçün topladıqları biliklər də lazımlı və aktual olur.
        </p>
        <div>Təhsil modelimiz  <img src={icon}/></div>

      </div>

     </section>
     <section className='section-comments'>
      <div className='container'>
       <div className='comments-title'>
       <h2>
        Məzunlarımız<span> rəyi</span>
        </h2>
        <p>Məzunlarımız <img src={white}/></p>
       </div>
       <div className='students-comments'>
          <div className='student-comment'>
            <img src={student1}/>
            <h3>Tələbə adı</h3>
            <p>Proqram adı</p>

          </div>
          <div className='student-comment'>
            <img src={student2}/>
            <h3>Tələbə adı</h3>
            <p>Proqram adı</p>

          </div>
          <div className='student-comment'>
            <img src={student3}/>
            <h3>Tələbə adı</h3>
            <p>Proqram adı</p>

          </div>
          <div className='student-comment'>
            <img src={student4}/>
            <h3>Tələbə adı</h3>
            <p>Proqram adı</p>

          </div>

       </div>

      </div>

     </section>
     <section className='section-articles container'>
      <div className='our-articles-title'>
        <h2>
        Blog <span>məqalələrimiz</span>
        </h2>
        <div>Məqalələrimiz <img src={icon}/></div>

      </div>
      <div className='our-articles'>
        <div className='our-article'>
          <img src={touch}/>

          <div><button>Proqramlaşdırma</button></div>
          <h3>
          Mobil proqramlaşdırmada gələcək tendensiyalar
          </h3>
          <div>
            <p>Sentyabr 3, 2023</p>
            <p><GoArrowUpRight/></p>
          </div>



        </div>
        <div className='our-article'>
          <img src={whatch}/>

          <div><button>Mobil</button></div>
          <h3>
          Mobil proqramlaşdırmada gələcək tendensiyalar
          </h3>
          <div>
            <p>Sentyabr 3, 2023</p>
            <p><GoArrowUpRight/></p>
          </div>



        </div>
        <div className='our-article'>
          <img src={plan}/>

          <div><button>UX Dizayn</button></div>
          <h3>
          Mobil proqramlaşdırmada gələcək tendensiyalar
          </h3>
          <div>
            <p>Sentyabr 3, 2023</p>
            <p><GoArrowUpRight/></p>
          </div>



        </div>
        <div className='our-article'>
          <img src={ui}/>

          <div><button>UI Dizayn</button></div>
          <h3>
          Mobil proqramlaşdırmada gələcək tendensiyalar
          </h3>
          <div>
            <p>Sentyabr 3, 2023</p>
            <p><GoArrowUpRight/></p>
          </div>



        </div>
      

      </div>

        <div className='our-articles-title'>
        <h2>
        Bizim <span>əməkdaşlar 1234</span>
        </h2>
      </div>
      <div className='our-contacts'>
      <div><img src={autodesk}/></div>
        <div><img src={comptia}/></div>
        <div><img src={digitalMarketibg}/></div>
        <div><img src={githup}/></div>
        <div><img src={microsoft}/></div>
        <div><img src={redhat}/></div>
       

      </div>

     </section>
     <div>
      
     </div>
    </div>
  )
}

export default Home
