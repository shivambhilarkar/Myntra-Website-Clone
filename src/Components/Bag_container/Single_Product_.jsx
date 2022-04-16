import './Bag_container.css'

const Single_Product_ = () => {
    return (  
        <>
        
            
                    <div className="bag_single_product">
                        <div className="bag_image">
                            <img src="./Images2/Main_shirt1.webp" alt="" />
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
                    </div>
        
        </>
    );
}
 
export default Single_Product_;