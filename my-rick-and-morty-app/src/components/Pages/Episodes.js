import React, {useState, useEffect} from 'react'
import Cards from '../../components/Card/Card'
import InputGroup from '../Filter/Category/inputGroup'

const Episodes = () => {
  let [id, setID] = useState(1)
  let [info, setInfo] = useState([])
  let [results, setResults] = useState([]);
  let {air_date, name} = info

  let api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      setInfo(data)

      let a = await Promise.all(
    data.characters.map((x)=>{
      return fetch(x).then((res) => res.json())
    })
  ) 
  setResults(a)
    })()
  }, [api]);
  return (
    <div className="container">
     <div className='row'>
      <h2 className='text-center text-white mt-5 mb-4'>
        Episode: 
        <span className='rm-text'> {name === ""? "Unknown" : name} </span></h2>
      <h5 className='text-center text-white mb-2'>
        Air Date: {air_date === ""? "Unknown" : air_date}
      </h5>
     <div className='row' id="justifyCard">
      <div className='col-lg-3 col-12'>
        <h4 className='text-center text-white mb-4'>Pick Episode</h4>
        <InputGroup setID={setID} name="Episode" total={51} />
        </div>
      
      <div className='col-lg-8 col-12'>
       <div className='row' id="justifyCard">
       <Cards page="/episodes/" results={results}/>
       </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Episodes