import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import bootcamp from '../imge/Bootcamp2.png'
import '../css/Bootcamp.css'
import { LuCalendarDays } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { PiUserPlusLight } from "react-icons/pi";
import { PiGraduationCap } from "react-icons/pi";
import { BiSolidRightArrow } from "react-icons/bi";
import photo from '../imge/Photo.png'
import icon from '../imge/icon.png'
import noutbuk from '../imge/noutbuk.png'
import photo1 from '../imge/photo1.png'
function Boootcamp() {
  return (
    <div>
     <section className='section-bootcamp'>
        <div className='container bootcamp'>
            <div className='bootcamp-left'>
           <h2>
           UX/UI Dizayn Bootcamp
           </h2>
           <p>
           21-ci əsrin ən perspektivli sahələrindən biri kimi göstərilən UX&UI dizayn sahəsinə olan ehtiyac günü gündən ölkəmizdə də artmaqdadır. Sahənin mütəxəssisləri təkcə peşəkar dizayner yox, həm də yaxşı araşdırmaçıdır. UX&UI mütəxəssisləri əsas istehlakçı davranışlarını analiz edərək, istifadəçi təcrübəsini yaxşılaşdıran həllər yaradır. Belə olduqda 
           insanların həyatını asanlaşdırmaqla yanaşı, biznes təyinatlı rəqəmsal məhsulların inkişaf etdirilməsinə imkan verir.
           </p>
           <button>
            Kursa qosul <GoArrowUpRight/>
           </button>
            </div>
            <div className='bootcamp-right'>
                  <img src = {bootcamp}/>
            </div>

        </div>
     </section>
     <div className=' date-items'>

<div className='container d-f'>
<div className='date-item'>
    <span className='date-item-icon' ><LuCalendarDays/></span>
    <span className='date-item-text'>Son tarix</span>

</div>
<div className='date-item'>
    <span className='date-item-icon' ><GoClock/></span>
    <span className='date-item-text'>Təhsil müddəti</span>

</div>
<div className='date-item'>
    <span className='date-item-icon' ><PiUserPlusLight/></span>
    <span className='date-item-text'>Boş yerlərin sayı</span>

</div>
<div className='date-item'>
    <span className='date-item-icon' ><PiGraduationCap/></span>
    <span className='date-item-text'>Təhsil formatı</span>

</div>
</div>

     </div>
     <div className='container'>
        <h2 className='title'>
        Niyə <span> UX/UI Dizayn </span>
        </h2>
        <p className='text'>
        Bu gün qlobal miqyasda çox axtarılan peşələrdən biri olan UX/UI Design, ilk növbədə, insanların gündəlik  təcrübələri ilə məşğul olma üsullarını təkmilləşdirməyə və sadələşdirməyə yönəlib. Nəticə etibarilə, bu, ətrafımızda həm rəqəmsal, həm də ənənəvi məhsulların, xidmətlərin və müəssisələrin irəliləməsinə birbaşa və faydalı təsirə çevrilir. Beləliklə, bir UX / UI Dizaynerinin əsas məsuliyyəti istifadəçini dizayn prosesində ön sıraya yerləşdirməkdir. Bu, istifadəçinin bizneslə qarşılıqlı əlaqəsi ilə bağlı hərtərəfli araşdırmaların aparılmasını, onların qarşılaşdıqları problemlərin dərk edilməsini, onların təkliflərinə diqqət yetirilməsini və nəticədə müxtəlif vasitələrlə istifadəçi təcrübəsinin təkmilləşdirilməsini nəzərdə tutur.
        <br/>
        <br/>

Bu mülahizələri nəzərə alaraq, Software Village-də UX/UI Dizayn kurikulumu qabaqcıl qlobal standartlar və praktiki
layihələr əsasında hazırlanmışdır.
        </p>
        <div className='work-items'>
            <div className='work-item'>
                <div className='item-number'>1</div>
                <h3>
                Yerli ve qlobal şirkətlərdə iş elanları
                </h3>
                <p className='work-item-text'>
                Yerli və xarici şirkətlərdə ən çox işçi axtaranlardan biridir. Toplam <strong>25 min</strong> üstündə olan vakansiyalara 
                </p>
            </div>
            <div className='work-item'>
                <div className='item-number'>2</div>
                <h3>
                Yüksək və artan gəlirli 
                iş sahəsi 
                </h3>
                <p>
                Ölkəmizdə minimum <strong>700 azn</strong>, Qlobalda isə <strong> 10 min $ </strong>başlayan maaş. Bu sahə gələcəkdə maaş baxımından daha çox qazanc əldə edəcək sahədir. 
                </p>
            </div>
            <div className='work-item'>
                <div className='item-number'>3</div>
                <h3>
                Hər yerdə  oflayn, onlayn və freelancer işləmək
                </h3>
                <p >
                İndi şirkətlər istifadəçi mərkəzli işləyir. Bununlada bizlər <strong>bank, dövlət müəssisələri, agentliklər, startaplar, IT  şirkətlərində</strong> işləyə bilərik.
                </p>
            </div>

        </div>
        <div className='ask-us-left'>
                <h2>
                Tədris <span>mövzuları</span>
                </h2> </div>
                
                <br/>
                <div className='topic'>
                    <h3>Mövzu 1</h3>
                    <div>
                    <GoArrowUpRight/>
                    </div>

                </div>
                <div className='topic'>
                    <h3>Mövzu 2</h3>
                    <div>
                    <GoArrowUpRight/>
                    </div>

                </div>
                <div className='topic'>
                    <h3>Mövzu 3</h3>
                    <div>
                    <GoArrowUpRight/>
                    </div>

                </div>
                <div className='topic'>
                    <h3>Mövzu 4</h3>
                    <div>
                    <GoArrowUpRight/>
                    </div>

                </div>
                <div className='topic'>
                    <h3>Mövzu 5</h3>
                    <div>
                    <GoArrowUpRight/>
                    </div>

                </div>
                <div className='topic'>
                    <h3>Mövzu 6</h3>
                    <div>
                    <GoArrowUpRight/>
                    </div>

                </div>
                <div className='topic'>
                    <h3>Mövzu 7</h3>
                    <div>
                    <GoArrowUpRight/>
                    </div>

                </div>
                <div className='ask-us-left'>
                <h2>
                İnstruktorları <span>tanı</span>
                </h2> </div>
                <br/>
                <div className='our-article'>
          <img src={photo}/>

          <div><button>UX/UI İnstruktor</button></div>
          <h3>
          Təlimçinin adı
          </h3>



        </div>
                </div>
          <section className='popular-categories'>
   <div className='container d-f'>
    <p className='join-text'>
    Proqramda iştirak etmək istəyirsən? Əla! 
    Ətraflı məlumat əldə etməklə bağlı randevu almaq üçün
    </p>
   <button className='btn'>
            Kursa qosul <span><GoArrowUpRight/></span>
           </button>
   </div>

     </section>
     <br/>
     <br/>
     <div className='container'>
        <div className='courses-title'>
          <h2>Digər<span> kurslarımız</span></h2>
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
      <br/>
      <br/>
    </div>
  )
}

export default Boootcamp
