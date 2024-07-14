import React from 'react'
import  '../css/Karyera.css'
import img2 from '../imge/image 1.png'
import img3 from '../imge/arcticons_linkedin-learning.png'
import img4 from '../imge/pepicons-pencil_people.png'
import img5 from '../imge/ion_man-outline.png'
function Karyera() {
  return (
    <div>
     <div className='career-section'>
     <h2>
     Karyeranıza 
     dəstək
     </h2>
     </div>
     <div className='carier-titel container'>
      <h2>Karyera <span>Mərkəzi</span></h2>
      <p>
      Karyera Mərkəzi məzunların potensialına uyğun işlə təmin olunması üçün yaradılan bir bölmədir. Arzuladıqları peşə üzrə işləmək
istəyən tələbələr karyera yolunda irəliləyərkən qarşılaşdıqları çətinliklərlə və eyni zamanda iş axtarışı məsələləri ilə bağlı ehtiyac 
duyulduqda Karyera Mərkəzindən dəstək ala bilərlər.
      </p>
      <div className='education-model-items'>
              <div className='education-model-left'>
                <div className='education-item'>
                <div className='education-number'>
                  1
                </div>
                <div>
                  <h4>
                  Peşakar CV və Portfolio
                  </h4>
                  <p>
                  Tədris müddətinin sonunda sizlər Karyera mərkəzi sayəsində artıq peşakar CV hazırlayacaq və iş üçün uyğun olan portfolionu əldə edəcəksiz. Tək-tək hər tələbəmizə yetərli diqqət ayrılır və onlarla karyera söhbətləri edilir.
                  </p>
                </div>
    </div>  
                <div className='education-item'>
                <div className='education-number'>
                  2
                </div>
                <div>
                  <h4>
                  Təcrübə imkanı
                  </h4>
                  <p>
                  Tədris müddəti boyunca və sonrasında tələbələrə uyğun olduqları təcrübə proqramları axtarılır. Bu təcrübə proqramları boyunca tələbələrlə daimi əlaqə saxlayaraq nəzarət edirik. Bununlada hər bir tələbəmizi karyera yolunda izləyirik.
                  </p>
                </div>
    </div>  
                <div className='education-item'>
                <div className='education-number'>
                  3
                </div>
                <div>
                  <h4>
                  Beynəlxalq diplom
                  </h4>
                  <p>
                  Tədris müddəti bitdikdə uğurlu olan tələbələrimizə beynəlxalq diplom verilir. Bu diplomla tələbələr istədikləri iş yerlərinə rahatlıqla müraciət edə və qəbul ola biləcəklər.
                  </p>
                </div>
    </div>  
                <div className='education-item'>
                <div className='education-number'>
                  4
                </div>
                <div>
                  <h4>
                  Vakasiyalar
                  </h4>
                  <p>
                  Tədris müddəti və bitdikdən sonra daimi yenilənən vakansiyalarla tələbələrimizi məlumatlandırırıq. Bəzi vakansiyalar sırf bizim tələbələr üçün olduğundan onların digər insanların görmə ehtimalı olmur. Beləliklə tələbələr rahatlıqla müraciət edəcəyi çoxlu vakansiyalarla təmin olunur.
                  </p>
                </div>
    </div>  
              </div>
              <div>
                <img src = {img2}/>

              </div>

            </div>
            <div className='education-bottom'>
              <div className='education-bottom-item'>
                <img src={img3}/>
                <h4>
                Təqdimat bacarığı
                </h4>
                <p>
                Tələbələrə düzgün təqdimat etmə və təqdimat zamanı düzgün danışıq qaydaları öyrədilir. Bu tələbələrdə təqdim etmə bacarığına artırır.
                </p>

              </div>
              <div className='education-bottom-item'>
                <img src={img4}/>
                <h4>
                İş axtarma dəstəyi
                </h4>
                <p>
                Tələbələrimizə özlərinə uyğun vakansiyaları tapmaqda və müraciət etmə qaydalarını izah edirik ki, iş tapmaqda çətinlik yaranmasın.
                </p>

              </div>
              <div className='education-bottom-item'>
                <img src={img5}/>
                <h4>
                Müsahibəyə hazırlıq
                </h4>
                <p>
                Tələbələrimizə fərdi şəkildə yanaşaraq onları müsahibə zamanı yaranacaq bütün məsələlərə düzgün cavab verməyini təmin edirik.
                </p>

              </div>

            </div>
            <br/>
            <br/>

     </div>
    </div>
  )
}

export default Karyera
