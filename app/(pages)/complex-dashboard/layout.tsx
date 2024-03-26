import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Complex Dashboard"
};

export default function ComplexDashboardLayout({
    children,
    users,
    notifications,
    revenue,
    login
}: Readonly<{
    children: React.ReactNode;
    users: React.ReactNode;
    notifications: React.ReactNode;
    revenue: React.ReactNode;
    login: React.ReactNode
}>) {
    const isLoggedIn = true;
    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div className="flex">
                <div className="flex flex-col flex-grow">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className="flex flex-grow-1"> {notifications}</div>
            </div>
        </div>
    ) : (
        <div> {login} </div>
    );
}
