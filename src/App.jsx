import Azmi, { Tyo } from "./components/Header";


const pencet = () => {
  alert("halo")
}

function App() {
  return (
    <>
      <button onClick={pencet}>click saya</button>
      <button onClick={pencet}>click saya</button>
      <Azmi />
      <Tyo />
    </>
  );
}

export default App;
