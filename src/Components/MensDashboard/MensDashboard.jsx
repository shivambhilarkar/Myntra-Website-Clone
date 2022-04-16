import { Link } from 'react-router-dom';
import './MensDashboard.css'
const MensDashboard = () => {
    return ( 
        <>

            <div className="men_header_container">
                <img src="./ImagesUpdated/mandashboard/dash1.jpg" alt="" />
            </div>

            <h3>Explore top Brands</h3>
            <div className="men_brands_container">
                <img src="./ImagesUpdated/mandashboard/brands/fitnesscollections.webp" alt="" />
                <img src="./ImagesUpdated/mandashboard/brands/hrx.webp" alt="" />
                <img src="./ImagesUpdated/mandashboard/brands/jackjones.webp" alt="" />
                <img src="./ImagesUpdated/mandashboard/brands/levis.webp" alt="" />
                <img src="./ImagesUpdated/mandashboard/brands/roadster.webp" alt="" />
            </div>

            <h3>CATEGORIES TO BAG</h3>
            <div className="men_cat_container">
                <Link to ="/categoriesdashboard">
                    <img src="./ImagesUpdated/mandashboard/categores/tshirtscat.webp" alt="" />
                </Link>
                
                <Link to ="/categoriesdashboard">
                    <img src="./ImagesUpdated/mandashboard/categores/cat1.webp" alt="" />
                </Link>

                <img src="./ImagesUpdated/mandashboard/categores/infantcat.webp" alt="" />
                <img src="./ImagesUpdated/mandashboard/categores/jeanscat.webp" alt="" />
                <img src="./ImagesUpdated/mandashboard/categores/shoescat.webp" alt="" />
                <img src="./ImagesUpdated/mandashboard/categores/shortscat.webp" alt="" />
            </div>

            <div className="men_header_container2">
                <img src="./ImagesUpdated/mandashboard/dash2.webp" alt="" />
            </div>

        
        </>
     );
}
 
export default MensDashboard;