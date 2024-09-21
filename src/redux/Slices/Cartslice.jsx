import { createSlice } from "@reduxjs/toolkit";

const Cartslice=createSlice({
   name:'cart',
   initialState:{
    cart:[],
    cartState:false,
    
   },
   reducers:{

      changeCartstate:(state,action)=>{
         state.cartState=!state.cartState;
      },
      addtoCart:(state,action)=>{
         const existingitem=state.cart.find((item)=>item.id===action.payload.id)
         if(existingitem){
            state.cart=state.cart.map((item)=>item.id===action.payload.id ?{...item,qty:item.qty+1}:item)
         }
         else{
            state.cart.push(action.payload)
         }
        
      },
      removefromCart:(state,action)=>{
         state.cart=state.cart.filter((item)=>item.id!==action.payload.id);
      },
      incrementQty:(state,action)=>{
         state.cart=state.cart.map((item)=>item.id===action.payload.id ?{...item,qty:item.qty+1}:item)
      },
      decrementQty:(state,action)=>{
         if(action.payload.qty>1){
            state.cart=state.cart.map((item)=>item.id===action.payload.id ?{...item,qty:item.qty-1}:item)
         }
         else if(action.payload.qty===1){
            state.cart=state.cart.filter((item)=>item.id!==action.payload.id);
         }
         
      },
      setCart: (state, action) => {
         state.cart = action.payload;
       },
    },
});
export const {addtoCart,removefromCart,incrementQty,decrementQty,changeCartstate,setCart}=Cartslice.actions;
export default Cartslice.reducer;