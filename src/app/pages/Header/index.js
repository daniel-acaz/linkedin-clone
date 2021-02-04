import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from '@material-ui/icons'
import React from 'react'
import HeaderOption from '../../components/HeaderOption'

import './styles.scss'

function Header() {
    return (
        <div className='header'>

            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""></img>

                <div className="header__search">
                    <Search />
                    <input type="text"/>
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={Home} title='Home'/>
                <HeaderOption Icon={SupervisorAccount} title='My Network'/>
                <HeaderOption Icon={BusinessCenter} title='Jobs'/>
                <HeaderOption Icon={Chat} title='Messaging'/>
                <HeaderOption Icon={Notifications} title='Notifications'/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQEgDmC_X7CpLA/profile-displayphoto-shrink_800_800/0/1591225980254?e=1617840000&v=beta&t=weJedQ3150hg1gFoOgHceYK9IfjVEO7ixq2DhVSjo6A"
                    title='me'/>
            </div>
        </div>
    )
}

export default Header
