
import Hero from '@/components/Hero';
import Offer from '@/components/Offer';
import Menu from '@/components/Menu';
import About from '@/components/About';
import BookTable from "@/components/BookTable";
export default function Home() {
  return (
    <div className="home">
      {/* hero start */}
     <div>
     <Hero/>
     </div>
     {/* hero end */}

     {/* offers start */}
     <Offer/>
     {/* offers end */}

    {/* menu start */}
    <Menu/>
    {/* menu end */}

    {/* about start */}
    <About/>
    {/* about end */}

    {/* booking start */}
    <BookTable/>
    {/* booking end */}



    </div>
  );
}
