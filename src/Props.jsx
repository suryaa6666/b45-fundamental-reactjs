export default function Props() {
    return (
        <>
            <h1>
                Ini Props!
            </h1>
            <Orang nama={"Robert"} umur={50} />
            <Orang nama={"Alza"} umur={59} />
            <Orang nama={"Alza Oi"} umur={79} alamat={"Malang"} />
        </>
    )
}

function Orang({ nama, umur, alamat }) {
    return (
        <>
            <h1>Namaku adalah {nama}</h1>
            <h1>Umurku adalah {umur}</h1>
            <h1>Alamatku di {alamat}</h1>
        </>
    )
}