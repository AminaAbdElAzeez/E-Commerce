import './Support.css'
import Img1 from '../../Assets/support-1-min.webp'
import Img2 from '../../Assets/support-2-min.webp'
import Img3 from '../../Assets/support-3 (1)-min.webp'
import Img4 from '../../Assets/support-4-min-ezgif.com-jpg-to-webp-converter.webp'
import Img5 from '../../Assets/support-5-min-ezgif.com-png-to-webp-converter.webp'



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
