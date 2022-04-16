import { Link } from 'react-router-dom';
import Single_Product from '../Single_Product/Single_Product';
import './Categoriesdash.css'
import Filters from './Filters';
import "../../Product_Shirt.json"
import { useEffect, useState } from 'react';




const CategoriesDashboard = () => {
    //to load from top
    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, [])


     let products_json = require("../../Product_Shirt.json");
    let products_array = products_json.All_shirts;
    const [shirt_database, setDatabase] = useState(products_array);
    
    useEffect(() => {
        console.log("shirts are sorted........");
    }, [shirt_database]);




    // logic for sorting ------> get sort value from input box ---------> then apply the custom sorting on object array

    let get_value = () => {
        let value = document.getElementById('sortby').value;
        console.log(value);
        do_sorting(value);
    }

    let do_sorting = (sortTerm) => {

        if (sortTerm === null ||sortTerm === "" || sortTerm === "Recommended") {
            let sorted = shirt_database.sort((a, b) => {
                return a.id - b.id;
            })
            setDatabase(sorted);
        } else if (sortTerm === "Rating") {
            // filter_function('rating');
            let sorted = shirt_database.sort((a, b) => {
                return a.rating - b.rating;
            })
            setDatabase(sorted);
        } else if (sortTerm === 'Popularity') {
            // sort by rating
             let sorted = shirt_database.sort((a, b) => {
                return a.rating - b.rating;
            })
            setDatabase(sorted);
            
        } else if (sortTerm === 'Price : High to Low') {
            let sorted = shirt_database.sort((a, b) => {
                return b.price - a.price;
            })
            setDatabase(sorted);
        } else if (sortTerm === 'Price : Low to High') {
            // sort increasing
            let sorted = shirt_database.sort((a, b) => {
                return a.price - b.price;
            })
            setDatabase(sorted);
        } else {
            return;
        }

    }

    







    return (  
        <>
            <div className="top_heading_path">

                <h5 id='path_heading_mens'>Home / Clothing / Mens</h5>
                <h4> Shirts For Men & Women - 42323 items</h4>
                
            </div>
            
            <div className="container_main">
                {/* left side filtters */}
                <div className="left_filters">
                    <Filters/>
                </div>

                {/* right side upper filtter and result */}
                <div className="right_side">
                    <div className="top_filters">

                        <div className="sorting_div">
                            <label htmlFor="sortby"> Sort By : </label>
                            <input type="search" list='options' name='sortby' id='sortby'  onChange={get_value}/>
                            <datalist id='options'>
                                <option value="Recommended"></option>
                                <option value="Rating"></option>
                                <option value="Popularity"></option>
                                <option value="Price : High to Low"></option>
                                <option value="Price : Low to High"></option>
                                <option value="Customer Rating"></option>

                            </datalist>
                        </div>

                    </div>


                    {/* load results in this div */}
                    <div className="result_container">


                        {
                            shirt_database.map((prdct) => {

                                return (
                                    
                                    
                                        <Single_Product
                                            key={prdct.id}
                                            title={prdct.title}
                                            subtitle={prdct.subtitle}
                                            main_img={prdct.img_path}
                                            sub_images = {prdct.sub_images}
                                            price={prdct.price}
                                            description={prdct.description}
                                            rating = {prdct.rating}
                                            
                                        />
                                )
                            })
                        }
                    </div>

                </div>
                
            </div>
        
        </>
    );
}
 
export default CategoriesDashboard;