import React from 'react';
import { SearchOutlined, BellOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

function HeaderAdmin(props) {
    return (
        <div>
            <div className='header'>
                <div className='header__left'>
                    <Link to='/' >
                        <img className='header__left-logo' src='./img/logo-insight.png' />
                    </Link>
                </div>

                <div className='header__list'>
                    <div className='header__center'>
                        <form className='header__center-search'>
                            <input placeholder='Search...'></input>
                            <SearchOutlined />
                        </form>
                    </div>
                    <div className='header__right'>
                        <MailOutlined />
                        <BellOutlined />
                        <img src='./img/logo.png' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HeaderAdmin
