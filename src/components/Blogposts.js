import { useState } from "react";

function BlogPosts(props) {

    const [amout, setCount] = useState(1);
    let price = Number(props.card.price.split('$')[1]);
    let newprice = props.card.price;

    let plus = () => {
        setCount((initial) => initial + 1);
    }

    let minus = () => {
        if (amout > 0) {
            setCount((initial) => initial - 1);
        }
    }

    let price1 = price * amout;

    if (amout >= 1) {
        newprice = "$" + price1;
    } else if (amout == 0) {
        newprice = "Send money to the card, bro?";
    } 

    return (
        <div className="card">
            <img src={props.card.image}></img>
            <div className="card_content">
                <div className="card_content__title">
                    <h5>{props.card.producer}</h5>
                    <h4>{props.card.model}</h4>
                </div>
                <div className="card_content__other">
                    <p className="size">{props.card.size}</p>
                    <div className="couters">
                        <div className="amout">
                            <button className="minus" onClick={minus}>-</button>
                            <span>{amout}</span>
                            <button className="plus" onClick={plus}>+</button>
                        </div>
                        <p className="price">{newprice}</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default BlogPosts;