import BlogContent from '../../Components/BlogContent/BlogContent'
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle'
import Particle from '../../Components/Particle/Particle'

function Blog () {
    return (
        <section className='blog' style={{padding:"120px 0px 60px 0px"}}>
            <Particle/>
            <HeadingTitle title={"our blog"}/>
            <BlogContent/>
        </section>
    )
}

export default Blog