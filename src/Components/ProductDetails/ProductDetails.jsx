import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetails.css'
const ProductDetails = (product) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    


    const location = useLocation();
    const title = location.state.title;
    const subtitle = location.state.subtitle;
    const main_img = location.state.main_img;
    const sub_images = location.state.sub_images;
    const price = location.state.price;
    const description = location.state.description;
    const rating = location.state.rating;

    // console.log(location); //to print the props which is passed from link tag
    // const

    return (  
        <>

            <div className="product_heading_div">
                <h5>Home /Clothing /Men Clothing / Shirt / { title }</h5>

            </div>

            {/* middle part */}
            <div className="product_details_container">
                <div className="product_details_images">

                    <div className="first_row">
                        <img src= {sub_images[0]} alt="" />
                        <img src= {sub_images[1]} alt="" />
                    </div>
                    <div className="second_row">
                        <img src={sub_images[2]} alt="" />
                        <img src={sub_images[3]} alt="" />
                    </div>


                </div>
                <div className="product_details_information">
                    <h6 className='product_short_info'>BRAND : { title}</h6>
                    <h2 className="product_name">  {subtitle}  </h2>



                    <div className="buttons_container">
                        <div className="first_row">
                            <input type="button" id="addtocart" value="Add to Cart"/>
                            <input type="button" id="wishlist" value="Wishlist"/>
                        </div>
                        <div className="second_row">
                            <input type="button" id="buynow" value= "Buy Now"/>
                        </div>
                    </div>
                    <hr />


                    <div className="product_info">
                        <h4>Price : { price}</h4>

                        <h4>Product Details 📃</h4>
                        <h6>In Stock</h6>
                        <h5>Sold Fashion India Pvt Ltd and Delivered by Myntra.</h5>

                        <ul>
                            <li> Care Instructions: Dry Clean Only</li>
                            <li> Fit Type: Regular </li>
                            <li> Shirt Fabric : Net || Shirt Fabric : Net </li>
                            <li> Shirt Color : Pink || Shirt Color : Pink </li>
                            <li> Shirt Flare : 3.4(MTR) || Shirt Length : 32(Inch) </li>
                               
                            <li> Shirt Work : Embroidered || Stitched Type : shirt Full Stitched and
                                Zip Attach</li>
                            <li>Wash Care: Dry clean for the first wash, there after hand wash</li>
                        </ul>
                    </div>
                    <hr />

                    <div className="rating_div">
                        <h4>Ratings : ⭐ ⭐ ⭐ ⭐ ⭐ </h4>
                        <div className="rating_inner_container">
                            <div className="rating_left_part">
                                <h2>4.2</h2>
                                <h6>697 Verified Buyers</h6>
                            </div>

                            <div className="rating_right_part">

                                <span>
                                    <label htmlFor="fivestars">5 ⭐</label>
                                    <meter min="0" max="100" value="80" id='fivestars' > </meter>
                                    <label htmlFor="fivestars">30</label>
                                </span>
                                <br />

                                <span>
                                    <label htmlFor="fourstars">4 ⭐</label>
                                    <meter min="0" max="100" value="90" id='fourstars' > </meter>
                                    <label htmlFor="fourstars">30</label>
                                </span>
                                <br />

                                <span>
                                    <label htmlFor="threestars">3 ⭐</label>
                                    <meter min="0" max="100" value="50" id='threestars' > </meter>
                                    <label htmlFor="threestars">30</label>
                                </span>
                                <br />

                                <span>
                                    <label htmlFor="twostars">2 ⭐</label>
                                    <meter min="0" max="100" value="20" id='twostars' > </meter>
                                    <label htmlFor="twostars">30</label>
                                </span>
                                <br />

                                <span>
                                    <label htmlFor="onestars">1 ⭐</label>
                                    <meter min="0" max="100" value="10" id='onestars' > </meter>
                                    <label htmlFor="onestars">30</label>
                                </span>
                                
                                

                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>

            
            <hr id='middle_line'/>

            {/* product comment reviews */}
            <div className="product_reviews">

                <div className="product_question_container">

                    <div className="have_question">
                        <h1>Have a question</h1>
                        <h6>Find answers in product info, Q&As, reviews</h6>
                        <input type="search" name="question" id="question" placeholder='Type your question here or Keyword' />
                    </div>

                    <h2>Customer questions & answers</h2>
                    <div className="qanda">
                        <span>
                            <li> <b> Question:</b>  Tell me the waist size of this material?</li>
                            <li> <b> Answer:</b>  waist of this lehenga is arroung 42 inch to 43 inch.</li>
                        </span>

                        <span>
                            <li> <b> Question:</b>  Do you have original pic for the same? Also what is the material of dupatta n blouse?</li>
                            <li> <b> Answer:</b>  this is the original photo shoot and you can see the images of the same on web page, fabric of lehenga ,
                                choli and dupatta are all same banarasi silk Jacquard.</li>
                        </span>

                         <span>
                            <li> <b> Question:</b>  is this xxxl size?</li>
                            <li> <b> Answer:</b>  it is free size waist 42 inch</li>
                        </span>

                         <span>
                            <li> <b> Question:</b> How much flair it has?</li>
                            <li> <b> Answer:</b> the flair of lehenga is around 2.5 mtr - 2.6 mtr</li>
                        </span>
                    </div>


                </div>



                <div className="product_review_container">
                    <h2>Customer Rewiews(358)</h2>

                    <div className="single_comment">
                        <p> The quality and look of the product is very nice and elegant but the piece of blouse is small which doesn't fit
                            for some people of a community. I request seller to make blouse cloth available of 1 metre.</p>
                        <input type="button" id='helpful' value="HELPFUL"/>
                        <input type="button" id='report' value="REPORT ABUSE"/>
                        <b>142 people voted</b>
                        <hr />
                    </div>


                     <div className="single_comment">
                        <p> The product is exactly same as in pictures. The quality is great and is full value for money.</p>
                        <input type="button" id='helpful' value="HELPFUL"/>
                        <input type="button" id='report' value="REPORT ABUSE"/>
                        <b>142 people voted</b>
                        <hr />
                    </div>

                    
                     <div className="single_comment">
                        <p> Beautiful lehenga,😍 looks exactly as in the picture, provided with an astar inside. The choli cloth is adequate, work done over it is great. The most beautiful part is the dupatta, it is so beautiful, vibrant colour and very good material used. The work done is ultimate benarsi style. I'm drooling over it.
                            I have bought it for my haldi function, yellow and red combination will look great. Thank you Mansvi fashion and Myntra.</p>
                        <input type="button" id='helpful' value="HELPFUL"/>
                        <input type="button" id='report' value="REPORT ABUSE"/>
                        <b>142 people voted</b>
                        <hr />
                    </div>

                    
                     <div className="single_comment">
                        <p> The color of the lahanga is as shown in the image, but the quality of the Dress is up to the par with the price.
                            But overall It good.</p>
                        <input type="button" id='helpful' value="HELPFUL"/>
                        <input type="button" id='report' value="REPORT ABUSE"/>
                        <b>142 people voted</b>
                        <hr />
                    </div>

                    
                     <div className="single_comment">
                        <p> excellent product, nice lahanga choli, nice color , dupatta length is also very good..
                            packaging is also good, good purchase... 😍😍 wow product</p>
                        <input type="button" id='helpful' value="HELPFUL"/>
                        <input type="button" id='report' value="REPORT ABUSE"/>
                        <b>142 people voted</b>
                        <hr />
                    </div>

                    <input type="button" value="Show More  🔽" id='showmore'/>

                </div>

            
            </div>



        
        </>
    );
}
 
export default ProductDetails;