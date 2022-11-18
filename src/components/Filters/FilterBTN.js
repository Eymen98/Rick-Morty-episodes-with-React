import React from 'react'
import './FilterBTN.scss'

const FilterBTN = ({name,index,items, task, setPageNumber}) => {
    return (
        <div>
            <div className="form-check">
                <input onClick={()=>{
                    setPageNumber(1);
                    task(items);
                }} 
                className="form-check-input xx"  type="radio"  name={name}  id={`${name}-${index}`}  />
                
                <label className="btn btn-outline-primary yy" for={`${name}-${index}`}>
                    {items}
                </label>
            </div>
        </div>
        
    )
}

export default FilterBTN
