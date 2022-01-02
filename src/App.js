
import { Switch,Route } from 'react-router-dom';
import NotFound from './components/not-found';
import HomePage from './components/home-page';
import Shop from './components/pages/shop/shop';
import SingleProduct from './components/single-product/single-product';
import './App.scss';
import CartPage from './components/pages/cart-page/cart-page';
function App() {
  return (
    <div className="App">
   <Switch>
     <Route exact path='/' component={HomePage} />
     <Route path='/shop' component={Shop}/>
     <Route path='/product/:id' component={SingleProduct}  />
     <Route path='/cart' component={CartPage}/>
     <Route path='*' component={NotFound} />
   </Switch>
    </div>
  );
}

export default App;
