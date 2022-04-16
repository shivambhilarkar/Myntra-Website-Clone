import './Footer.css';

const Footer = () => {
    return ( 
        <>
            
            <div className="footer_container">


                <div className="footer_left">
                    
                    <div className="left_list">
                        <h4>online shopping</h4>
                        <ul>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Beauty</li>
                            <li>Home & Living</li>
                            <li>Gift Cards</li>
                        </ul>

                    </div>
                    <div className="right_list">
                        <h4>useful links</h4>
                        <ul>
                            <li> Contact Us</li>
                            <li>FAQ</li>
                            <li>T&C</li>
                            <li>Terms Of Use</li>
                            <li>Track Orders</li>
                            <li>Shipping</li>
                            <li>Cancellation</li>
                            <li>Returns</li>
                            <li>Whitehat</li>
                            <li>Site Map</li>
                        </ul>
                    </div>


                </div>



                <div className="footer_mid">
                    <h4>Experience Myntra App on mobile</h4>
                    <div className="apps_container">
                        <img src="./Images/appstore.png" alt="" />
                        <img src="./Images/Google.png" alt="" />
                    </div>

                    <h4>Keep in touch</h4>
                    <img src="./Images/keepintouch.jpg" alt="img" id='keepintouch' />

                </div>

                <div className="footer_right">
                </div>

            </div>

            {/* <div className="bottom_extra"></div> */}


        </>
     );
}
 
export default Footer;