
import './App.css'

function App() {
  return (
    <>
      <Child name="ashwith" age={20}/>
    </>
  );
}

export default App

function Child(props){
  return(
    <>
    <GrandChild name={props.name} age={props.age}/>
    </>
  )
}

function GrandChild(props){
  return(
    <>
    <h1>Hello World</h1>
    <p>Name :{props.name}</p>
    <p>Age :{props.age}</p>
    </>
  );
}