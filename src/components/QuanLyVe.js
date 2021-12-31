import React, { useState } from 'react';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import {
    Table, Tag, Pagination, Modal, Button, Radio, Input,
    DatePicker, Checkbox,
} from 'antd';


const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Booking code',
        dataIndex: 'bookingCode',
        key: 'bookingCode',
    },
    {
        title: 'Số vé',
        dataIndex: 'soVe',
        key: 'soVe',
    },
    {
        title: 'Tình trạng sử dụng',
        key: 'tinhTrang',
        dataIndex: 'tinhTrang',
        render: (tinhTrang) => {
            let color = '';
            switch (tinhTrang) {
                case 'Đã sử dụng': {
                    color = 'geekblue';
                }; break;
                case 'Chưa sử dụng': {
                    color = 'green';
                }; break;
                case 'Hết hạn': {
                    color = 'volcano';
                }; break;
            }
            return (
                <Tag color={color}>
                    {tinhTrang}
                </Tag>
            )

        },
    },
    {
        title: 'Ngày sử dụng',
        dataIndex: 'ngaySD',
        key: 'ngaySD',
    },
    {
        title: 'Ngày xuất vé',
        dataIndex: 'ngayXuatVe',
        key: 'ngayXuatVe',
    },
    {
        title: 'Cổng check - in',
        dataIndex: 'congCheckin',
        key: 'congCheckin',
    }
];

const data = [
    {
        key: '1',
        stt: '1',
        bookingCode: 'ALTFGHJU',
        soVe: '123456789034',
        tinhTrang: 'Đã sử dụng',
        ngaySD: '14/04/2021',
        ngayXuatVe: '10/04/2021',
        congCheckin: 'Cổng 1',
    },
    {
        key: '2',
        stt: '2',
        bookingCode: 'ALTFGHRE',
        soVe: '1234567FSSD34',
        tinhTrang: 'Chưa sử dụng',
        ngaySD: '14/04/2021',
        ngayXuatVe: '8/04/2021',
        congCheckin: 'Cổng 1',
    },
    {
        key: '3',
        stt: '3',
        bookingCode: 'ALTFRTYE',
        soVe: '123456723434',
        tinhTrang: 'Đã sử dụng',
        ngaySD: '15/04/2021',
        ngayXuatVe: '8/04/2021',
        congCheckin: 'Cổng 1',
    },
    {
        key: '4',
        stt: '4',
        bookingCode: 'ALTFRTYE',
        soVe: '123456723434',
        tinhTrang: 'Chưa sử dụng',
        ngaySD: '15/04/2021',
        ngayXuatVe: '8/04/2021',
        congCheckin: 'Cổng 1',
    },
    {
        key: '5',
        stt: '5',
        bookingCode: 'ALTFRTYE',
        soVe: '123456723434',
        tinhTrang: 'Hết hạn',
        ngaySD: '15/04/2021',
        ngayXuatVe: '8/04/2021',
        congCheckin: 'Cổng 1',
    },

];

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Cổng 1', 'Cổng 2', 'Cổng 3', 'Cổng 4', 'Cổng 5'];
const defaultCheckedList = [];

const Calendar = () => (
    <Input.Group compact>
        <DatePicker style={{ width: '60%', padding: '8px', cursor: 'pointer' }} className='modal-locve__calendar' />
    </Input.Group>
);

const TrangThai = () => {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Radio.Group onChange={onChange} value={value} className='select-trangthai'>
            <Radio value={1}>Tất cả</Radio>
            <Radio value={2}>Đã sử dụng</Radio>
            <Radio value={3}>Chưa sử dụng</Radio>
            <Radio value={4}>Hết hạn</Radio>
        </Radio.Group>
    );
};

const CongCheckIn = () => {
    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} className='check-all'>
                Tất cả
            </Checkbox>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} className='check-list' />
        </>
    );
};

const ModalLocVe = () => {
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
            <Button onClick={showModal} className='btn-locve'>
                <FilterOutlined />
                Lọc vé
            </Button>
            <Modal title="Lọc vé" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='modal-locve'>
                <div className='modal-locve__content'>
                    <div className='modal-locve__content-time'>
                        <div className='time-start'>
                            <p>Từ ngày</p>
                            <Calendar />
                        </div>
                        <div className='time-end'>
                            <p>Đến ngày</p>
                            <Calendar />
                        </div>
                    </div>
                    <div className='modal-locve__content-trangthai'>
                        <span>Tình trạng sử dụng</span>
                        <TrangThai />
                    </div>
                    <div className='modal-locve__content-congcheckin'>
                        <span className='text'>Cổng Check-in</span>
                        <CongCheckIn />
                    </div>
                </div>
                <div className='modal-locve__button'>
                    <button>Lọc</button>
                </div>
            </Modal>
        </>
    );
};

function QuanLyVe() {
    return (
        <div className='content'>

            <h2 className='content__title'>Danh sách vé</h2>
            <div className='content__searchButton'>
                <form className='content__searchButton-search'>
                    <input placeholder='Tìm bằng số vé'></input>
                    <SearchOutlined />
                </form>
                <div className='content__searchButton-button'>
                    <ModalLocVe />
                    <button className='xuatfile'>
                        <p>Xuất file (.csv)</p>
                    </button>
                </div>
            </div>
            <div className='content__table'>
                <Table className='content__table-table' columns={columns} dataSource={data} pagination={false} />
                <Pagination className='content__table-pagination' defaultCurrent={1} total={100} />
            </div>
        </div>
    )
}

export default QuanLyVe
