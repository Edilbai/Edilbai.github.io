import React from 'react'
import './User.css'
import { User } from '../interfaces';
import del from '../img/remove.png'
import { LastPage } from './LastPage';
import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface UsersPropsType{
	  remove: (id: User['id']) => void;
wallets:User
 account?:string;
}
// declare function Link(
//   props: LinkProps
// ): React.ReactElement | null;

// interface LinkProps {
  
//   children?: string;
 
// }
export const Users:React.FC<UsersPropsType>=({wallets, account, remove})=>{
	const last =useNavigate()
	function handleLast(){
		last("/wall")
	}
	return(
		<div  className='Wallets Wall'>
			<span>{wallets.name}</span>
			<span onClick={handleLast} >{wallets.email}</span>
			<span>{account}</span>
<img src={del} onClick={()=>remove(wallets.id)}/>
<Routes>
<Route path='/wall' element={<LastPage  wallets={wallets} account={account}/>}/>
</Routes>


		</div>
		
	)
}
export default Users;