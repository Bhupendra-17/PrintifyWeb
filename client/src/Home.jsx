import React from 'react'
import Nav from './Nav'
import Shirt from './components/Shirt/temp'
import Card from './components/Card/temp'
import Container from './components/Container/temp'
import Nextcontainer from './components/Container/temp3'
import Slider from './components/Slider/temp'
import NoSlider from './components/Slider/temp2'
import useWindowWidth from './WindowWidth';
import Connect from './components/Connect/box';
import Card2 from './components/Card2/temp';
import Display from './components/Display/temp2'
import Card3 from './components/Card3/temp'
import LastSection from './components/LastSection/temp'
import Footer from './components/Footer/temp'

function Home() {
  const windowWidth = useWindowWidth();

  return (
    <div className='overflow-hidden bg-stone-50'>
      <div className='sticky z-50 top-0 bg-white  overflow-x-hidden'>
        <Nav />
      </div>
      <div className='relative top-28 mb-52 w-fit mx-12 p-3 border-2 border-gray-300 rounded-xl shadow-xl'>
        <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row justify-around items-center'>
          <Container />
          <div>
            <Shirt />
          </div>
        </div>
      </div>
      <div className='mb-8 mt-16'>
        <Card />
      </div>
      <div>
        <Nextcontainer />
      </div>
      <div className='my-12'>
        {windowWidth < 768 ? <Slider /> : <NoSlider />}
      </div>
      <div className='my-12 '>
        <Connect />
      </div>
      <div className='my-16'>
        <Card2 />
      </div>
      <div className='my-16'>
        <Display />
      </div>
      <div className='my-12 mx-auto'>
        <Card3 />
      </div>
      <div className='my-12'>
        <LastSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home