import AddCart from "./add-cart";


const CartProvider=(props)=>{

    const cartContext ={
        
    }

    return(
        <AddCart.Provider value={cartContext}>
            {props.children}
        </AddCart.Provider>
    )
}