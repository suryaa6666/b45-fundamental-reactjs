
const nama = "muthee"

function getNama(nama) {
  return `nama saya ${nama}`
}

function getBatch(nama) {
  return `batch saya ${nama}`
}


function App() {
  return (
    <>
      <Afra />
      <Jeri />
      <Alza></Alza>
      <h1>{nama}</h1>
      <h1>{getNama("alza")}</h1>
      <h1>{getNama("afra")}</h1>
      <h1>{getNama("robert")}</h1>
      <h1>{getNama("gendi")}</h1>
      <h1>{getNama("teguh")}</h1>
      <h1>{getNama("tyo")}</h1>
      <h1>{getBatch("45")}</h1>
    </>
  );
}

function Afra() {
  return (
    <h1>Hai aku asdsad</h1>
  )
}

function Jeri() {
  return (
    <h1>Hai aku Jeri</h1>
  )
}

function Alza() {
  return (
    <h1>Hai aku Alza</h1>
  )
}

export default App;
