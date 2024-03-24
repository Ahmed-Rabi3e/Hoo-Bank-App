import FeaturesItems from './FeaturesItems'
import { BiLogoTelegram, BiBadgeCheck, BiBot, BiTrophy } from 'react-icons/bi'
import Footer from './Footer'


const Features = () => {
  return (
    <div className='bg-primary'>
      <div className='h-[800px] flex justify-center items-center  gap-5 p-16'>
        <div className="absolute -z-2 -top-10 w-[50%] h-[50%] rounded-full bg-gradient-to-r from-pink-100 to-pink-300 filter blur-[200px]" />
        <FeaturesItems className='self-center' icon={<BiLogoTelegram size={50} className='fill-primary' />} title='PROGRAMS' />
        <FeaturesItems className='self-start' icon={<BiBadgeCheck size={50} className='fill-primary' />} title='RESULTS' />
        <FeaturesItems className='self-center' icon={<BiBot size={50} className='fill-primary' />} title='COACHING' />
        <FeaturesItems className='self-start' icon={<BiTrophy size={50} className='fill-primary' />} title='EVENT​S' />
      </div>
      <div >
        <Footer />
      </div>
    </div>

  )
}

export default Features