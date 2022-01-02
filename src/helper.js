export const  isIncart = (product, cartItem) => {
    return cartItem.find(item => item.id === product.id);
    
}