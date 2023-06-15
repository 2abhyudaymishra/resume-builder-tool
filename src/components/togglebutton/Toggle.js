import React, { useContext } from 'react'
import "./Toggle.css"
import { Check, X } from 'react-feather'
import Sectioncontext from '../../context/sectioncontext'
function Toggle({checked,index}) {
  
  const sectioncontext = useContext(Sectioncontext);
  const {handletoggle}=sectioncontext;
  return (
    <label className={`togglebox ${!checked?"beforetoggle ":"aftertoggle"}`} >
        <input type="checkbox"  checked={checked} onChange={()=>handletoggle(index)} />
        <div className={`circle ${!checked?"beforecircle ":"aftercircle"}`}> {checked?<Check/>: <X/>} </div>
        {/* <span className='slider' > </span> */}
    </label>
  )
}

export default Toggle
