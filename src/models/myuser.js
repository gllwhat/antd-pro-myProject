// models/users.js
// 监听路由信息 当路由信息是myuser的时候 发送action
import { hashHistory } from 'dva/router';
// import { query } from '../services/myuser';



export default {
    namespace: 'users',

    state: {
        list: [],
        total: null,
        loading: false, // 控制加载状态
        // current: true, // 当前分页信息
        currentItem: {}, // 当前操作的用户对象
        modalVisible: false, // 弹出窗的显示状态
        modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
    },
    // subscription监听数据
    subscriptions: {
        // 监听路由 当pathname为myuser的时候 发送action获得数据 异步操作
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/myuser') {
                    dispatch({
                        type: 'querySuccess',
                        payload: {}
                    });
                }
            });
        },
    },

    effects: {
        // *query({ payload }, { select, call, put }) {
        //     yield put({ type: 'showLoading' });
        //     const { data } = yield call(query);
        //     if (data) {
        //         yield put({
        //             type: 'querySuccess',
        //             payload: {
        //                 list: data.data,
        //                 total: data.page.total,
        //                 current: data.page.current
        //             }
        //         });
        //     }
        // },
        *query() {},
        *create() { },
        *'delete'() { },
        *update() { },
    },
    reducers: {
        // showLoading(state, action) {
        //     return { ...state, loading: true };
        // }, // 控制加载状态的 reducer
        // showModal() { }, // 控制 Modal 显示状态的 reducer
        // hideModal() { },
        // // 使用服务器数据返回
        // querySuccess(state, action) {
        //     return { ...state, ...action.payload, loading: false };
        // },
        showLoading() { }, // 控制加载状态的 reducer
        showModal() { }, // 控制 Modal 显示状态的 reducer
        hideModal() { },
        // 使用静态数据返回
        querySuccess(state) {
            const mock = {
                total: 3,
                // current: 1,
                loading: false,
                list: [
                    {
                        id: 1,
                        name: '张三',
                        age: 23,
                        address: '成都',
                    },
                    {
                        id: 2,
                        name: '李四',
                        age: 24,
                        address: '杭州',
                    },
                    {
                        id: 3,
                        name: '王五',
                        age: 25,
                        address: '上海',
                    },
                    {
                        id: 4,
                        name: '大眼怪',
                        age: 25,
                        address: '上海',
                    },
                    {
                        id: 5,
                        name: '宋书航',
                        age: 25,
                        address: '上海',
                    },
                    {
                        id: 6,
                        name: '豆豆',
                        age: 25,
                        address: '上海',
                    },
                    {
                        id: 7,
                        name: '楚楚',
                        age: 25,
                        address: '上海',
                    },
                    {
                        id: 8,
                        name: '大润发',
                        age: 25,
                        address: '上海',
                    },
                    {
                        id: 9,
                        name: '小面筋',
                        age: 25,
                        address: '上海',
                    },
                    {
                        id: 10,
                        name: '韩梅梅',
                        age: 25,
                        address: '上海',
                    },
                    {
                        id: 11,
                        name: '孙尚香',
                        age: 25,
                        address: '上海',
                    },
                    {
                        id: 12,
                        name: '大小姐',
                        age: 25,
                        address: '上海',
                    },
                ],

            };
            return { ...state, ...mock, loading: false };
        },
        createSuccess() { },
        deleteSuccess() { },
        updateSuccess() { },
    }
}