import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs, Table  } from 'antd'

const TabPane = Tabs.TabPane;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];
const data1 = [{
    key: '1',
    name: 'John Brown1111',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green1111',
    age: 42,
    address: 'London No. 1 Lake Park',
}, 
{
    key: '3',
    name: 'Joe Black1111',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
},
    {
        key: '4',
        name: 'Joe Black1111',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '5',
        name: 'Joe Black1111',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '6',
        name: 'Joe Black1111',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '7',
        name: 'Joe Black1111',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '8',
        name: 'Joe Black1111',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '9',
        name: 'Joe Black1111',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '10',
        name: 'Joe Black1111',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '11',
        name: 'Joe Black1111',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '12',
        name: 'Joe Black1111',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '13',
        name: 'Joe Black1111',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '14',
        name: 'Joe Black1111',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];
const data2 = [{
    key: '1',
    name: 'John Brown2222',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green2222',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black2222',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}]
let data = data1;
const Tab = () => {

    function callback(key) {
        // (key == 1)? data = data1 : data = data2;
        data = key == 1 ? data1 : data2;
    }
    const table = (data) => {
       return (
           <div>
               <h4>Middle size table</h4>
               <Table columns={columns} dataSource={data} size="middle" />
           </div>
       )
    }
    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">{table(data1)}</TabPane>
            <TabPane tab="Tab 2" key="2">{table(data2)}</TabPane>
        </Tabs>
    )
}
// class Tab extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: '123'
//         }
//     }
//     render() {
//         const { data } = this.state;
//         return (
//             <h1>{data}</h1>
//         )
//     }
// }


export default Tab
