import React from 'react'
import  '../css/Footer.css'

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
              

            </div>

        </div>

      </section>
    </div>
  )
}

export default Footer
