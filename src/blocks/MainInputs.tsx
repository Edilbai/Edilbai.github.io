import React from "react";
import Inputs from "../elements/Inputs";
import './Block.css'
 import '../elements/Elem.css'


export const MainInputs:React.FC=()=>{
return(
	<div className="main_ipt">
		<Inputs/>
		<input className="ipt" />
		<Inputs />
	</div>
)
}
export default MainInputs;