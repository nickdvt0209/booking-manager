import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {
    Table, Pagination, Radio, Space, Input,
    DatePicker,
} from 'antd';


const Calendar = () => (
    <Input.Group compact>
        <DatePicker style={{ width: '100%', padding: '4px', cursor: 'pointer' }} />
    </Input.Group>
);



const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Số vé',
        dataIndex: 'soVe',
        key: 'soVe',
    },


    {
        title: 'Ngày sử dụng',
        dataIndex: 'ngaySD',
        key: 'ngaySD',
    },
    {
        title: 'Tên loại vé',
        dataIndex: 'tenLoaiVe',
        key: 'tenLoaiVe',
    },
    {
        title: 'Cổng check - in',
        dataIndex: 'congCheckin',
        key: 'congCheckin',
    },
    {
        title: 'Ghi chú',
        dataIndex: 'ghiChu',
        key: 'ghiChu',
        render: text => <span style={{ color: 'red', fontStyle: 'italic' }}>{text}</span>,
    }
];

const data = [
    {
        key: '1',
        stt: '1',
        soVe: '123456789',
        ngaySD: '14/04/2021',
        tenLoaiVe: 'vé cổng',
        congCheckin: 'Cổng 1',
        ghiChu: 'Đã đối soát'
    },
    {
        key: '2',
        stt: '2',
        soVe: '123456789',
        ngaySD: '14/04/2021',
        tenLoaiVe: 'vé cổng',
        congCheckin: 'Cổng 1',
        ghiChu: 'Đã đối soát'
    },
    {
        key: '3',
        stt: '3',
        soVe: '123456789',
        ngaySD: '14/04/2021',
        tenLoaiVe: 'vé cổng',
        congCheckin: 'Cổng 1',
        ghiChu: 'Đã đối soát'
    },
    {
        key: '4',
        stt: '4',
        soVe: '123456789',
        ngaySD: '14/04/2021',
        tenLoaiVe: 'vé cổng',
        congCheckin: 'Cổng 1',
        ghiChu: 'Đã đối soát'
    },
    {
        key: '5',
        stt: '5',
        soVe: '123456789',
        ngaySD: '14/04/2021',
        tenLoaiVe: 'vé cổng',
        congCheckin: 'Cổng 1',
        ghiChu: 'Đã đối soát'
    },
    {
        key: '6',
        stt: '6',
        soVe: '123456789',
        ngaySD: '14/04/2021',
        tenLoaiVe: 'vé cổng',
        congCheckin: 'Cổng 1',
        ghiChu: 'Đã đối soát'
    },
    {
        key: '7',
        stt: '7',
        soVe: '123456789',
        ngaySD: '14/04/2021',
        tenLoaiVe: 'vé cổng',
        congCheckin: 'Cổng 1',
        ghiChu: 'Đã đối soát'
    },
    {
        key: '8',
        stt: '8',
        soVe: '123456789',
        ngaySD: '14/04/2021',
        tenLoaiVe: 'vé cổng',
        congCheckin: 'Cổng 1',
        ghiChu: 'Đã đối soát'
    },
    {
        key: '9',
        stt: '9',
        soVe: '123456789',
        ngaySD: '14/04/2021',
        tenLoaiVe: 'vé cổng',
        congCheckin: 'Cổng 1',
        ghiChu: 'Đã đối soát'
    },
    {
        key: '10',
        stt: '10',
        soVe: '123456789',
        ngaySD: '14/04/2021',
        tenLoaiVe: 'vé cổng',
        congCheckin: 'Cổng 1',
        ghiChu: 'Đã đối soát'
    },
];

class App extends React.Component {
    state = {
        value: 1,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { value } = this.state;
        return (
            <Radio.Group onChange={this.onChange} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>Tất cả</Radio>
                    <Radio value={2}>Đã đối soát</Radio>
                    <Radio value={3}>Chưa đối soát</Radio>
                </Space>
            </Radio.Group>
        );
    }
}

function DoiSoatVe() {
    return (
        <div className='doisoatve'>
            <div className='content__doisoatve'>
                <h2 className='content__title'>Đối soát vé</h2>
                <div className='content__searchButton'>
                    <form className='content__searchButton-search'>
                        <input placeholder='Tìm bằng số vé'></input>
                        <SearchOutlined />
                    </form>
                    <div className='content__searchButton-button'>
                        <button className='chotdoisoat'>
                            <p>Chốt đối soát</p>
                        </button>
                    </div>
                </div>
                <div className='content__table'>
                    <Table className='content__table-table' columns={columns} dataSource={data} pagination={false} />
                    <Pagination className='content__table-pagination' defaultCurrent={1} total={100} />
                </div>
            </div>

            <div className='content__locve'>
                <h5 className='content__locve-title'>Lọc vé</h5>
                <table>
                    <thead>
                        <tr>
                            <th>Tình trạng đối soát</th>
                            <td>
                                <App />
                            </td>
                        </tr>
                        <tr>
                            <th>Loại vé</th>
                            <td>Vé cổng</td>
                        </tr>
                        <tr>
                            <th>Từ ngày</th>
                            <td> <Calendar /> </td>
                        </tr>
                        <tr>
                            <th>Đến ngày</th>
                            <td> <Calendar /></td>
                        </tr>
                    </thead>
                </table>
                <div className='content__locve-button'>
                    <button>
                        Lọc
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DoiSoatVe
