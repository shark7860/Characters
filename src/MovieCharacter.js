import React from 'react';
const MovieCharacter=()=>{
return(<>
{/* <div>Welcome Home</div> */}
{/* <img classNameName='char-img' src='https://signupsrk.herokuapp.com/images/my-pic-min.png' alt='my-pic'></img> */}
<div className="wrapper">
    <div className="product-img">
      <img src="http://bit.ly/2tMBBTd" alt='img' height="420" width="327"/>
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Harvest Vase</h1>
        <h2>by studio and friends</h2>
        <p>Harvest Vases are a reinterpretation<br/> of peeled fruits and vegetables as<br/> functional objects. The surfaces<br/> appear to be sliced and pulled aside,<br/> allowing room for growth. </p>
      </div>
      <div className="product-price-btn">
        <p><span>78</span>$</p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>
  
</>);
};
export default MovieCharacter;