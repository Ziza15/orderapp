import React, { useEffect, useState } from "react";
import MealMenu from "./MealMenu";
import classes from "./LoadedMenu.module.css";
import Loading from "../../UI/LoadingSpiner/Loading";

const LoadedMenu = (props) => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = () => {
      fetch("https://react-base-974e1-default-rtdb.firebaseio.com/menu.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Imam problema sa učitavanjem!");
          }
          return response.json();
        })
        .then((data) => {
          let menuList = [];
          for (const key in data) {
            menuList.push({
              id: key,
              name: data[key].name,
              price: data[key].price,
            });
          }
          setMenu(menuList);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          console.log(error);
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);
  
  const mealsList = menu.map((m) => {
    return <MealMenu  key={m.id} id={m.id} name={m.name} price={m.price} />;
  });

  if (isLoading) {
    return (
      <div className={classes.centarDiv}>
        <div>
          <Loading />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className={classes.centarDiv}>
        <div>
          <p>{error}</p>
        </div>
      </div>
    );
  }
  
  return (
    <React.Fragment>
      <div className={`${props.className} ${classes.position}`}>
        <div className={classes.row}> {mealsList}</div>
      </div>
    </React.Fragment>
  );
};

export default LoadedMenu;
