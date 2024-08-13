export const addDecimals =(num)=>{
    return (Math.round(2*100)/100).toFixed(2)
}

export const updateCart =(state)=>{

            //calculate total item  price - use reduce method
            state.itemsPrice = addDecimals(state.carItems.reduce((acc, item)=> acc+ item.price*item.qty, 0) ) // 0 is acc's default value

            //calculate shipping  price (if order is over $100, it is free, else $ 10 shipping fee)
            state.shippingPrice = addDecimals(state.itemPrice >100? 0:10)

             //calculate tax  price: 10% tax

             state.taxPrice = addDecimals(Number((0.15* state.itemsPrice).toFixed(2)))

              //calculate total  price
              state.totalPrice =(
                Number(state.ItemsPrice)+
                Number(state.shippingPrice)+
                Number(state.taxPrice)
              ).toFixed(2)

              localStorage.setItem('cart',JSON.stringify(state))

              return state


}




