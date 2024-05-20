import 'bulma/css/bulma.css'
import { useState } from 'react'

import './App.css'
import Course from './Course'
import Angular from './images/angular.jpg'
import Boostrap5 from './images/bootstrap5.png'
import C from './images/ccsharp.png'
import WEB from './images/kompleweb.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="hero is-warning">
        <div className="hero-body">
          <p className="title">Courses</p>
        </div>
      </section>


      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column'>
              <Course image={Angular} title='Angular' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni mollitia numquam enim eius nemo blanditiis vero in! Fugit, doloribus.' />
            </div>
            <div className='column'>
              <Course image={Boostrap5} title='Boostrap 5' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni mollitia numquam enim eius nemo blanditiis vero in! Fugit, doloribus.' />
            </div>
            <div className='column'>
              <Course image={C} title='Web' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni mollitia numquam enim eius nemo blanditiis vero in! Fugit, doloribus.' />
            </div>
            <div className='column'>
              <Course image={WEB} title='C/C#' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni mollitia numquam enim eius nemo blanditiis vero in! Fugit, doloribus.' />
            </div>
          </div>
        </section>

      </div>





    </>
  )
}

export default App
