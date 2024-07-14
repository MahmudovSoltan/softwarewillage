import React from 'react'
import img1 from '../imge/img1.png'
import img2 from '../imge/img2.png'
import img3 from '../imge/img3.png'
import img4 from '../imge/img4.png'
import img5 from '../imge/img5.png'
import settingicon from '../imge/pro.png'
import booksIcon from '../imge/educa.png'

function About() {
  return (
    <div className='container'>
        <div className='about-content'>
            <img src = {img1}/>
            <p>
            <span>Software Village</span> olaraq yarandığımız andan etibarən
tədris etdiyimiz sahələrə yeniliklər gətiririk. Güclü
təhsil modelimizlə tələbələrə ilk gündən iş həyatına
hazırlayırıq. Bizim əsas düşüncəmiz tələblərə cavab
verəcək mütəxəssislər yetişdirməkdir. Ailəmizdəki 
insanlar daim öz üzərində işləyən, yeniliklərə 
fokuslanan və tələbələrini mükəmməl vəziyyət üçün 
hazırlayan insanlardan təşkil olunub. Tələbələri tam
düşünən və onları sadəcə öyrətməyə fokuslanaraq 
illərdir iləriləyirik. Bugünə qədər bizi seçənlər bizimlə
olmaqdan məmnun və müsbət vəziyyətdədirlər.
            </p>
        </div>
        <div className='content-items'>
            <div className='content-item'>
              <img src = {settingicon}/>
              <h5>
              Produktiv ortam
              </h5>
              <p>
              Dərsdən əlavə mentorluq sistemindən tutmuş, brainstorm 
zonalarına qədər – bütün detallar vaxtını layiqincə yatırım 
etmənə fokuslanıb.
              </p>

            </div>
            <div className='content-item'>
              <img src = {booksIcon}/>
              <h5>
              Xüsusi tədris
              </h5>
              <p>
              Məqsəd səni yalnız lokal bazara hazırlamaq deyil. Tədris 
materialları ilə əldə edəcəyin biliklər və təcrübəli 
mütəxəssislər hətta qlobal imkanlar belə özü səni tapacaq.
              </p>

            </div>

        </div>
            <h2 className='content-header'>
            Bizim <span>Fərqimiz</span>
            </h2>
            <div className='about-content'>
            <img src = {img2}/>
                <div className='content-text'>
                    <h3 className='text-left'>
                    Təcrübəli instruktorlar
                    </h3>
            <p className='text-left'>Tədris edəcək instruktorlarımız həm yerli həm də xarici 
bazarda iş prosesində iştirak edir. Bu sahənin yeniliklərini bilir 
və tətbiq edir. Onlar sizi sırf bazar üçün tələb olunan bilik və 
bacarıqlarla təmin edir. 
            </p>

                </div>
         
        </div>
            <div className='about-content'>
                <div className='content-text'>
                    <h3>
                    Tədris metodumuz
                    </h3>
            <p>Bütün tədris sahələrində istifadə olunan metodlar yerli və ya xarici bazar üçün tətbiq oluna bilər. Bu tədris metodunda əsas hədəf tələbələri təkcə yerli şirkətlərə deyil həm də xarici bazar üçün uyğun təhsili verməkdir. Tədris metodumuzda öyrədilən hər bir detal sizin gələcək üçün uğurlu bir işçi olmağınız üçündür. 
            </p>

                </div>
            <img src = {img3}/>
        </div>
            <div className='about-content'>
            <img src = {img4}/>
                <div className='content-text'>
                    <h3 className='text-left'>
                    Karyera mərkəzi
                    </h3>
            <p className='text-left'>Tədrisi bitirdikdən sonra sizinlə daim əlaqəda olan karyera mərkəzimizlə sizləri iş sferasına hazırlamaq və uyğun vakansiyaları sizlərə yönəltməkdir. Bu mərkəz sizlərə iş mühitinə hazırlamaqla qalmayıb işdə yaranan problemlərdə necə reaksiya verməli olduğunu sizlərə öyrədir. Karyera mərkəzində sizləri uğurlu namizəd üçün hər tərəfli hazır edir.
            </p>

                </div>
     
        </div>
            <div className='about-content'>
                <div className='content-text'>
                    <h3>
                    Mentor sistemi
                    </h3>
            <p>Tədris zamanı keçirilən mövzuları daha yaxşı anlamağınız və tətbiq etməyiniz üçün mentorlarımız sizlərə dəstək olacaq. Öz təcrübələrini sizlərə aşılayaraq sizin real iş mühitində qarşılaşacağınız hadisələrdə və proseslərdə  necə davranmalı olduğunuzu bildirirlər. Real iş mühitində ilkin etməli olduğunuz tapşırıqlarda necə işlər ortaya qoymalı olduğunuzu sizlərə göstərəcəkdir. Bununla bizdə davamlı inkişaf olur.
            </p>

                </div>
            <img src = {img5}/>
        </div>
  
    </div>
  )
}

export default About
