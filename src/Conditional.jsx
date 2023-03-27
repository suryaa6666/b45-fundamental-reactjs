
// if-else 
// ternary operator
// && operator

import { useState } from "react"

export function Conditional() {
    const [isLogin, setIsLogin] = useState(false)

    return (
        <>
            {isLogin && <Dashboard />}
            {!isLogin && <>
                <GuestPage /> <button onClick={() => setIsLogin(true)}>Login</button>
            </>}
        </>
    )
}

function GuestPage() {
    return (
        <>
            <h1>Silahkan Login Dulu</h1>
        </>
    )
}

function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}

