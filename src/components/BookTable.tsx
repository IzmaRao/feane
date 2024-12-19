import Image from 'next/image';
import Map from '../../public/vt.webp'

function BookTable() {
  return (
    <div>
      <div className='booking'>
      <form className='booking-form' action="">
        <label className='input-box' htmlFor="">
          <h3 className='booking-h'>Book A Table</h3>
            <input className='input-one' type="text" placeholder='Your Name'/>
            <input className='input-two' type="number" placeholder='Your Number' />
            <input className='input-three' type="email" placeholder='Your Email'/>
            <select className='input-four' name="how Many Persons" >
              <option value="how Many Persons>">how Many Persons?</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input className='input-five' type="date"/>
        </label>
        <button className='booking-btn' type="button">BOOK NOW</button>
      </form>
      <div className="map-div">
        <Image className='map' height={335} width={520} src={Map} alt=''/>
      </div>
    </div>
    </div>
  )
}

export default BookTable