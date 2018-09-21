import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
// import { query } from 'services/dashboard'
import { model } from 'models/common'

export default modelExtend(model, {
    namespace: 'home',

    state: {
        data: '这是data',
        list: [],
        total: null,
        loading: false, // 控制加载状态
        current: null, // 当前分页信息
        currentItem: {}, // 当前操作的用户对象
        modalVisible: false, // 弹出窗的显示状态
        modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
    },
    effects: {
        *query() { },
        *create() { },
        *'delete'() { },
        *update() { },
    },
    reducers: {
        showLoading() { }, // 控制加载状态的 reducer
        showModal() { }, // 控制 Modal 显示状态的 reducer
        hideModal() { },
        // 使用静态数据返回
        querySuccess(state) {
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
            }];
            return { ...state, ...mock, loading: false };
        },
        createSuccess() { },
        deleteSuccess() { },
        updateSuccess() { },
    }
})

