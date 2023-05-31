import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const links = ["Women", "Men", "Girls", "Boys", "Sale"];

  return (
    <div className="wrapper">
      <Header links={links} />
      <Main />
      {/* <p>HELLO!</p> */}
    </div>
  );
}

export default App;
