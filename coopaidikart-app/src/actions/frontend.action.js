import axios from "../helpers/axios";
import { productConstants } from "./constants";

export const getProductFrontend=()=>{
    return async dispatch=>{
        try{
        dispatch({type:productConstants.GET_PRODUCT_FRONTEND_REQUEST});
        const res=await axios.get(`/`);
        console.log(res);
        if(res.status===200){

            const  products =res.data;

            dispatch({
                type:productConstants.GET_PRODUCT_FRONTEND_SUCCESS,
                payload:{
                    products:products
                }
            });
        }else{
            dispatch({
                type:productConstants.GET_PRODUCT_FRONTEND_FAILURE
            });
        }
    }catch(error){
        console.log(error);
    }
    }
}