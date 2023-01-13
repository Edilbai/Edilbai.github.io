import React, {  useState } from 'react'
import './Elem.css'

export const Metaprompt:React.FC=()=>{
const [clicked, setClicked]=useState(false)
	const click=()=>{
			setClicked(true)
	}
	
	return(
		<div className={`window ${clicked ? 'click' : ''}`} >
			<div className='window_wrapper'>
<h2 className='Beta'>METAMASK EXTENTION</h2>
<span className='Name'>To work with our application, you have to install the <span className='account'>Metamask browser extension</span></span>
<button className='btn long' onClick={click}>SKIP THIS STEP</button>
			</div>

		</div>
	)
}
export default Metaprompt;