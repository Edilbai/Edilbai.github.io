import React from 'react'
import planet from '../img/planet.png'
import logo from '../img/logo.png'
import { User } from '../interfaces';

interface LastPagePropsType{
	wallets:User;
account?:string
}

export const LastPage:React.FC<LastPagePropsType>=({wallets, account})=>{
	return(
		<div>
				<div className='head'>
				<div className='logo'><img src={logo} alt="" />
				<span>logo</span></div>
				
				{/* <button  className='btn_meta btn'>Connect Metamask</button> */}
				 <h3>account</h3>
			</div>
			<div className='wrapper'>
				<div className='user'>
					<h2>Personal Data</h2>
					<h4>Name</h4>
					<h4>{wallets.name}</h4>
					<h4>Email</h4>
					<h4>{wallets.email}</h4>
					<h4>Wallet</h4>
					<h4>{account}</h4>
				</div>
<div><img src={planet}/></div>
			</div>
		</div>
	)
}
export default LastPage;