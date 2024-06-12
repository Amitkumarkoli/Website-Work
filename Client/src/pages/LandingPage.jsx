import Navbar from '../components/LandingPageComp/Navbar'
import { useState } from 'react'
import Search from '../components/UniversalComp/Search'
import HeroSec from '../components/LandingPageComp/HeroSec'
import Herosec2 from '../components/LandingPageComp/Herosec2'
import PotSec from '../components/LandingPageComp/PotSec'
import Frames from '../components/LandingPageComp/Frames'
import Mid from '../components/LandingPageComp/Mid'
import Frames2 from '../components/LandingPageComp/Frames2'
import Frames3 from '../components/LandingPageComp/Frames3'
import Frames4 from '../components/LandingPageComp/Frames4'
import Footer from '../components/UniversalComp/Footer'
import FramesLast from '../components/LandingPageComp/FramesLast'
import FlashSales from '../components/LandingPageComp/FlashSales'
import BrowseCategory from '../components/LandingPageComp/BrowseCategory'
import Frames5 from '../components/LandingPageComp/Frames5'
import SubFooter from '../components/LandingPageComp/SubFooter'

function LandingPage() {
  return (
    <>
      <Navbar />
      <Search />
      <HeroSec />
      <Herosec2 />
      <PotSec />
      <Frames />
      <BrowseCategory/>
      <FlashSales />
      <Mid title="COMING SOON !" h="10vh"/>
      <Frames2 />
      <Mid title="State Arts" h="20vh"/>
      <Frames3 />
      <Mid title="BESTSELLER" h="25vh"/>
      <Frames4 />
      <Frames5/>
      <FramesLast />
      <SubFooter/>
      <Footer />
    </>
  )
}

export default LandingPage
