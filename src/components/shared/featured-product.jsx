import React,{useContext} from 'react'
import { isIncart } from '../../helper';
import { withRouter } from 'react-router';
import './featured-products.styles.scss';
import { CartContext } from '../../context/cart-context';
 const FeaturedProduct = (props) =>{
     
    const {title, imageUrl, price , history, id ,description} = props;
    const product = {title, price, id, imageUrl, description };
    const {addProduct , cartItems, increase} = useContext(CartContext);
    const intemInCart = isIncart(product, cartItems)
     return(
         <div className="featured-product">
             <div className="featured-image" onClick={()=>
            history.push(`/product/${id}`)}>
                <img src={imageUrl} alt='product'/>
             </div>
             <div className="name-price">
                 <h3>{title}</h3>
                 <p>$ {price}</p>
                 
                 {
                     !intemInCart &&
                     <button className='button is-black nomad-btn'
                     onClick={() => addProduct(product)}  >
                     ADD TO CART 
                     </button>
                 }
                 {
                      intemInCart &&
                      <button className='button is-white nomad-btn' 
                      id='btn-white-outline'
                      onClick={() => increase(product)}  >
                      ADD MORE
                      </button>
                 }
             </div>
         </div>
     )
 }
 export default withRouter(FeaturedProduct) ;