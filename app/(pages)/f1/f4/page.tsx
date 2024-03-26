import Link from "next/link";

export default function F4() {
    return (
        <>
            <div className="ml-3 font-semibold">F4 Page </div>
            <Link href="/f1/f3" className="ml-3 text-blue-500 font-semibold"> Navigate to F3 </Link>
            <Link href="/order-product" className="ml-3 text-blue-500 font-semibold"> Navigate to Order Product </Link>
        </>
    )
}