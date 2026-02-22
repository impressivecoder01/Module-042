
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import Loading from './components/PricingOptions/Loading'


const pricingPromise = () => fetch('/pricingData.json').then(res => res.json())
const pricingData = pricingPromise()
console.log(pricingData)
function App() {
  

  return (
    <>
     <header>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
     </header>
     <main className='my-6 w-11/12 mx-auto'>
      <Suspense fallback={<Loading></Loading>}>
        <PricingOptions pricingData={pricingData}></PricingOptions>
      </Suspense>
     </main>
    </>
  )
}

export default App
