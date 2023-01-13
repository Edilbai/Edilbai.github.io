import React, {useState}from 'react'
import UserMeta from './UserMeta'
import UserOne from './UserOne'
import { User } from '../interfaces';
import './User.css'



const WALLETS =[{ id:Date.now(),name:'Rojer Waters', email:'Charadeyouare@gmail.com', }]
interface UserListPropsType{
  account?:string;
}

export const UserList:React.FC<UserListPropsType>=({account}:{account?:string})=>{

const [wallets,setWallets]=React.useState(WALLETS)

const addWallets=({name,email,id}:User  )=>{
setWallets([...wallets, { id,name,email}])
}

  const deleteTodo = (id: User['id']) => {
    setWallets(wallets.filter((wallets) => wallets.id !== id));
  };
	return(
		<div className='main'>
			<div className='user'>
<h2 className='Beta Name'>Beta test registration</h2>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
      


<UserOne addWall={addWallets}/>
	
    
      
		
		</div>
			<UserMeta wallets={wallets} account={account} remove={deleteTodo}/>
				
		</div>
	
	)
}
export default UserList;