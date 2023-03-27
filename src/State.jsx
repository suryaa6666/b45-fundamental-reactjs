import { useState } from 'react'

export default function State() {
    const [number, setNumber] = useState([])

    console.log("array", number)

    return (
        <>
            <h1>Ini state</h1>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber([...number, "surya"])
            }}>Tambah</button>
            <button onClick={() => setNumber(number - 1)}>kurang</button>
        </>
    )
}