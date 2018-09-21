import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
// Users 的 Presentational Component
// 暂时都没实现
import UserList from './components/UserList';
import UserSearch from './components/UserSearch';
import UserModal from './components/UserModal';

// 引入对应的样式
// 可以暂时新建一个空的
import styles from './index.less';

// function Myuser() {

//     const userSearchProps = {};
//     const userListProps = {
//         total: 3,
//         current: 1,
//         loading: false,
//         dataSource: [
//             {
//                 name: '张三',
//                 age: 23,
//                 address: '成都',
//             },
//             {
//                 name: '李四',
//                 age: 24,
//                 address: '杭州',
//             },
//             {
//                 name: '王五',
//                 age: 25,
//                 address: '上海',
//             },
//         ],
//     };
//     const userModalProps = {};

//     return (
//         <div className={styles.normal}>
//             <h1>666</h1>
//             {/* 用户筛选搜索框 */}
//             <UserSearch {...userSearchProps} />
//             {/* 用户信息展示列表 */}
//             <UserList {...userListProps} />
//             {/* 添加用户 & 修改用户弹出的浮层 */}
//             <UserModal {...userModalProps} />
//         </div>
//     );
// }

// Myuser.propTypes = {
//     users: PropTypes.object,
// };

// export default Myuser;

const Myuser = ({ location, dispatch, users }) => {
    const {
    loading, list, total, current,
        currentItem, modalVisible, modalType
    } = users;

    const userSearchProps = {};

    const userListProps = {
        dataSource: list,
        total,
        loading,
        current,
    };
    // const userListProps = {
    //     total: 3,
    //     current: 1,
    //     loading: false,
    //     dataSource: [
    //         {
    //             name: '张三',
    //             age: 23,
    //             address: '成都',
    //         },
    //         {
    //             name: '李四',
    //             age: 24,
    //             address: '杭州',
    //         },
    //         {
    //             name: '王五',
    //             age: 25,
    //             address: '上海',
    //         },
    //     ],
    // };
    const userModalProps = {};
    const view = '';
    const selectChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className={styles.normal}>
            {/* 用户筛选搜索框 */}
            <UserSearch {...userSearchProps} />
            {/* 用户信息展示列表 */}
            <UserList {...userListProps} />
            {/* 添加用户 & 修改用户弹出的浮层 */}
            <UserModal {...userModalProps} />
            <div className={styles.formType}>
                <span>在这里选择：</span>
                <select name="select" id="" onChange={selectChange}>
                    <option value="空白" defaultValue></option>
                    <option value="1">aaaaa</option>
                    <option value="2">bbbbb</option>
                    <option value="3">ccccc</option>
                </select>
                <p>在这里显示：</p>
                <p>{view}</p>
            </div>
        </div>
    );
}
function mapStateToProps({ users }) {
    return { users };
}
export default connect(mapStateToProps)(Myuser);
// export default Myuser;