import java from "../assets/java.png"
import python from "../assets/python.webp"
import mongodb from "../assets/mongodb.jpg"
import express from "../assets/express.png"
import reactjs from "../assets/reactjs.png"
import nodejs from "../assets/node.png"


const Portfolio = () =>{

  const items = [{id:1,
                  logo:java,
                  name:"Java"
  },
  {id:2,
    logo:python,
    name:"Python"
},
{id:3,
  logo:mongodb,
  name:"MongoDB"
},
{id:4,
  logo:express,
  name:"Express"
},
{id:5,
  logo:reactjs,
  name:"Reactjs"
},
{id:6,
  logo:nodejs,
  name:"Nodejs"
},]

  return(<>
  <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-2">

    <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
    <span className="underline font-semibold">Featured Projects</span>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5 ">
     {items.map(({id,logo,name}) =>(

      <div key={id} className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-2 cursor-pointer hover:scale-110 duration-300 my-5 ">

        <img src={logo} alt="" className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"/>
        <div className="font-bold text-xl mb-2">
          {name}
        </div>
        <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sapiente?</p>


        <div className="justify-around px-4 py-2 space-x-3">

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source code</button>
        </div>
      </div>

      

        



     ))}

    </div>











  </div>
  
  
  </>)
}

export default Portfolio;