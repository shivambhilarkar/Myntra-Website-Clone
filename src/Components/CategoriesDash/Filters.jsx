import "./Filters.css";
const Filters = () => {
  return (
      <>
          {/* filter heading */}
        <div className="filter_header">
            <h4>Filters</h4>
            <input type="button" value="Clear All" className="clear_btn" />
        </div>
          
          {/* gender filter */}
        <div className="gender_filter">
            <div className="gender_filter_inner">
            <span>
                <input type="radio" name="Male" id="Male" />
                <label htmlFor="Male">Men</label>
            </span>

            <span>
                <input type="radio" name="Female" id="Female" />
                <label htmlFor="Female">Women</label>
            </span>

            <span>
                <input type="radio" name="Boys" id="Boys" />
                <label htmlFor="Boys">Boys</label>
            </span>

            <span>
                <input type="radio" name="Girls" id="Girls" />
                <label htmlFor="Girls">Girls</label>
            </span>
              </div>
          </div>
          
          {/* Brand Filter */}
          <div className="brand_filter">
              <h4>Brands</h4>
                    <div className="brand_filter_inner">
                        <span>
                            <input type="checkbox" name="Roadster" id="Roadster" />
                            <label htmlFor="Roadster">Roadster (1981)</label>
                        </span>

                        <span>
                            <input type="checkbox" name="LouisPhilipps" id="LouisPhilipps" />
                            <label htmlFor="LouisPhilipps">Louis Philipps (1961)</label>
                        </span>

                        <span>
                            <input type="checkbox" name="Blackberrys" id="Blackberrys" />
                            <label htmlFor="Blackberrys">Blackberrys (1656) </label>
                        </span>

                        <span>
                            <input type="checkbox" name="AllenSolly" id="AllenSolly" />
                            <label htmlFor="AllenSolly">Allen Solly (1529)</label>
                         </span>
                        <span>
                            <input type="checkbox" name="SPYKAR" id="SPYKAR" />
                            <label htmlFor="SPYKAR">SPYKAR (1500)</label>
                        </span>

                        <span>
                            <input type="checkbox" name="LouisPhilippsSports" id="LouisPhilippsSports" />
                            <label htmlFor="LouisPhilippsSports">Louis Philipps Sports (1500)</label>
                        </span>

                        <span>
                            <input type="checkbox" name="Mufti" id="Mufti" />
                            <label htmlFor="Mufti">Mufti (1358)</label>
                        </span>

                        <span>
                            <input type="checkbox" name="VanHeusen" id="VanHeusen" />
                            <label htmlFor="VanHeusen">Van Heusen (1343)</label>
                        </span>
              </div>
              <h5 className="more_heading">+ 301 More</h5>
              
          </div>

          {/* filter for prices */}

          <div className="price_filter">
              <h4>Prices</h4>

              <div className="price_filter_inner">
                     <span>
                            <input type="checkbox" name="first" id="first" />
                            <label htmlFor="first">Rs. 359 to Rs. 944</label>
                        </span>

                        <span>
                            <input type="checkbox" name="second" id="second" />
                            <label htmlFor="second">Rs. 944 to Rs. 1529</label>
                        </span>

                        <span>
                            <input type="checkbox" name="third" id="third" />
                            <label htmlFor="third">Rs. 1529 to Rs. 2114</label>
                        </span>

                        <span>
                            <input type="checkbox" name="fourth" id="fourth" />
                            <label htmlFor="fourth">Rs. 2114 to Rs. 2699</label>
                         </span>
              </div>
          </div>

          
          {/* filter for color */}
          <div className="Color_filter">
              <h4>Colors</h4>
                <div className="Color_filter_inner">
                    <span>
                        <input type="checkbox" name="blue" id="blue" />
                        <div className="color_div"></div>
                        <label htmlFor="blue">Blue</label>
                    </span>
                  
                   <span>
                        <input type="checkbox" name="white" id="white" />
                        <div className="color_div"></div>
                        <label htmlFor="white">White</label>
                  </span>
                   <span>
                        <input type="checkbox" name="navyblue" id="navyblue" />
                        <div className="color_div"></div>
                        <label htmlFor="navyblue">Navy Blue</label>
                  </span>
                   <span>
                        <input type="checkbox" name="black" id="black" />
                        <div className="color_div"></div>
                        <label htmlFor="black">Black</label>
                  </span>
                   <span>
                        <input type="checkbox" name="green" id="green" />
                        <div className="color_div"></div>
                        <label htmlFor="Green">Green</label>
                  </span>
                   <span>
                        <input type="checkbox" name="grey" id="grey" />
                        <div className="color_div"></div>
                        <label htmlFor="grey">Grey</label>
                  </span>
                   <span>
                        <input type="checkbox" name="pink" id="pink" />
                        <div className="color_div"></div>
                        <label htmlFor="pink">Pink</label>
                  </span>
                   


              </div>
              <h5 className="more_heading">+ 30 More</h5>
              
          </div>


          {/* Discount range price */}

          <div className="Discount_filter">
              <h4>Discounts</h4>
                <div className="Discount_filter_inner">
                    <span>
                        <input type="radio" name="ten" id="ten" />
                        <label htmlFor="ten">10% and above</label>
                    </span>

                    <span>
                        <input type="radio" name="twenty" id="twenty" />
                        <label htmlFor="twenty">20% and above</label>
                    </span>

                    <span>
                        <input type="radio" name="thirty" id="thirty" />
                        <label htmlFor="thirty">30% and above</label>
                    </span>

                    <span>
                        <input type="radio" name="fourty" id="fourty" />
                        <label htmlFor="fourty">40% and above</label>
                  </span>
                  
                  <span>
                        <input type="radio" name="fifty" id="fifty" />
                        <label htmlFor="fifty">50% and above</label>
                    </span>

                    <span>
                        <input type="radio" name="sixty" id="sixty" />
                        <label htmlFor="sixty">60% and above</label>
                    </span>

                    <span>
                        <input type="radio" name="seventy" id="seventy" />
                        <label htmlFor="seventy">70% and above</label>
                    </span>

                    <span>
                        <input type="radio" name="eighty" id="eighty" />
                        <label htmlFor="eighty">80% and above</label>
                    </span>
                </div>
          </div>




    </>
  );
};

export default Filters;
