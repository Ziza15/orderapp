import React, { useEffect, useState } from "react";
import MealMenu from "./MealMenu";
import classes from "./LoadedMenu.module.css";
import Loading from "../../UI/LoadingSpiner/Loading";
import filter from "../../../assets/filter.png"
import MenuFilter from "./MenuFilter";
const LoadedMenu = (props) => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortValue, setSortValue] = useState();
  const [error, setError] = useState();
  const [filterIsShown,setFilterIsShown]= useState(false)
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
  const change = (e) => {
    setSortValue(e.target.value);
  };
  if (sortValue === "rastuce") {
    menu.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
  }
  if (sortValue === "opadajuce") {
    menu.sort((a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0));
  }
  if (sortValue === "") {
    menu.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
  }

  let mealsList = menu.map((m) => {
    return <MealMenu key={m.id} id={m.id} name={m.name} price={m.price} />;
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

  const showFilterHandler =()=>{
    setFilterIsShown(true)
  }

  const hideFilterHandler =()=>{
    setFilterIsShown(false)
  }

  return (
    <React.Fragment>
      {filterIsShown && <MenuFilter onHideCart={hideFilterHandler}/>}
      <div className={`${props.className} ${classes.position}`}>
        <div className={classes.filter}>
          <img onClick={showFilterHandler} src={filter} alt="Filter"/>
          <select name="sort" id="sort-select" onChange={change}>
            <option value="">Sortiraj meni</option>
            <option value="opadajuce">Opadajuće</option>
            <option value="rastuce">Rastuće</option>
          </select>
        </div>
        <div className={classes.row}>{mealsList}</div>
      </div>
    </React.Fragment>
  );
};

export default LoadedMenu;
