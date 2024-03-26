
"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log('Placing order');
        router.push('/');
    }
    return (
        <div>
            <button onClick={handleClick} className="p-3 border-red-200 border rounded-2xl"> Place Order</button>
        </div>
    )
}