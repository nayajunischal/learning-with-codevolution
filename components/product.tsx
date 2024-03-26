export const Product = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <div>
            <ul className="gap-2">
                <li className="text-1xl font-bold text-red-500">Iphone 12 pro max</li>
                <li className="text-1xl font-bold text-blue-500">Samsung S24</li>
                <li className="text-1xl font-bold text-orange-500">Nothing Phone 2</li>
            </ul>
        </div>
    )
};