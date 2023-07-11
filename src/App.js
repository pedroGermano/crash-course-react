import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: Doe</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person name={'Pedro'}/>
    </div>
  );
}

export default App;
