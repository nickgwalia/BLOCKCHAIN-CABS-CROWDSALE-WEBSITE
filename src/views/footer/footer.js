import React, { Component } from 'react'
import logo from '../../static/assets/images/logo.png'
import Ionicon from 'react-ionicons'
import '../../sass/footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="__Footer">
        <div className="container">
           <footer>
           <figure><img title="BlockChain Cabs" src={logo} />
           <label>Passengers Own it, Drivers Own it London.</label>
           </figure>
               <ul className="__company">
                 <li><h1>Our Company</h1></li>
                 <li>Marketing</li>
                 <li>Buy Tokens</li>  
                 <li>Privacy Policy</li>  
                 <li>Terms and Conditions</li>  
                 <li>Careers</li>
                 <li>Support</li>      
               </ul>
               <ul className="__company">
                 <li><h1>Our Services</h1></li>
                 <li>For Drivers</li>
                 <li>For Riders</li>  
                 <li>How It Works ?</li>  
                 <li>Android App <Ionicon icon="logo-android" fontSize="1.5rem" beat={true}/></li>  
                 <li>iOS App <Ionicon icon="logo-apple" fontSize="1.5rem" beat={true}/></li>  
               </ul>
               <ul className="__company">
                 <li><h1>Contact us</h1></li>
                 <li>info@blockchaincabs.org</li>
                 <li>+44 07597 948935</li> 
                 <li><Ionicon icon="logo-facebook" fontSize="1.5rem"/> <Ionicon icon="logo-twitter" fontSize="1.5rem"/>
                  <Ionicon icon="logo-linkedin" fontSize="1.5rem"/> <Ionicon icon="logo-instagram" fontSize="1.5rem"/></li>
               </ul>
           </footer>
           <label style={{textAlign:"center"}} className="__footerTagline">&copy; copyright 2018 BlockchainCabs. All rights reserved.</label>
        </div>
      </div>
    )
  }
}
