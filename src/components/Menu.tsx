'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image';
import { PiShoppingCartSimpleFill } from "react-icons/pi";

interface IData {
  id: number, 
  name: string, 
  description: string,
  price: string,
  image: StaticImageData;
}

function Menu() {
  const [products, setProducts] = useState<IData[] | any>(String);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null)  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://feane-eight.vercel.app/api/products/`);
        if(!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data: IData[] = await response.json();
        setProducts(data);
      } 
      catch (err: any) {
        setError(err.message)
      }
      finally {
        setLoading(false)
      }

    };

    fetchProduct();
  } );
  if (loading) {
    return <div className='loading'> Loading...</div>
  }
  
  if (error) {
    return <div>Error: {error}...</div>
  }




  return (
      <div className='menu'>
        <div className='menu-head'>
          <h3 className='menu-h'>Our Menu</h3>
          <ul className='menu-list'>
            <li className='menu-list-li'>All</li>
            <li className='menu-list-li'>Burger</li>
            <li className='menu-list-li'>Pizza</li>
            <li className='menu-list-li'>Pasta</li>
            <li className='menu-list-li'>Fries</li>
          </ul>
        </div>
        {/* items */}
        <div className='menu-items'>
            {products.map((product: IData) => (
            <div className='item' key={product.id}>
                  <div className='item-img-div'>
                  <Image className='items-img' src={product.image} alt={product.name} width={190} height={140} />
                  <div>

                  <div className='item-texts'>
                    
                  <div className='item-basic-detail'>
                  <div className='item-name'>{product.name}</div>
                  <div className='item-description'>{product.description}</div>
                  </div>

                  <div className='item-buy'>
                  <div className='item-price'>{product.price}</div>
                  <div className='item-cart'>
                    <Link href={`/products/${product.id}`}>
                    <PiShoppingCartSimpleFill className='cart-icon' color='white' size={24}/>
                    </Link>
                  </div>
                  </div>
                  
                  </div>

                  </div>

                </div>
              </div>
            ))}
        </div>
      </div>
  )
}

export default Menu;
