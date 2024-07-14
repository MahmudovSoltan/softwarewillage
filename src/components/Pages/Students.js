import React from 'react'
import student1 from '../imge/student-1.png'
import student2 from '../imge/student-2.png'
import student3 from '../imge/student-3.png'
import student4 from '../imge/student-4.png'
function Students() {
  return (
    <div className='container'>
        <h2 className='content-header'>
        Uğurlu <span> Məzunlar</span>
            </h2>
            <br/>
            <br/>
            <div className='students-comments'>
          <div className='student-comment'>
            <img src={student1}/>
            <h3 className='text-dark'>Tələbə adı</h3>
            <p className='text-dark' >Proqram adı</p>

          </div>
          <div className='student-comment'>
            <img src={student2}/>
            <h3 className='text-dark'>Tələbə adı</h3>
            <p className='text-dark'>Proqram adı</p>

          </div>
          <div className='student-comment'>
            <img src={student3}/>
            <h3 className='text-dark'>Tələbə adı</h3>
            <p className='text-dark'>Proqram adı</p>

          </div>
          <div className='student-comment'>
            <img src={student4}/>
            <h3 className='text-dark'>Tələbə adı</h3>
            <p className='text-dark'>Proqram adı</p>

          </div>

       </div>
       <br/>
       <br/>
            <div className='students-comments'>
          <div className='student-comment'>
            <img src={student1}/>
            <h3 className='text-dark'>Tələbə adı</h3>
            <p className='text-dark' >Proqram adı</p>

          </div>
          <div className='student-comment'>
            <img src={student2}/>
            <h3 className='text-dark'>Tələbə adı</h3>
            <p className='text-dark'>Proqram adı</p>

          </div>
          <div className='student-comment'>
            <img src={student3}/>
            <h3 className='text-dark'>Tələbə adı</h3>
            <p className='text-dark'>Proqram adı</p>

          </div>
          <div className='student-comment'>
            <img src={student4}/>
            <h3 className='text-dark'>Tələbə adı</h3>
            <p className='text-dark'>Proqram adı</p>

          </div>

       </div>
    </div>
  )
}

export default Students
