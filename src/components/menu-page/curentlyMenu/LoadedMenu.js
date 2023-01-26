import React, { useEffect, useState } from "react";
import MealMenu from "./MealMenu";
import classes from "./LoadedMenu.module.css";
import Loading from "../../UI/LoadingSpiner/Loading";
import filter from "../../../assets/filter.png";
import MenuFilter from "./MenuFilter";
const LoadedMenu = (props) => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortValue, setSortValue] = useState();
  const [error, setError] = useState();
  const [filterIsShown, setFilterIsShown] = useState(false);
  const [underPrice, setUnderPrice] = useState(0);
  const [overPrice, setOverPrice] = useState(0);
  const [isFiltered, setFiltered] = useState(false);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [isCheckedPizza, setIsCheckedPizza] = useState(false);
  const [isCheckedSendwich, setIsCheckedSendwich] = useState(false);

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
              category: data[key].category,
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
    filteredMenu.sort((a, b) =>
      a.price > b.price ? 1 : b.price > a.price ? -1 : 0
    );
  }
  if (sortValue === "opadajuce") {
    menu.sort((a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0));
    filteredMenu.sort((a, b) =>
      a.price < b.price ? 1 : b.price < a.price ? -1 : 0
    );
  }
  if (sortValue === "") {
    menu.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
    filteredMenu.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
  }

  let mealsList = menu.map((m) => {
    return <MealMenu key={m.id} id={m.id} name={m.name} price={m.price} />;
  });

  const filterMenuHandler = () => {
    setFilteredMenu(
      menu.filter((item) => item.price < overPrice && item.price > underPrice)
    );
    // if (isCheckedPizza) {
    //   setFilteredMenu(
    //     menu.filter(
    //       (item) =>
    //         item.price < overPrice &&
    //         item.price > underPrice &&
    //         item.category === "pizza"
    //     )
    //   );
    // }
    if (isCheckedSendwich || isCheckedPizza) {
      setFilteredMenu(
        menu.filter(
          (item) =>
            item.price < overPrice &&
            item.price > underPrice &&
            ((isCheckedSendwich && isCheckedPizza) ?   item.category === "sendwich" || item.category === "pizza":console.log("d") ||
            isCheckedPizza ? item.category === "pizza" :console.log("d") 
            || isCheckedSendwich ? item.category === "sendwich" :console.log("d"))
          
        )
      );
    }
    setFiltered(true);
    setFilterIsShown(false);

    console.log(filteredMenu);
    console.log(menu);
  };
  let arr = filteredMenu.map((m) => {
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

  const showFilterHandler = () => {
    setFilterIsShown(true);
  };

  const hideFilterHandler = () => {
    setFilterIsShown(false);
  };
  const resetFilterHandler = () => {
    setFiltered(false);
    setIsCheckedPizza(false);
  };
  const handlerUnderPrice = (e) => {
    setUnderPrice(e.target.value);
  };
  const handlerOverPrice = (e) => {
    setOverPrice(e.target.value);
  };
  const chPizzaHandler = (event) => {
    setIsCheckedPizza(event.target.checked);
  };
  const chSendwichHandler = (event) => {
    setIsCheckedSendwich(event.target.checked);
  };
  return (
    <React.Fragment>
      {filterIsShown && (
        <MenuFilter
          underPrice={underPrice}
          overPrice={overPrice}
          handlerUnderPrice={handlerUnderPrice}
          handlerOverPrice={handlerOverPrice}
          filterMenu={filterMenuHandler}
          onHideFilter={hideFilterHandler}
          resetFilter={resetFilterHandler}
          handleChange={chPizzaHandler}
          handleChange1={chSendwichHandler}
          isCheckedPizza={isCheckedPizza}
          isCheckedSendwich={isCheckedSendwich}
        />
      )}
      <div className={`${props.className} ${classes.position}`}>
        <div className={classes.filter}>
          <img onClick={showFilterHandler} src={filter} alt="Filter" />
          <select name="sort" id="sort-select" onChange={change}>
            <option value="">Sortiraj meni</option>
            <option value="opadajuce">Opadajuće</option>
            <option value="rastuce">Rastuće</option>
          </select>
        </div>
        <div className={classes.row}>
          {!isFiltered && mealsList}
          {isFiltered && arr}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoadedMenu;
