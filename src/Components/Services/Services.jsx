import './Services.css'
const Services = () => {
  return (
    <div className='services'>
        <div className='container'>
            <div className='services-wrapper'>
                <div className='service-item'>
                    <i className="bi bi-truck"></i>
                    <h4>free shipping</h4>
                </div>
                <div className='service-item'>
                    <i className="bi bi-coin"></i>
                    <h4>money back</h4>
                </div>
                <div className='service-item'>
                    <i className="bi bi-lock-fill"></i>
                    <h4>100% secure</h4>
                </div>
                <div className='service-item'>
                    <i className="bi bi-gift-fill"></i>
                    <h4>gift card</h4>
                </div>
                <div className='service-item'>
                    <i className="bi bi-calendar3"></i>
                    <h4>7 days return</h4>
                </div>
                <div className='service-item'>
                    <i className="bi bi-chat-dots-fill"></i>
                    <h4>contact</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
