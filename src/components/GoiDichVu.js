import React, { useState } from 'react';
import { SearchOutlined, FormOutlined, ClockCircleOutlined } from '@ant-design/icons';
import {
    Table, Tag, Pagination, Modal, Button, Input,
    DatePicker, Checkbox, Select
} from 'antd';
import { fireDB } from '../Firebase';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




const initialState = {
    tenGoiVe: '',
    ngayApDung: '',
    ngayHetHan: '',
    giaVe: '',
    giaCombo: '',
    tinhTrang: ''
}




const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Mã gói vé',
        dataIndex: 'maGoiVe',
        key: 'maGoiVe',
    },
    {
        title: 'Tên gói vé',
        dataIndex: 'tenGoiVe',
        key: 'tenGoiVe',
    },
    {
        title: 'Ngày áp dụng',
        dataIndex: 'ngayApDung',
        key: 'ngayApDung',
    },
    {
        title: 'Ngày hết hạn',
        dataIndex: 'ngayHetHan',
        key: 'ngayHetHan',
    },
    {
        title: 'Giá vé (VNĐ/Vé)',
        dataIndex: 'giaVe',
        key: 'giaVe',
    },
    {
        title: 'Giá Combo (VNĐ/Combo)',
        dataIndex: 'giaCombo',
        key: 'giaCombo',
    },
    {
        title: 'Tình trạng',
        dataIndex: 'tinhTrang',
        key: 'tinhTrang',
        render: (tinhTrang) => {
            let color = '';
            switch (tinhTrang) {
                case 'Đang áp dụng': {
                    color = 'green';
                }; break;
                case 'Tắt': {
                    color = 'volcano';
                }; break;
            }
            return (
                <Tag color={color}>
                    {tinhTrang}
                </Tag>
            )

        }
    },
    {
        title: 'Ghi Chú',
        dataIndex: 'ghiChu',
        key: 'GhiChu',
        render: text => (
            <div>
                <FormOutlined />
                <span style={{ color: '#ff993c' }}>
                    <CapNhatGoiVe />
                    {text}
                </span>
            </div>
        )
    }
];

const data = [
    {
        key: '1',
        stt: '1',
        maGoiVe: 'ALT20210501',
        tenGoiVe: 'Gói gia đình',
        ngayApDung: '14/04/2021',
        ngayHetHan: '14/04/2021',
        giaVe: '90.000 VNĐ',
        giaCombo: '360.000 VNĐ/4 Vé',
        tinhTrang: 'Đang áp dụng',
        ghiChu: ''
    },
    {
        key: '2',
        stt: '2',
        maGoiVe: 'ALT20218501',
        tenGoiVe: 'Gói sự kiện',
        ngayApDung: '14/04/2021',
        ngayHetHan: '14/04/2021',
        giaVe: '20.000 VNĐ',
        giaCombo: '',
        tinhTrang: 'Tắt',
        ghiChu: ''
    },
];

const { Option } = Select;


const Calendar = () => (
    <Input.Group compact>
        <DatePicker style={{ width: '100%', padding: '8px', cursor: 'pointer' }} className='modal-locve__calendar' />
    </Input.Group>
);



const ModalThemGoiVe = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [dsGoiVe, setDsGoiVe] = useState(initialState);
    const [data, setData] = useState({});
    const { tenGoiVe, ngayApDung, ngayHetHan, giaVe, giaCombo, tinhTrang } = dsGoiVe;
    // const history = useHistory();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDsGoiVe({ ...dsGoiVe, [name]: value })
        // console.log(e.target.name)
        // console.log(e.target.value)
        console.log(dsGoiVe)

    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     console.log(fireDB)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!tenGoiVe) {
            toast.error("nhap name")
        } else {

            // fireDB.child("DSGoiVe").push(dsGoiVe, (err) => {
            //     if (err) {
            //         toast.error(err);
            //     } else {
            //         toast.success("thanh cong");
            //     }
            // });
        }
    };

    return (
        <>
            <Button onClick={showModal} className='btn-themstate'>
                Thêm Gói Vé
            </Button>
            <Modal title="Thêm Gói Vé" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='modal-themgoive'>
                <div className='modal-themgoive__content'>
                    <div className='modal-themgoive__content-input'>
                        <p>Tên gói vé <span>*</span></p>
                        <input
                            type='text'
                            id='name'
                            name='tenGoiVe'
                            value={tenGoiVe}
                            onChange={handleInputChange}
                            placeholder='Nhập tên gói vé' />
                    </div>
                    <div className='modal-themgoive__content-time'>
                        <div className='time-list'>
                            <p>Ngày áp dụng</p>
                            <div className='time-item'>
                                <Calendar className='time-item-calendar' />
                                <form className='time-item-hour'>
                                    <input placeholder='hh:mm:ss'></input>
                                    <ClockCircleOutlined />
                                </form>
                            </div>
                        </div>
                        <div className='time-list'>
                            <p>Ngày hết hạn</p>
                            <div className='time-item'>
                                <Calendar className='time-item-calendar' />
                                <form className='time-item-hour'>
                                    <input placeholder='hh:mm:ss'></input>
                                    <ClockCircleOutlined />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='modal-themgoive__content-giave'>
                        <p>Giá vé áp dụng</p>
                        <div className='modal-themgoive__content-giave-list'>
                            <Checkbox className='checkbox' />
                            <span>Vé lẻ (vnđ/vé) với giá</span>
                            <input placeholder='Giá vé' />
                            <span>/vé</span>
                        </div>
                        <div className='modal-themgoive__content-giave-list'>
                            <Checkbox className='checkbox' />
                            <span>Combo vé với giá</span>
                            <input placeholder='Giá vé' />
                            <span>/vé</span>
                        </div>
                    </div>
                    <div className='modal-themgoive__content-tinhtrang'>
                        <p className='text'>Tình trạng</p>
                        <Select
                            labelInValue
                            defaultValue={{ value: 'dangsudung' }}
                            style={{ width: 170 }}
                            className='tinhtrang-select'
                        >
                            <Option value="dangsudung">Đang áp dụng</Option>
                            <Option value="option2">Option 2</Option>
                            <Option value="option3">Option 3</Option>
                        </Select>
                    </div>
                    <div>
                        <i><span style={{ color: 'red' }}>*</span> là thông tin bắt buộc</i>
                    </div>
                </div>
                <div className='modal-themgoive__button'>
                    <button onClick={handleCancel}>HUỶ</button>
                    {/* <button>LƯU</button> */}
                    <button onClick={handleSubmit}>LƯU</button>
                </div>
            </Modal>
        </>
    );
};

const CapNhatGoiVe = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button onClick={showModal} className='btn-capnhat'>
                Cập nhật
            </Button>
            <Modal title="Cập nhật thông tin gói vé" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='modal-themgoive modal-capnhatgoive'>
                <div className='modal-themgoive__content'>
                    <div className='modal-capnhatgoive__listinput'>
                        <div className='modal-themgoive__content-input modal-capnhatgoive__iteminput'>
                            <p>Mã sự kiện <span>*</span></p>
                            <input value={'PKG20210502'} />
                        </div>

                        <div className='modal-themgoive__content-input modal-capnhatgoive__iteminput'>
                            <p>Tên sự kiện </p>
                            <input value={'Hội chợ triển lãm hàng tiêu dùng 2021'} />
                        </div>
                    </div>

                    <div className='modal-themgoive__content-time'>
                        <div className='time-list'>
                            <p>Ngày áp dụng</p>
                            <div className='time-item'>
                                <Calendar className='time-item-calendar' />
                                <form className='time-item-hour'>
                                    <input placeholder='hh:mm:ss'></input>
                                    <ClockCircleOutlined />
                                </form>
                            </div>
                        </div>
                        <div className='time-list'>
                            <p>Ngày hết hạn</p>
                            <div className='time-item'>
                                <Calendar className='time-item-calendar' />
                                <form className='time-item-hour'>
                                    <input placeholder='hh:mm:ss'></input>
                                    <ClockCircleOutlined />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='modal-themgoive__content-giave'>
                        <p>Giá vé áp dụng</p>
                        <div className='modal-themgoive__content-giave-list'>
                            <Checkbox className='checkbox' />
                            <span>Vé lẻ (vnđ/vé) với giá</span>
                            <input placeholder='Giá vé' />
                            <span>/vé</span>
                        </div>
                        <div className='modal-themgoive__content-giave-list'>
                            <Checkbox className='checkbox' />
                            <span>Combo vé với giá</span>
                            <input placeholder='Giá vé' />
                            <span>/vé</span>
                        </div>
                    </div>
                    <div className='modal-themgoive__content-tinhtrang'>
                        <p className='text'>Tình trạng</p>
                        <Select
                            labelInValue
                            defaultValue={{ value: 'dangsudung' }}
                            style={{ width: 170 }}
                            className='tinhtrang-select'
                        >
                            <Option value="dangsudung">Đang áp dụng</Option>
                            <Option value="option2">Option 2</Option>
                            <Option value="option3">Option 3</Option>
                        </Select>
                    </div>
                    <div>
                        <i><span style={{ color: 'red' }}>*</span> là thông tin bắt buộc</i>
                    </div>
                </div>
                <div className='modal-themgoive__button'>
                    <button>HUỶ</button>
                    <button>LƯU</button>
                </div>
            </Modal>
        </>
    );
};


function GoiDichVu() {
    return (
        <div className='content goidichvu'>
            <h2 className='content__title'>Danh sách vé</h2>
            <div className='content__searchButton'>
                <form className='content__searchButton-search'>
                    <input placeholder='Tìm bằng số vé'></input>
                    <SearchOutlined />
                </form>
                <div className='content__searchButton-button'>

                    <button className='xuatfile'>
                        <p>Xuất file (.csv)</p>
                    </button>

                    <ModalThemGoiVe />
                </div>
            </div>
            <div className='content__table'>
                <Table className='content__table-table' columns={columns} dataSource={data} pagination={false} />
                <Pagination className='content__table-pagination' defaultCurrent={1} total={100} />
            </div>
        </div>
    )
}

export default GoiDichVu
