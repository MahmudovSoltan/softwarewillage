import React from 'react'
import '../css/Blog.css'
import touch from '../imge/touch.png'
import whatch from '../imge/whatch.png'
import plan from '../imge/plan.png'
import ui from '../imge/uidizayn.png'
import { GoArrowUpRight } from "react-icons/go";
function Blog() {
  return (
    <div>
     <div className='blog'>
      <h2>Yeniliklərdən ilk
      xəbərdar ol</h2>
     </div>
     <div className='container'>
     <div className='education-sections'>
            <div className='education-section1'>
              Hamısı
            </div>
            <div className='education-section'>
            Dizayn
            </div>
            <div className='education-section'>
            Proqramlaşdırma
            </div>
            <div className='education-section'>
            Mobil
            </div>
            <div className='education-section'>
            Data
            </div>

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
     </div>
    </div>
  )
}

export default Blog
