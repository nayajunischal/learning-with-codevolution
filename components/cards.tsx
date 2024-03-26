const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-20 m-3 box-border shadow-md border flex justify-center items-center">
            {children}
        </div >
    );
}

export default Card;