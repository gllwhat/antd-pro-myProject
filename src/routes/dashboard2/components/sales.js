import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { color } from 'utils'
import { Table } from 'antd'
import styles from './sales.less';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, 
{
    title: 'Clothes',
    dataIndex: 'Clothes',
}, 
{
    title: 'Food',
    dataIndex: 'Food',
},
{
    title: 'Electronics',
    dataIndex: 'Electronics',
},];

function Sales({ data }) {
    return (
        <section>
            <div>
                <h2 style={{ textAlign: 'center'}}>table</h2>
                <Table columns={columns} dataSource={data} size="middle" />
            </div>
        </section>
    )
}

Sales.propTypes = {
data: PropTypes.array,
}

export default Sales
