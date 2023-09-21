import React from 'react'
import '../Styles/HomeMain.css'
import { useNavigate } from 'react-router-dom'

const HomeMain = () => {

    const navigate = useNavigate()
  return (
    <div className='container-c'>
        <h1 className='title-main-m'>iBOMMA</h1>
        <div >
            <h3 className='subtitle'> 100% Telugu Entertainment</h3>
        </div>
        <button className ='enter-button' onClick={() => navigate('SignIn')}>ENTER</button>
        <div>
        <p className="para">
          Watch iBOMMA Telugu movies online in HD quality.
          <br/>
          Exclusively designed for smartphones, tablets, PC's.
        </p>
      </div>
    </div>
  )
}

export default HomeMain;