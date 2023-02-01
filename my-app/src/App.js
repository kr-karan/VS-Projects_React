import Card from './component/Card/card';
// import collection from './collection.js';
import './App.css';
// import ClassComponent from './ClassComponent/classCard';
import UsingState from './ClassComponent/UsingState.js'

const collection = [
  {
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },
  {
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },{
      imageUrl :'download.jpeg' ,
      name : "NFT image",
      price : '100',
  },
  ]
  
  
function App() {

  const ListItems = collection.map(items => <div>
    <Card imageUrl = {items.imageUrl} discription = {items.name} price = {items.price}/>
     </div>)
  return (
    <>
    <c/>
    <div className="ListItems">
      {ListItems}
       </div>
       {/* <ClassComponent description={"props to class component"} /> */}
       {/* <Card /> */}
       <UsingState name={"this"}/>
       </>
  );
}
export default App;
