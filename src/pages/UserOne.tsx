import React, { useState,useRef } from 'react'

import '../elements/Elem.css'
import {User} from '../interfaces'
import './User.css'


const DEFAULT_WALLETS={
	name:'',
	email:'',
	id:''
}
interface UserOnePropsType{
addWall:({name,email,id}:User  )=> void
}
export const UserOne:React.FC<UserOnePropsType> =({addWall})=>{


const [wall,setWall]=React.useState(DEFAULT_WALLETS)
const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
	const {value,name} =event.target;
	setWall({...wall,[name]:value})

}
const onClick=()=>{
	addWall({name:wall.name,  email:wall.email, id:Date.now()})
	setWall(DEFAULT_WALLETS)
}

	return(
		<div className='user noMargin'>
<div className='email'>
	<label htmlFor='name'>
<h3 className='Name'>NAME</h3>
	<input 
	type='text'
	id='name'
	name='name'
	className="ipt" 
	placeholder="We will display your email in participation list "  


	value={wall.name} 
	onChange={onChange}/>
	</label>

</div>
	

<div className='email'>
	<h3 className='Name'>EMAIL</h3>
	<input
		type='text'
	id='email'
	name='email'
	 className="ipt" 
	 placeholder="We will display your email in participation list "  
		
	 value={wall.email} 
	 onChange={onChange} />
	</div>
<button onClick={onClick} className="btn">Get early access</button>
	

		</div>
		
	)
}
export default UserOne;