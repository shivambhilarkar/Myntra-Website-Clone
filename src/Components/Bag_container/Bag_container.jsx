import './Bag_container.css'
import Single_Product_ from './Single_Product_';
const Bag_container = () => {


    let popup = () => {
        document.getElementById('bag_main_cont').style.animation = "slideup 2s forwards"
    }

    // let popdown = () => {
    //     document.getElementById('bag_main_cont').style.animation = 'slide 2s forwards'
    // }



    return (  
        <>

            <div className="bag_main_container" id='bag_main_cont'>

                <div className="nav_container">
                    <input type="button" value="BAG" />
                    <input type="button" value="ADDRESS" />
                    <input type="button" value="PAYMENT" />
                    {/* <input type="button" value= "❌"/> */}

                </div>


                <div className="bag_product_container">
{/* 
                    <div className="bag_single_product">
                        <div className="bag_image">
                            <img src="./Images/m1.png" alt="" />
                        </div>
                        <div className="bag_product_information">
                            <h4 id="product_name">HRX by Hruthik roshan</h4>
                            <h4 id="product_desc">Men's yellow t shirt</h4>
                            <div className="prices">
                                <h3 id="price">Rs :500</h3>
                                <h3 id="cut_price">Rs: 1000</h3>
                                <h3 id='offer'>( 10% OFF )</h3>
                            </div>
                        </div>
                        <input type="button" value="❌" id='crossbtn'/>
                    </div> */}


                    <Single_Product_ />
                    <Single_Product_/>
                    <Single_Product_/>
                    

                </div>

                <div className="bottom_btn_container">
                      <input type="button" value="PLACE ORDER" id='orderbtn' />
                        <input type="button" value="CANCEL" id='cancelbtn' onClick={popup}/>
                </div>
              


            </div>
            

        
        </>
    );
}
 
export default Bag_container;

