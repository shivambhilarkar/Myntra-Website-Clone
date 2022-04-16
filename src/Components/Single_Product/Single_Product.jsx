import { Link, useLocation } from 'react-router-dom';
import './Single_Product.css'
const Single_Product = (product) => {
    // props
    let title = product.title;
    let subtitle = product.subtitle;
    let main_img = product.main_img;
    let sub_images = product.sub_images;
    let price = product.price;
    let description = product.description;
    let rating = product.rating;


    


    return (  

        <>
            <Link to={{
                pathname: "/shirt",
                state: { 
                    title: title,
                    subtitle: subtitle,
                    main_img: main_img,
                    sub_images: sub_images,
                    price: price,
                    description: description,
                    rating: rating
                }
               
            }}
            
                // title={title}
                // subtitle={subtitle}
                // sub_images={sub_images}
                // price={price}
                // description={description}
                // rating = {rating}

            >
            <div className="single_product">

                <div className="single_img">
                    <img src= {main_img} alt="" />
                    <div className="wishlist_container">
                        <input type="button" value="WISHLIST" id='wishlist'/>
                    </div>
                </div>


                {/* props passing */}
                <h3 id='name_product'>  { title }</h3> 
                <h4 id='name2_product'>  { subtitle }</h4>


                <div className="pricing">
                    <h4>Rs: { price}</h4>
                    <h4> <s> Rs: 1000 </s></h4>
                    <h4> 10% OFF</h4>
                </div>



                </div>
                </Link>
        
        
        </>
    );
}
 
export default Single_Product;