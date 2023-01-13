
import React from 'react'
import './User.css'

import { User } from './../interfaces';
import Users from './Users';



interface UserMetaPropsType{
    remove: (id: User['id']) => void;
  account?:string;
  wallets:User[]
}
export const UserMeta:React.FC<UserMetaPropsType>=({ wallets, account, remove})=>(

  
    <div>
      <div className='Part'><h2>Participation listing (enable only for participants)</h2></div>
      <div className='Wallets'>
        <h2>NAME</h2>
      <h2>EMAIL</h2>
      <h2>WALLET</h2>
      </div>
{wallets.map((wallets)=>(
  <div>
<Users key={wallets.id} wallets={wallets} account={account} remove={remove}/>

  </div>
  

))}
  </div>
 
)

export default UserMeta;

