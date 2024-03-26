

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h2>Inner Layout</h2>
            {children}
        </div>
    );
}
