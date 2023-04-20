import { AddProduct } from "./AddProduct";

export const ProductsPreviewCard = ({ product, onAddProduct }) => {
  const addProduct = () => {
    onAddProduct(product);
  };
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden mx-2 my-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="p-8 ">
        <div className="uppercase tracking-wide pb-2 text-lg text-orange-500 font-semibold">
          {product.name}
        </div>
        <p className="mt-2 text-gray-500">{product.desciption}</p>
        <AddProduct onAddProduct={addProduct} />
      </div>
    </div>
  );
};
