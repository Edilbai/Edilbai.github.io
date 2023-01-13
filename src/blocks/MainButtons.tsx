import React from "react";
import {  useNavigate } from "react-router-dom";
import Buttons from "../elements/Buttons";
import './Block.css'

export const MainButtons:React.FC=({...props})=>{
	const history =useNavigate()
	function handle(){
		history("/user")
	}
return(
	<div className="main_button">
		<button className="btn" onClick={handle}>  Get early access
			
		</button>
		<button className="btn" onClick={handle}>  Get early access
			
		</button>
		<button className="btn" onClick={handle}>  Get early access
			
		</button>
	</div>
)
}
export default MainButtons;