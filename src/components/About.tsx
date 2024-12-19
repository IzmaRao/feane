import Image from 'next/image';
import about from "../../public/about.png";function About() {
  return (
    <div>
      <div className='about'>
      <div className='about-img'>
        <Image className='about-imgg' height={607} width={445} src={about} alt=""/>
      </div>
    <div className='about-content'>
      <h3 className='about-h'>We Are Feane</h3>
      <p className='about-p'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All</p>
      <button className='about-btn' type="button">Read More</button>
    </div>
    </div>
    </div>
  )
}

export default About