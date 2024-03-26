import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export const ProductDetail = () => {
    return (
        <>
            <Suspense fallback="Loading product details...">
                <div className="m-2">
                    <h1 className="text-2xl font-bold text-green-500"> Product </h1>
                    <Product />
                </div>
            </Suspense>
            <Suspense fallback="Loading reviews..." >
                <div className="m-2">
                    <h1 className="text-2xl font-bold text-violet-500"> Reviews </h1>
                    <Reviews />
                </div>
            </Suspense>
        </>
    )
};

export default ProductDetail;