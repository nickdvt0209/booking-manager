import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import {
    HomeOutlined,
    SettingOutlined,
    TagsOutlined,
    ContainerOutlined,
} from '@ant-design/icons';

function MenuAdmin() {

    const [activeTab, setActiveTab] = useState()


    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab('TrangChu')
        } else if (location.pathname === '/quanlyve') {
            setActiveTab('QuanLyVe')
        } else if (location.pathname === '/doisoatve') {
            setActiveTab('DoiSoatVe')
        } else if (location.pathname === '/caidat/goidichvu') {
            setActiveTab('GoiDichVu')
        }
    }, [location]);

    return (
        <div className='menu'>
            <ul className='menu__list'>
                <li className='menu__item'>
                    <Link to='/' >
                        <span className={`menu__item-inner ${activeTab === 'TrangChu' ? 'active' : ''}`} onClick={() => setActiveTab('TrangChu')}>
                            <HomeOutlined className='menu__item-icon' />
                            Trang Chủ
                        </span>
                    </Link>
                </li>

                <li className='menu__item'>
                    <Link to='/quanlyve' >
                        <span className={`menu__item-inner ${activeTab === 'QuanLyVe' ? 'active' : ''}`} onClick={() => setActiveTab('QuanLyVe')}>
                            <TagsOutlined className='menu__item-icon' />
                            Quản lý vé
                        </span>
                    </Link>
                </li>

                <li className='menu__item'>
                    <Link to='/doisoatve' >
                        <span className={`menu__item-inner ${activeTab === 'DoiSoatVe' ? 'active' : ''}`} onClick={() => setActiveTab('DoiSoatVe')}>
                            <ContainerOutlined className='menu__item-icon' />
                            Đối soát vé
                        </span>
                    </Link>
                </li>

                <li className='menu__item'>
                    <span className='menu__item-inner'>
                        <SettingOutlined className='menu__item-icon' />
                        Cài đặt
                    </span>

                    <p className='menu__item-child'>
                        <Link to='/caidat/goidichvu' >
                            <span className={`menu__item-inner ${activeTab === 'GoiDichVu' ? 'active' : ''}`} onClick={() => setActiveTab('GoiDichVu')}>
                                Gói dịch vụ
                            </span>
                        </Link>
                    </p>

                </li>


            </ul>
        </div>
    )
}

export default MenuAdmin
