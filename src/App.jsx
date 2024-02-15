 
 import { Grilla } from "./Components/Grid/Grilla"
import { Navbar } from "./Components/Navbar/Navbar"
import { Route,Router, BrowserRouter,Routes } from "react-router-dom"
 
 


import Bible from './Components/Bible/Bible.json'
function App() {
   
    //<Grilla />
  return (
    <>
       
       
      <div>
         <BrowserRouter>
            <Navbar/>
            <Routes>
               
               
              {
                  Bible.map((x)=>{
                    return <Route key={x.id}  path={x.ruta} element={<Grilla bibleId={x.bibleId} version={x.version}/>}/>
                  })
              }
               
            </Routes>
         </BrowserRouter>
          
      </div>
       
    </>
  )
}

export default App
