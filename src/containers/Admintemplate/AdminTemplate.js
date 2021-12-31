import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DoiSoatVe from 'components/DoiSoatVe';
import GoiDichVu from 'components/GoiDichVu';
import HeaderAdmin from 'components/HeaderAdmin';
import MenuAdmin from 'components/MenuAdmin';
import QuanLyVe from 'components/QuanLyVe';
import TrangChu from 'components/TrangChu';

function AdminTemplate() {
    return (
        <BrowserRouter>
            <div className='homeAdmin'>
                <HeaderAdmin />
                <div className='homeAdmin__body'>
                    <MenuAdmin />
                    <Switch>
                        <Route exact path="/" component={TrangChu} />
                        <Route path="/quanlyve" component={QuanLyVe} />
                        <Route path="/doisoatve" component={DoiSoatVe} />
                        <Route path="/caidat/goidichvu" component={GoiDichVu} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default AdminTemplate
