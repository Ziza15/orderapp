import { useEffect, useState } from "react";
import { useAuth } from "../../store/AuthContext";
import Loading from "../UI/LoadingSpiner/Loading";
import OrederHistoryItem from "./OrderHistoryItem";
import classes from "./OrderHistory.module.css";
import img from "../../assets/historyEmpty.svg";
const OrederHistory = (props) => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { currentUser } = useAuth();
  const name = currentUser.email.split("@")[0];
  useEffect(() => {
    const fetchData = () => {
      fetch(`https://react-base-974e1-default-rtdb.firebaseio.com/${name}.json`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Imam problema sa učitavanjem!");
          }
          return response.json();
        })
        .then((data) => {
          let historyList = [];
          for (const key in data) {
            historyList.push({
              id: key,
              address: data[key].address,
              name: data[key].name,
              postCode: data[key].postCode,
              tel: data[key].tel,
              date: data[key].date,
              price: data[key].price,
              items: data[key].items,
            });

            console.log(historyList);
          }
          setHistory(historyList);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    };
    fetchData();
  });

  if (isLoading) {
    return (
      <div className={classes.centerPosition}>
        <div>
          <Loading />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className={classes.centerPosition}>
        <div>
          <p>{error}</p>
        </div>
      </div>
    );
  }
  if (history.length === 0) {
    return (
      <div className={classes.centerPosition}>
        <div className={classes.historyEmpty}>
          <img src={img} alt="Bez porudžbi" />
        </div>
        <div>
          <p>Nemate nijednu porudžbinu!</p>
        </div>
      </div>
    );
  }

  let historyItemList = history.map((h) => {
    return (
      <OrederHistoryItem
        key={h.id}
        id={h.id}
        price={h.price}
        date={h.date}
        address={h.address}
        name={h.name}
        postCode={h.postCode}
        tel={h.tel}
        items={h.items}
      />
    );
  });

  return (
    <>
      <div className={props.className}>
        <div className={classes.centerDiv}>{historyItemList}</div>
      </div>
    </>
  );
};

export default OrederHistory;
