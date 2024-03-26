export const Reviews = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return (
        <div>
            <ul className="gap-2">
                <li className="text-1xl font-bold text-red-500">Iphone 12 pro max is awesome.</li>
                <li className="text-1xl font-bold text-blue-500">Samsung S24, love to see the moon.</li>
                <li className="text-1xl font-bold text-orange-500">Nothing Phone 2 is just amazing with its back lightings.</li>
            </ul>
        </div>
    )
};