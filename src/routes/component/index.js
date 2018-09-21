import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'

import { Table } from 'antd';

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Action', dataIndex: '', key: 'x', render: () => <a href="#">Delete</a> },
];

const data = [
    { key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
    { key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
    { key: 3, name: 'Jo12e Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
];
class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultChecked: false,
            record: {}
        }
    }
    // getCheckboxProps = (record) => {
    //     return { defaultChecked: [record.key] }
    // }
    showRowTable = (record) =>{
        console.log(22,record.defaultChecked)
        if (record.defaultChecked) {
            return (<Table
                columns={columns}
                dataSource={record.data}
                rowSelection={{
                    getCheckboxProps(record) {

                        return { defaultChecked: [record.key] }
                    },
                    onChange: (selectedRowKeys, selectedRows) => {
                    }
                }}
            />)
        } else {
            return (<Table
                columns={columns}
                dataSource={record.data}
                rowSelection={{
                    getCheckboxProps(record) {

                        return {}
                    },
                    onChange: (selectedRowKeys, selectedRows) => {
                    }
                }}
            />)
        }   
    }
    returnCheckBox = () => {
        return this.state.defaultChecked ? { defaultChecked: [this.state.record.key] } : {}
    }
    render() {
        const { defaultChecked } = this.props
        const me = this
        return (
            <Table
                columns={columns}
                bordered={true}
                defaultExpandAllRows={false}
                dataSource={this.props.component.data}
                rowSelection={{
                    getCheckboxProps(record) {
                        return {}
                    },
                    onChange: (selectedRowKeys, selectedRows) => {
                        if (selectedRowKeys.length == 0) {
                            {/* this.setState({
                                defaultChecked:false,
                                record: selectedRows
                            }, this.returnCheckBox) */}
                            this.props.dispatch({
                                type: 'component/setDataFalse'
                            })
                        }else {
                            this.props.dispatch({
                                type: 'component/setDataTrue'
                            })
                            {/* this.setState({
                                defaultChecked: true,
                                record: selectedRows

                            }, this.returnCheckBox) */}
                        }
                    }
                }}
                expandedRowRender={record => (<Table
                        columns={columns}
                        dataSource={record.data}
                        rowSelection={{
                            selectedRowKeys: record.selectedRowKeys,
                            hideDefaultSelections: true,
                            onChange: (selectedRowKeys, selectedRows) => {
                                console.log('selectedRowKeys',selectedRowKeys)
                                this.props.dispatch({
                                    type: 'component/setSelecteKey',
                                    payload: selectedRowKeys
                                })
                            }
                        }}
                    />)
                }
            />
        )
    }
}

/* const Component = ({component, loading, pathname}) => {
   
    return (
        <Table
            columns={columns}
            bordered={true}
            defaultExpandAllRows={false}
            
            rowSelection={{
                
           
                getCheckboxProps(record) {
                    return {}
                },
                onChange:(selectedRowKeys, selectedRows) => {
                    if (selectedRowKeys.length == data.length) {
                        console.log('change', 'selectedRowKeys', selectedRowKeys)
                        this.setState({
                            defaultChecked: { defaultChecked: [record.key] }
                        })
                    }
                    if (selectedRowKeys.length == 0) {
                        console.log('change', 'selectedRowKeys', selectedRowKeys)
                        this.setState({
                            defaultChecked: {}
                        })
                    }
                }
            }}
            expandedRowRender={record => (<Table
                columns={columns}
                dataSource={data}
                rowSelection={{
                    getCheckboxProps(record) {
                        return this.state.defaultChecked
                    },
                    onChange: (selectedRowKeys, selectedRows) => {
                    }
                }}
            />)}
            dataSource={data}
        />
    )
} */

export default connect(({ component, loading }) => ({ component, loading }))(MyComponent)