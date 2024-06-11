import axios from "axios"
import { useState, useEffect } from "react"

function App() {

  const [city, setCity] = useState(localStorage.getItem('lastCity') || 'London')
  const [user, setUser] = useState<any>('')

  const getData = async () => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=f59d98999cecfcf638aa71d6f580ea19`)
      setUser(res.data)
      localStorage.setItem('lastCity', city) 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleShow = (e: { target: { value: any } }) => {
    setCity(e.target.value)
  }

  return (
    <div className="flex items-center bg-[url('/assets/back1.svg')]  bg-no-repeat bg-cover flex-col justify-center">

      <div className="flex justify-between w-full h-[300px] bg-[url('/assets/back1.svg')]  bg-no-repeat bg-cover lg:bg-[url('/assets/back2.svg')] ">

        <div className="w-[39px] h-[20px]">
          <img className="mt-[19px] ml-[22px]" src="/assets/w.svg" alt="" />
        </div>
        <div className="flex">
          <input type="text" onChange={handleShow} className="w-[125px] h-[20px] bg-inherit text-[#FFFFFFB2;] mr-[30px] mt-[19px] outline-none border-none " placeholder="Search Location..." />
          <button onClick={getData} className="mt-[-240px] mr-[30px]"><img className="w-[16px] h-[16px]" src="/assets/search.svg" alt="" /></button>
        </div>

      </div>

      <div>
        {user && (
          <div className="flex items-center space-x-4 text-left absolute left-[20px] top-[140px]">
            <h1 className="text-white text-5xl lg:text-9xl">{user.main.temp}°</h1>
            <h1 className="text-white text-3xl mt-[10px] lg:text-5xl">{user.name}</h1>
          </div>
        )}


      </div>

      <div className="w-full h-[500px] bg-[url('/assets/bg3.png')] bg-no-repeat bg-cover lg:bg-[url('/assets/blur4.png')]">

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-white text-lg mt-[40px] ">Weather Details...</h1>

            <div className="flex items-center justify-between  flex-col mt-[50px]">
              <h1 className="text-white text-lg">THUNDERSTRM WITH LIGHT DRIZZLE</h1>
              {user && (
                <div>
                <div className="flex items-center w-full pt-[40px]">
                  <h1 className="flex items-center text-[#FFFFFFB2] text-lg lg:text-2xl">Temp max<span className="ml-[150px]">{user.main.temp_max}°</span></h1>
                  <img className="ml-[10px]" src="/assets/max.svg" alt="max temperature icon" />
                </div>
                   
                <div className="flex items-center w-full pt-[40px]">
                  <h1 className="flex items-center text-[#FFFFFFB2] text-lg lg:text-2xl">Temp min<span className="ml-[150px]">{user.main.temp_min}°</span></h1>
                  <img className="ml-[10px]" src="/assets/min.svg" alt="max temperature icon" />
                </div>
                     
                <div className="flex items-center w-full pt-[40px]">
                  <h1 className="flex items-center text-[#FFFFFFB2] text-lg lg:text-2xl">Humadity<span className="ml-[150px]">{user.main.humidity}%</span></h1>
                  <img className="ml-[25px]" src="/assets/humadity.svg" alt="max temperature icon" />
                </div>
 
                <div className="flex items-center w-full pt-[40px]">
                  <h1 className="flex items-center text-[#FFFFFFB2] text-lg lg:text-2xl">Wind<span className="ml-[170px]">{user.wind.speed}km/h</span></h1>
                  <img className="ml-[10px]" src="/assets/wind.svg" alt="max temperature icon" />
                </div>

                </div>
              )}


            </div>

          </div>
        </div>


      </div>

    </div>
  )
}

export default App
