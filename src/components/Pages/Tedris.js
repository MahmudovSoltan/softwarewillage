import React from 'react'
import '../css/Tedris.css'
import dizayn from '../imge/dizayn.png'
import proqramlasdirma from '../imge/proqramlasdirma.png'
import mobile from '../imge/mobile.png'
import data from '../imge/mobile.png'
import { GoArrowUpRight } from "react-icons/go";
function Tedris() {
  return (
    <div>
      <div className='bck-img'>
        <h2>
          Yeni dünyanı
          kəşf et
        </h2>
      </div>
      <div className='container'>
        <h3 className='education-title'>
          Tədris <span>sahələri</span>
        </h3>
        <div className='education-fields'>
          <div className='education-field'>
            <div className='categories-items'>
              <div className='categories-item'>
                <div>
                  <img src={dizayn} />
                  <h3>
                    Dizayn

                  </h3>
                </div>
                <div className='categories-count'>
                  2 Kurs
                </div>

              </div>
              <div className='categories-item colorblue'>
                <div>
                  <img src={proqramlasdirma} />
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
                  <img src={mobile} />
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
                  <img src={data} />
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
          <div className='education-sections'>
            <div className='education-section1'>
              Hamısı
            </div>
            <div className='education-section'>
              Qrup
            </div>
            <div className='education-section'>
              Fərdi
            </div>

          </div>
          <div className='education-bottom-items'>
            <div className='education-bottom-item-box'>


            </div>
            <div className='education-bottom-item-text'>
                 <h4>
                 Lorem Ipsum
                 </h4>
                 <div className='team'>
                 Qrup
                 </div>
                 <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend fermentum neque non efficitur. Praesent auctor molestie posuere. Fusce eros ligula, eleifend eget ligula a, congue vestibulum nunc Praesent auctor eros ligula, eleifend eget ligula a, auctor  
                 </p>
                 <div className='detail'>
                 Detallar <span><GoArrowUpRight/></span>
                 </div>
            </div>
          </div>
          <div className='education-bottom-items'>
            <div className='education-bottom-item-box'>


            </div>
            <div className='education-bottom-item-text'>
                 <h4>
                 Lorem Ipsum
                 </h4>
                 <div className='team'>
                 Qrup
                 </div>
                 <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend fermentum neque non efficitur. Praesent auctor molestie posuere. Fusce eros ligula, eleifend eget ligula a, congue vestibulum nunc Praesent auctor eros ligula, eleifend eget ligula a, auctor  
                 </p>
                 <div className='detail'>
                 Detallar <span><GoArrowUpRight/></span>
                 </div>
            </div>
          </div>
          <div className='education-bottom-items'>
            <div className='education-bottom-item-box'>


            </div>
            <div className='education-bottom-item-text'>
                 <h4>
                 Lorem Ipsum
                 </h4>
                 <div className='team'>
                 Qrup
                 </div>
                 <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend fermentum neque non efficitur. Praesent auctor molestie posuere. Fusce eros ligula, eleifend eget ligula a, congue vestibulum nunc Praesent auctor eros ligula, eleifend eget ligula a, auctor  
                 </p>
                 <div className='detail'>
                 Detallar <span><GoArrowUpRight/></span>
                 </div>
            </div>
          </div>
          <div className='education-bottom-items'>
            <div className='education-bottom-item-box'>


            </div>
            <div className='education-bottom-item-text'>
                 <h4>
                 Lorem Ipsum
                 </h4>
                 <div className='team'>
                 Qrup
                 </div>
                 <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend fermentum neque non efficitur. Praesent auctor molestie posuere. Fusce eros ligula, eleifend eget ligula a, congue vestibulum nunc Praesent auctor eros ligula, eleifend eget ligula a, auctor  
                 </p>
                 <div className='detail'>
                 Detallar <span><GoArrowUpRight/></span>
                 </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Tedris
