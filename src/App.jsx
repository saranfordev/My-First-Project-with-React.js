import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import AppSearch from './components/AppSearch'
import Photoes from './components/Photoes'
import PhotoesPose from './components/PhotoesPose'
import flowers from './data/flowers'



function App() {

  const [selectedPhotoes, setselectedPhotoes] = useState(null)
  const [searchText, setsearchText] = useState('')


  function onFlowerOpen(value){
    setselectedPhotoes(value)
  }

  function onFlowerClose(){
    setselectedPhotoes(null)
  }

  const flowerELement = flowers.filter((newflow)=>{
    return newflow.title.includes(searchText)
  }).map((flowers, index) => {
    return <Photoes key={index} title={flowers} onFlowClick={onFlowerOpen}/>
  })

  let photoesPose = null;
  if(!!selectedPhotoes) {
    photoesPose = <PhotoesPose flowers={selectedPhotoes} onBgClick={onFlowerClose}/>
  }
  return (
    <div className='App' >
        <AppHeader/>
        <section className='app-section'>
          <div className="app-container">
              <AppSearch value={searchText} onValueChange={setsearchText}/>
              <div className="app-grid">
              {flowerELement}
              </div>
          </div>
        </section>
        {photoesPose}
    </div>
  )
}




export default App
