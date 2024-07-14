import React from 'react'
import img1 from '../imge/Rectangle 8743.png'
import img2 from '../imge/image 1.png'
import img3 from '../imge/arcticons_linkedin-learning.png'
import img4 from '../imge/pepicons-pencil_people.png'
import img5 from '../imge/ion_man-outline.png'

function Education() {
  return (
    <div className='container'>
  
  <div className='about-content'>
            <img src = {img1}/>
            <p>
            <span>Software Village</span> təhsil modelində tələbələr nəzəri biliklər öyrənir və bunu təcrübə keçdiyi müddətdə təkrar istifadə etməsi həmin biliklərin daha yadda qalan və faydalı hala gətirir. Bununla da dərslər zamanı tələbə daha effektiv qavrama ilə qarşılaşır. Təcrübə keçdiyi müddətdə real iş mühitinə görə hazırlanan proseslərlə onlar karyeralarına tam hazır olurlar. Sonda tələbələr yekun layihə işi təqdim edərək məzun olurlar. Final layihə zamanı tələbələr real praktika etməklə uğurlu karyera üçün ilk addımları atırlar. Bizimlə karyerasında yeniliklər edən tələbələr qısa müddətdə qarşılığını görür. 
            </p>
        </div>
        <h2 className='content-header'>
        Tədris <span>Modelimiz</span>
            </h2>
            <div className='education-model-items'>
              <div className='education-model-left'>
                <div className='education-item'>
                <div className='education-number'>
                  1
                </div>
                <div>
                  <h4>
                  Praktiki tədris mühiti
                  </h4>
                  <p>
                  Tədris etdiyimiz bütün sahələrdə tədris boyunca tələbələri praktika etməyə yönəldirik. Bizim tədris planımızda praktika çöx önəmli yer tutur. Biz bunula tələbə real iş mühitində çətinlik çəkməməsi üçün çalışırıq.
                  </p>
                </div>
    </div>  
                <div className='education-item'>
                <div className='education-number'>
                  2
                </div>
                <div>
                  <h4>
                  Bootcamp məntiqi
                  </h4>
                  <p>
                  Bootcamplarımız uzun vaxt deyil qısa zamanda tələbələrə ən vacib və ən aktual tərəflərini öyrənərək qısa zamanda hazır işçi dərəcəsinə çatırlar.  Tələbələr tədris zamanı real layihələr üzərində işlədikləri üçün topladıqları biliklər də lazımlı və aktual olur.
                  </p>
                </div>
    </div>  
                <div className='education-item'>
                <div className='education-number'>
                  3
                </div>
                <div>
                  <h4>
                  Mentor sistemi
                  </h4>
                  <p>
                  Bizim mentorlar vasitəsilə istənilən mövzuda mentor dəstəyini göstəririk. Mentorlar bu sahədə müəyyən bilik və bacarıqlarını inkişaf etdirmək üçün lazımdır. Mentorlarla əlavə görüşlərin təşkili mümkündür.
                  </p>
                </div>
    </div>  
                <div className='education-item'>
                <div className='education-number'>
                  4
                </div>
                <div>
                  <h4>
                  Final Layihə
                  </h4>
                  <p>
                  Tədris müddəti boyunca öyrəndiklərini və praktika etdiklərini artıq dəstək olmadan tələbələr hazırlayır və təqdim etmə mərasimi vaxtı bunu nümayiş etdirmiş olur. Final layihə sənin real gücünü göstərən layihədir. 
                  </p>
                </div>
    </div>  
              </div>
              <div>
                <img src = {img2}/>

              </div>

            </div>
              <h2 className='content-header'>
        Tədris <span>Formaları</span>
            </h2>
            <div className='education-bottom'>
              <div className='education-bottom-item'>
                <img src={img3}/>
                <h4>
                Online
                </h4>
                <p>
                Tədris boyunca tələbə istədiyi məkandan dərslərə qoşula bilir və rahatlıqla suallarını verir. Burada  ən böyük üstünlük dərslərin record olunmasıdır.
                </p>

              </div>
              <div className='education-bottom-item'>
                <img src={img4}/>
                <h4>
                Oflyan
                </h4>
                <p>
                Oflayn rejimdə tələbələr dərsləri qrup işi və fərdi tapşırıqlar edərək daha yaxşı mənimsəyir. Bu metodla tələbə evə getdikdə recordlara baxa bilir.
                </p>

              </div>
              <div className='education-bottom-item'>
                <img src={img5}/>
                <h4>
                Fərdi
                </h4>
                <p>
                Bu tədris formasında məllimlə birə bir təmasda olduğu üçün məllim və tələbənin daha çox vaxtı və daha çox praktika etmə şansı olur
                </p>

              </div>

            </div>
    </div>
  )
}

export default Education
