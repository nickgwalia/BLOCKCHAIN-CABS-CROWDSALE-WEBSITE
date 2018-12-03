import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import logo from '../../../src/static/assets/images/logo.png'
import Ionicon from 'react-ionicons' 

const CreateNavLinks = (props)=>{
    let receivedLinkData = props.linksData;
    return (
        receivedLinkData.map((data)=>
        <li key={data.idKey} className="nav__item"><a href={data.linkTo}></a>{data.displayName}</li>
        )
      )
}

export default class Navbar extends PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {
            status:true,
            navLinksData:[]
        }
    }

    componentDidMount()
    {
            this.setState({
                        navLinksData:[
                            {idKey:'top1@navlink',displayName:'Home',linkTo:''},
                            {idKey:'top2@navlink',displayName:'For Investors',linkTo:''},
                            {idKey:'top3@navlink',displayName:'Whitepaper',linkTo:''},
                            {idKey:'top4@navlink',displayName:'Marketing',linkTo:''},
                            {idKey:'top5@navlink',displayName:'Blockchain Cabs',linkTo:''},
                            {idKey:'top6@navlink',displayName:'Airdrop',linkTo:''},
                            {idKey:'top6@navlink',displayName:'Login',linkTo:''},
                            {idKey:'top6@navlink',displayName:'Registration',linkTo:''}
                           ]
                    }
           )
    }
    render()
    {
    
        return (
            <div className="NavbarContainer">
                <figure className="companyLogo"><img title="BlockChain Cabs" src={logo} /></figure>               
                <input type="checkbox" id="nav_toggle" />
                <label htmlFor="nav_toggle" className="nav_toggleButton"><span><Ionicon icon="ios-menu" color="#000000" fontSize="2.2rem"></Ionicon></span></label>
             <nav>
                 <ul className="navLinks">
                     <CreateNavLinks linksData={this.state.navLinksData} />
                 </ul>
             </nav>
            </div>
        )
    }
}