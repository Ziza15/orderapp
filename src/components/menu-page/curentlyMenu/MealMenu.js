import classes from "./MealMenu.module.css";
import img from "../../../assets/btnImg.svg";
import { useContext} from "react";
import AddCart from "../../../store/add-cart";
const MealMenu = (props) => {
  const ctx = useContext(AddCart);
  let inCart=false
  let amount = 1
  
  const addItem = () => {
    if (ctx.cartItems.length === 0) {
      ctx.addItemsToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        amount: amount
      });
    } else {
      ctx.cartItems.forEach((item) => {
        if (props.id === item.id) {
          console.log("Ovaj proizvod je vec u korpi, povecaj amount");
          const updIdArray = ctx.cartItems.findIndex((obj => obj.id ===item.id))
          ctx.cartItems[updIdArray].amount+=1
          inCart=true
          
        }
      });

      if (inCart === false) {
        console.log("Ovaj proizvod je dodat u korpu");
        ctx.addItemsToCart({
          id: props.id,
          name: props.name,
          price: props.price,
          amount:amount
        });
      }
    }
    ctx.updateTotalPrice()
    console.log(ctx.cartItems);

  };


  return (
    <div className={classes.mealCard}>
      <div className={classes.mealRow}>
        <h2>{props.name}</h2>
      </div>
      <div className={classes.mealRow}>
        <h3>{props.price} RSD</h3>
        <span>
          <button onClick={addItem}>
            Dodaj <img src={img} alt="Dodaj" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default MealMenu;
