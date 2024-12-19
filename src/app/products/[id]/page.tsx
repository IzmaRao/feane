'use client';

import React, { useEffect, useState } from 'react';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Image from 'next/image';
import { useCart } from '../../CartContext';

interface IData {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string; // Assuming the API returns the image URL as a string
}

interface Params {
  params: Promise<{ id: string }>; // Reflecting that `params` is a Promise
}

const DetailPage: React.FC<Params> = ({ params }) => {
  const { addToCart } = useCart(); // Use the cart context
  const [product, setProduct] = useState<IData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const unwrappedParams = await params;
        const response = await fetch(
          `http://localhost:3000/api/products/${unwrappedParams.id}`,
          { cache: 'no-store' }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const productData: IData = await response.json();
        setProduct(productData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }
  };

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }



  

  return (
    <div className="detail">
      {product && (
        <div className="detailitem" key={product.id}>
          <div className="detailitem-img-div">
          <div className='detailitem-circle'></div>
          <div className='detailitem-circle-t'></div>
            <Image
              className="detailitem-img"
              src={product.image} // Assuming `product.image` is a valid URL
              alt={product.name}
              width={390}
              height={300}
            />
          </div>
          <div className="detailitem-texts">
            <div className="detailitem-basic-detail">
              <div className="detailitem-name">{product.name}</div>
              <div className="detailitem-description">{product.description}</div>
            </div>
            <div className="detailitem-buy">
              <div className="detailitem-price"><span>Price: </span>  {product.price}</div>

              <div onClick={handleAddToCart}>
                    <button className='detailitem-cart'>
                    <p className=''>Add To Cart</p>
                    <PiShoppingCartSimpleFill  color="white" size={24} /></button>
              </div>



            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;