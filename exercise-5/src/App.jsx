import Card from "./components/Card"
import { AVAILABLE_PLACES } from "./data"
function App() {

  return (
    <>
      <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 w-[75%] mx-auto justify-center items-center min-h-screen">
          {AVAILABLE_PLACES.map((card,index)=>(
              <Card key={index} image={card.image.src} alt={card.image.src} title={card.title} description={card.image.alt} />
            ))}
      </div>
      </div>
    </>
  )
}

export default App
