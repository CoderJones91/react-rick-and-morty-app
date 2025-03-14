import React, {useState, useEffect} from 'react'
import Cards from '../../components/Card/Card'
import InputGroup from '../Filter/Category/inputGroup'

const Location = () => {
  let [id, setID] = useState(1)
  let [info, setInfo] = useState([])
  let [results, setResults] = useState([]);
  let {name, type, dimension} = info

  let api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      setInfo(data)

      let a = await Promise.all(
    data.residents.map((x)=>{
      return fetch(x).then((res) => res.json())
    })
  ) 
  setResults(a)
    })()
  }, [api]);
  return (
    <div className="container">
     <div className='row' >
      <h2 className='text-center text-white mt-5 mb-4'>
        Location: 
        <span className='rm-text'> {name === ""? "Unknown" : name} </span></h2>
      <h5 className='text-center text-white mb-2'>
        Dimension: {dimension === ""? "Unknown" : dimension}
      </h5>
      <h6 className='text-center text-white mb-2'>
        Type: {type === ""? "Unknown" : type}
      </h6>
     <div className='row' id="justifyCard">
      <div className='col-lg-3 col-12'>
        <h4 className='text-center text-white mb-4'>Pick Location</h4>
        <InputGroup setID={setID} name="Location" total={126} />
        </div>
      
      <div className='col-lg-8 col-12'>
       <div className='row' id="justifyCard">
       <Cards page="/location/" results={results}/>
       </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Location