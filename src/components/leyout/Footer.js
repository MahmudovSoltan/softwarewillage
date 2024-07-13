import React from 'react'
import  '../css/Footer.css'
import { GoArrowUpRight } from "react-icons/go";


const Footer = () => {
  return (
    <div>
      <section className='section-ask-us'>
        <div className='container ask-us '>
            <div className='ask-us-left'>
                <h2>
                Bizdən <span>soruş</span>
                </h2>
                <p>
                Haqqında sualınız olan tədris sahəsi ilə bağlı sorğunuzu bizə göndərin, bizimlə əlaqə saxlayaq.
                </p>
              <p>
              Bizimlə görüş təyin et, dərslərimiz, müəllimlərimiz və tədris prosesimizlə şəxsən tanış ol.
              </p>

            </div>
            <div className='ask-us-right'>
            <form>
                <div>
                    <input
                     type="text" 
                     id="from_name"
                      name="from_name"
                       placeholder="Ad Soyad" 
               />
             
                </div>

                <div >
                <input 
               
                 type="email"
                  id="from_email"
                   name="from_email"
                    placeholder="+994 __  ___  __  __ " 
             />
                 
                </div>
                <div >
                <input 
                      
                      type="email"
                       id="from_email"
                       name="from_email"
                        placeholder="E-mail"
                  />
                </div>
               
            </form>


            <div className='it-sections'>
              <span className='it-section'>
              Proqramlaşdırma
              </span>
              <span className='it-section'>
              Data Analitikası
              </span>
              <span className='it-section'>
              Mobil
              </span>
              <span className='it-section'>
              Qrafik Dizayn
              </span>
              <span className='it-section'>
              UX/UI Dizayn
              </span>
              
              </div> 
              
<div>      <button className='footer-btn' type='submit'  >Sorğu göndər <span><GoArrowUpRight/></span></button></div>
            </div>

        </div>

      </section>
      <div className='footer-adres container'>
        <div>
          <h3 className='adres-titel'>
          Ünvan
          </h3>
          <p className='adres-text'>Ünvanımız</p>
          <h3 className='adres-titel'>
          Əlaqə
          </h3>
          <p className='adres-text'>Telefon nömrəsi</p>
        </div>
        <div>
          <h3 className='adres-titel'>
          Haqqımızda
          </h3>
          <p className='adres-text'>Biz kimik</p> 
          <p className='adres-text'>Əməkdaşlarımız</p>
          <p className='adres-text'>Məzunlarımız</p> 
          <p className='adres-text'>Təhsil Modeli</p>
          <p className='adres-text'>İnstruktorlar</p>
        </div>
        <div>
          <h3 className='adres-titel'>
          Kurslar
          </h3>
          <p className='adres-text'>Front-End</p> 
          <p className='adres-text'>Data Analitikası</p>
          <p className='adres-text'>Mobil Flutter </p> 
          <p className='adres-text'>UX/UI Dizayn</p>
          <p className='adres-text'>Back End C#</p> 
          <p className='adres-text'>Mobil Kotlin</p>
          <p className='adres-text'>Back End Java</p> 
          <p className='adres-text'>Qrafik Dizayn</p>
        </div>
        <div>
          <h3 className='adres-titel'>
          Sosial Media
          </h3>
          <p className='adres-text'>Instagram</p> 
          <p className='adres-text'>Linkedin</p>
          <p className='adres-text'>Facebook</p> 
          <p className='adres-text'>Behance</p>
        </div>

      </div>
      <div className='footer-bottom'>
        <p>2023 Bütün hüquqları Software Village tərəfindən qorunur</p>
      </div>
    </div>
  )
}

export default Footer
