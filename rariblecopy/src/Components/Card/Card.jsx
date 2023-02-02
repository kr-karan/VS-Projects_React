import './Card.css'
export default function Card({imageUrl,discription,price}){
return (
    <div className="card-component">
        <div className="image-div">
            <img src={imageUrl} alt ="img"/>
        </div>
        <div className="Discription">
            <h3>{price}</h3>
            <h3>{discription}</h3>
        </div>
               
    </div>
);
}