import { useState } from "react";

export default function List(props) {
    return (
      <ul>
        {props.list.map((item) => (
          <Item key={item.id} {...item} onRemoveItem={props.onRemoveItem} />
        ))}
      </ul>
    );
  }
  
  function Item({id, image, name, info, price, onRemoveItem }) {
    
    const [readMore, setReadMore] = useState(false);

    return (
      <li>
        <h1>{name}</h1>
        <img src={image} alt={name} width={100} />
        <h4>{name}</h4>
        <h5>{price}</h5>
        {readMore ? info : `${info.substring(0, 100)}`}
        <button className="btn" onClick={() => setReadMore(!readMore)}>{readMore ? "Show less" : "Show more"}</button>
        <button onClick={() => onRemoveItem(id)}>Not Interested</button>
      </li>
    );
  }
  