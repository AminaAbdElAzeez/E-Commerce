import './HeadingTitle.css';

const HeadingTitle = ({title}) => {
  return (
    <div className='heading-title'>
        <div className='container'>
            <h2 className='heading-sub-title'>{title}</h2>
        </div>
    </div>
  )
}

export default HeadingTitle
