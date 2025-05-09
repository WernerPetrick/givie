import Footer from "./components/Footer"
import Header from "./components/Header"
import BirthdayGift from '/assets/birthday-gifts.png'
import ChristmasJersey from '/assets/christmas-jersey.png'
import ChristmasTree from '/assets/christmas-tree.png'
import GameConsole from '/assets/game-console.png'
import GiftMug from '/assets/gift-mug.png'
import RedBicycle from '/assets/red-bicycle.png'

function Index() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-8 min-h-screen">
        <div className="md:w-1/3 flex flex-col items-start justify-center text-center md:text-left pb-150">
          <h1 className="text-5xl font-medium text-rose-50">No More Guessing, Just <em className="text-rose-600">Givie</em></h1>
        </div>
        <div className="grid grid-cols-4 gap-4 md:w-2/3 self-center">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
            <img src={BirthdayGift} alt="Birthday Gift" className="object-cover w-full h-full" />
          </div>
          <div className="col-span-2 overflow-hidden rounded-xl">
            <img src={ChristmasJersey} alt="Christmas Jersey" className="object-cover w-full h-full" />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src={GameConsole} alt="Game Console" className="object-cover w-full h-full" />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src={GiftMug} alt="Gift Mug" className="object-cover w-full h-full" />
          </div>
          <div className="col-span-2 overflow-hidden rounded-xl">
            <img src={RedBicycle} alt="Red Bicycle" className="object-cover w-full h-full" />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src={ChristmasTree} alt="Christmas Tree" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Index
