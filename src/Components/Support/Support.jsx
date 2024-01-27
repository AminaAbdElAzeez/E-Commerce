import './Support.css'
import Img1 from '../../Assets/support-1.png'
import Img2 from '../../Assets/support-2.png'
import Img3 from '../../Assets/support-3 (1).png'
import Img4 from '../../Assets/support-4.png'
import Img5 from '../../Assets/support-5.png'



const Support = () => {
  return (
    <div className='support'>
        <div className='container'>
            <div className='support-wrapper'>
                <div className='support-img'>
                    <img src={Img1} alt='support-img'/>
                </div>
                <div className='support-img'>
                    <img src={Img2} alt='support-img'/>
                </div>
                <div className='support-img'>
                    <img src={Img3} alt='support-img'/>
                </div>
                <div className='support-img'>
                    <img src={Img4} alt='support-img'/>
                </div>
                <div className='support-img'>
                    <img src={Img5} alt='support-img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support
