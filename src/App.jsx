
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
  const nameVar=props.name
  const ageVar=props.age
  return(
    <>
    <GrandChild name={nameVar} age={ageVar}/>
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