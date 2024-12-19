
import Image from 'next/image';
import o1 from '../../public/o1.jpg';
import o2 from '../../public/o2.jpg';
import { PiShoppingCartSimpleFill } from "react-icons/pi";

function Offer() {
  return (
    <div>
      <div className='offers'>

     <div className='offer'>
     <div className='offimg'>
        <Image className='offer-img' height={165} width={165} src={o1} alt=''/>
        </div>
        <div className='offer-content'>
          <h3 className='offer-content-h'>Tasty Thursday</h3>
          <p className='offer-content-p'>20%<sub className='offer-content-p-sub'>Off</sub></p>
          <button className='offer-btn' type="button"><p>Order Now</p><PiShoppingCartSimpleFill size={24}/></button>
        </div>
      </div>

      <div className='offer'>
        <div className='offimg'>
        <Image className='offer-img' height={165} width={165} src={o2} alt=''/>
        </div>
        <div className='offer-content'>
          <h3 className='offer-content-h'>Pizza Days</h3>
          <p className='offer-content-p'>15%<sub className='offer-content-p-sub'>Off</sub></p>
          <button className='offer-btn' type="button"><p>Order Now</p><PiShoppingCartSimpleFill size={24}/></button>
        </div>
      </div>

     </div>
    </div>
  )
}

export default Offer