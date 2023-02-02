import "./App.css";
import Search from "./Components/Search/Search";
import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import collection from "./Components/Collection";

function App() {
  return (
    <div className="App">
      <div className="MainContainer">
        <div className="searchB">
          <div className="ButtonC">
            <Button />
          </div>
          <div className="ClassC">
            <Search />
          </div>z
        </div>

        <div>
          <div className="Card-component">
            {collection.map((post, index) => (
              <Card
                key={index}
                imageUrl={post.imageUrl}
                discription={post.name}
                price={post.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
