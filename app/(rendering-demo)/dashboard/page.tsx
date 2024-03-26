"use client"
import { useState } from "react";

// Server Component
export default function DashboardPage() {
    const [name, setName] = useState("");
    console.log('About client component');
    return (
        <div>
            <h1>Dashboard Page</h1>
            <input className="bg-slate-300 p-4 rounded-sm border" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p className="font-semibold m-3 p-2">Hello {name} !</p>
        </div>
    )
}