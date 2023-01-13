import React from 'react'

import photo from "../img/photo.png"
import logo from "../img/logo.png"
import '../elements/Elem.css'
import './User.css'
import { Goerli, Mainnet, useEtherBalance, useEthers } from "@usedapp/core";
import { getDefaultProvider } from "ethers";


import '../App.css'

import { UserList } from './UserList';
import Metaprompt from '../elements/Metaprompt';
import { useNavigate } from 'react-router-dom';




export const UserPage:React.FC=()=>{
const config = {

  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

const STAKING_CONTRACT = '0x00000000219ab540356cBB839Cbe05303d7705Fa'
 



  const { account, activateBrowserWallet, deactivate} = useEthers()
  const userBalance = useEtherBalance(account)
  const stakingBalance = useEtherBalance(STAKING_CONTRACT)

 

  const ConnectButton = () => (
    <div>
      <button className='btn_meta btn' onClick={() => activateBrowserWallet()}>Connect Metamask</button>
     
    </div>
  )
const Account =()=>(
  
<div>
      {account && (
        <div>
          <div className="inline">
           
            &nbsp;
            <div className="account">{account}</div>
          </div>
          <br />
        </div>
      )}
      {!account && <ConnectButton />}
      {account && <button onClick={deactivate}>Disconnect</button>}
      <br />
    </div>
)




const nav=useNavigate()
const onNav=()=>{
  nav('/')
}
	
	return(
		<div>
			<div className='head'>
         <Metaprompt/>
				<div onClick={onNav} className='logo'><img src={logo} alt="" />
				<span>logo</span></div>
				
				
				 <Account/>
			</div>
			<img src={photo} alt="" />
     
		
			   
				 <div className='Users'>
<UserList account={account}/>

				 </div>


		</div>
	)
}
export default UserPage;