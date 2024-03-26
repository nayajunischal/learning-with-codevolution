import Card from "@/components/cards";
import Link from 'next/link';

export default function Archived() {
    return (
        <Card>
            <div>Archived Notifications</div>
            <Link href="/complex-dashboard" className="ml-3 text-blue-500 font-semibold">Default</Link>
        </Card>
    )
}