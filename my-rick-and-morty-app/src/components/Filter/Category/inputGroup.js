import React from 'react'

const inputGroup = ({total, name, setID}) => {
   
    
  return (
    <div class="input-group mb-3">
        
  <select 
  onChange={e=>setID(e.target.value)}
  class="form-select" id={name}>
    <option value="1" selected>Choose...</option>

    {[...Array(total).keys()].map((x) => {
        return(
            <option value={x + 1}>
                {name} - {x + 1}
                </option>

        )

    })}
  </select>
</div>
  )
}

export default inputGroup