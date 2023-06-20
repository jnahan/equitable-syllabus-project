import './App.css';

function App() {

  fetch('https://sheetdb.io/api/v1/vv1l83xybuwf3')
  .then((response) => response.json())
  .then((data) => console.log(data));

  return (
    <div className="App">
    </div>
  );
}

export default App;
