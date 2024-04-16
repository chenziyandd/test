import React, { useEffect, useState } from "react";
import { DeleteOutlined } from '@ant-design/icons';
import './index.css';
import { Button, Space, Table, Modal } from 'antd';
import Modify from '../Modify';

const TableList = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);

    const showModal = row => {
        setEditData({ ...row });
    };
    useEffect(() => {
        if (editData) {
            setIsModalOpen(true);
        }
    }, [editData])

    const columns = [
        {
            title: '用户名',
            dataIndex: 'userName',
            key: 'userName',
            width: '30%',
        },
        {
            title: '密码',
            dataIndex: 'password',
            key: 'password',
            width: '20%',
        },
        {
            title: '手机号',
            dataIndex: 'phoneNum',
            key: 'phoneNum',
            width: '30%',
        },
        {
            title: '操作',
            dataIndex: 'opertation',
            key: 'opertation',
            width: '30%',
            render: (val, row) => {
                return <Space>
                    <Button onClick={() => showModal(row)}>编辑</Button>
                    <Button onClick={() => {
                        let newdata = [...props.data];
                        let index;
                        props.data.forEach((i, inde) => {
                            if (i.key === row.key) {
                                index = inde;
                            };
                        })
                        newdata.splice(index, 1);
                        props.setData(newdata);
                    }}><DeleteOutlined /></Button>
                </Space>
            }
        },
    ];
    return (<div className="tableLayout">
        <Table
            columns={columns}
            pagination={
                {
                    showTotal: (total) => `共 ${total} 项`,
                    showSizeChanger: true,
                    defaultPageSize: 20,
                    defaultCurrent: 1,
                }
            }
            dataSource={props.data}
        />
        {isModalOpen && <Modal title="编辑" open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)} >
            <Modify setData={props.setData} data={props.data} editData={editData} close={() => setIsModalOpen(false)} />
        </Modal>}
    </div>)

}
export default TableList;