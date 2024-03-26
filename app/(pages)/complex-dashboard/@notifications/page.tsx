import Card from "@/components/cards";
import Link from 'next/link';

export default function Notifications() {
    return (
        <Card>
            <div>Default Notifications</div>
            <Link href="/complex-dashboard/archived" className="ml-2 text-blue-500 font-semibold">Archived</Link>
        </Card>
    )
}