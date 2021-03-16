import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../../features/userSlice';
import { auth } from '../../../firebase';
import HeaderOption from '../../components/HeaderOption'

import './styles.scss'

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className='header'>

            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""></img>

                <div className="header__search">
                    <Search />
                    <input placeholder="Search" type="text"/>
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={Home} title='Home'/>
                <HeaderOption Icon={SupervisorAccount} title='My Network'/>
                <HeaderOption Icon={BusinessCenter} title='Jobs'/>
                <HeaderOption Icon={Chat} title='Messaging'/>
                <HeaderOption Icon={Notifications} title='Notifications'/>
                <HeaderOption avatar={true}
                    title='me'
                    onClick={logoutOfApp}/>
            </div>
        </div>
    )
}

export default Header
