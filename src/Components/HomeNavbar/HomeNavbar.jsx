import { Link } from 'react-router-dom';
import Bag_container from '../Bag_container/Bag_container';
import './HomeNavbar.css'
// import homeImg1 from "../Images/home Img1.png";

const HomeNavbar = () => {

    let popdown = () => {
        document.getElementById('bag_main_cont').style.animation = 'slide 2s forwards'
    }


    return (  
        <>
            <div className="home_navbar_div">
                    <Link to ="/">

                    <div className="home_navbar_left">
                        <img src={'./Images/myntraLogo.png'} alt="this is image" />
                    </div>
                    </Link>
                    

                <div className="home_navbar_mid">
                    <ul id='navigation_btns'>
                        <li>
                            <span>
                                <Link to= "/mendashboard">
                                    <input type="button" value="Man" className='navbtns' />
                                    </Link>
                            </span>
                        </li>
                        <li>
                            <span>
                                <input type="button" value="Women" className='navbtns' />
                            </span>
                        </li>
                        <li>
                            <span>
                                <input type="button" value="Kids" className='navbtns'/>
                            </span>
                        </li>
                        <li>
                            <span>
                                <input type="button" value="Home & Living" className='navbtns'/>
                            </span>
                        </li>
                        <li>
                            <span>
                                <input type="button" value="Beauty" className='navbtns'/>
                            </span>
                        </li>
                    
                    </ul>


                </div>

                <div className="home_navbar_right">
                    <ul>
                        <li>
                            <div id='searchspan'>
                                🔍
                                {/* "\&#x1F50D" */}
                                <input type="search" id='searchbar' placeholder='Search' />
                            </div>
                        </li>
                         <li>
                            <span>
                                <input type="button" value="Profile" />
                            </span>
                        </li>
                         <li>
                            <span>
                                <input type="button" value= "wishlist" />
                            </span>
                        </li>
                         <li>
                            <span>
                                <input type="button" value="bag" id='bag_btn' onClick={popdown}/>
                            </span>
                        </li>
                    </ul>

                </div>
            </div>
        <Bag_container />
        
        
        </>
    );
}
 
export default HomeNavbar;