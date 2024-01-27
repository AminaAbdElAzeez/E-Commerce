import React from 'react';
import './BlogContent.css';
import Img from '../../Assets/intro.gif';
import Img2 from '../../Assets/intro1.gif';
import Img3 from '../../Assets/blog2.gif';


function BlogContent() {
    return (
        <div className='blog-content'>
            <div className='container'>
                <div className='left'>
                    <div className='box'>
                        <div className='img'>
                            <img src={Img} alt='blog'/>
                        </div>
                        <div className='text'>
                            <h6 className='sub-title'>
                                <i className="bi bi-clock-fill icon"></i>
                                10 Mar 2021
                            </h6>
                            <h2>Free Shopping...</h2>
                            <p className='desc'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend .
                            </p>
                            <hr/>
                            <div className='bottom'>
                                <ul>
                                    <li>
                                        <i className="bi bi-person-fill icon"></i>
                                        by Admin
                                    </li>
                                    <li>
                                        <i className="bi bi-hand-thumbs-up-fill icon"></i>
                                        63
                                    </li>
                                    <li>
                                        <i className="bi bi-chat-left-fill icon"></i>
                                        12 Comments
                                    </li>
                                </ul>
                                <a href='/#'>
                                    Read More 
                                    <i className="bi bi-chevron-double-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img'>
                            <img src={Img2} alt='blog'/>
                        </div>
                        <div className='text'>
                            <h6 className='sub-title'>
                                <i className="bi bi-clock-fill icon"></i>
                                10 Mar 2021
                            </h6>
                            <h2>7 Days Return...</h2>
                            <p className='desc'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend .
                            </p>
                            <hr/>
                            <div className='bottom'>
                                <ul>
                                    <li>
                                        <i className="bi bi-person-fill icon"></i>
                                        by Admin 
                                    </li>
                                    <li>
                                        <i className="bi bi-hand-thumbs-up-fill icon"></i>
                                        63 
                                    </li>
                                    <li>
                                        <i className="bi bi-chat-left-fill icon"></i>
                                        12 Comments 
                                    </li>
                                </ul>
                                <a href='/#'>Read More <i className="bi bi-chevron-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img'>
                            <img src={Img3} alt='blog'/>
                        </div>
                        <div className='text'>
                            <h6 className='sub-title'>
                                <i className="bi bi-clock-fill icon"></i>
                                10 Mar 2021
                            </h6>
                            <h2>Gift Card...</h2>
                            <p className='desc'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend .
                            </p>
                            <hr/>
                            <div className='bottom'>
                                <ul>
                                    <li>
                                        <i className="bi bi-person-fill icon"></i>
                                        by Admin 
                                    </li>
                                    <li>
                                        <i className="bi bi-hand-thumbs-up-fill icon"></i>
                                        63 
                                    </li>
                                    <li>
                                        <i className="bi bi-chat-left-fill icon"></i>
                                        12 Comments 
                                    </li>
                                </ul>
                                <a href='/#'>Read More <i className="bi bi-chevron-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent