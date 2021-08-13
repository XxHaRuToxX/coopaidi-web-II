import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';
import authReducer from './auth.reducer';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';
// import frontendReducer from './frontend.reducer';

const rootReducer=combineReducers({
    category:categoryReducer,
    product:productReducer,
    auth:authReducer,
    cart:cartReducer,
    user:userReducer,
    // frontend:frontendReducer
});

export default rootReducer;