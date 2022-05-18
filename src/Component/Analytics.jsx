import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt="NOT FOUND" />
          <div className='flex flex-col justify-center '>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>For a company aspiring to an AA transformation, these elements can be incorporated into any of several organizational models, each of which is effective as long as there is clear governance, and the company encourages an analytical culture across business units to learn and develop together. Answering a few key questions can help to identify the best model.</p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
        </div>
        

    </div>
  )
}

export default Analytics