import { useState } from "react";
import styles from "../styles/List.module.css";

export default function List(props) {
    return (
      <ul className={styles.list}>
        {props.list.map((item) => (
          <Item key={item.id} {...item} onRemoveItem={props.onRemoveItem} />
        ))}
      </ul>
    );
  }
  
  function Item({id, image, name, info, price, onRemoveItem }) {
    
    const [readMore, setReadMore] = useState(false);

    return (
      <li className={styles.tour}>
        <h1 className={styles.name}>{name}</h1>
        <img className={styles.image} src={image} alt={name}/>
        <h5 className={styles.price}>{price}</h5>
        {readMore ? info : `${info.substring(0, 100)}`}
        <button className={styles.show} onClick={() => setReadMore(!readMore)}>{readMore ? "Show less" : "Show more"}</button>
        <button className={styles.delete} onClick={() => onRemoveItem(id)}>Not Interested</button>
      </li>
    );
  }
  