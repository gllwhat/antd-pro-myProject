import modelExtend from 'dva-model-extend'

export default modelExtend ({
    namespace: 'component',
    state: {
        data: [
            { 
                selectedRowKeys: [],
                key: 1, 
                name: 'John Brown', 
                age: 32, 
                address: 'New York No. 1 Lake Park', 
                description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
                data: [
                    { key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
                    { key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
                    { key: 3, name: 'Jo12e Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
                ]
             },
            { 
                selectedRowKeys: [],
                key: 2, 
                name: 'Jim Green', 
                age: 42, 
                address: 'London No. 1 Lake Park', 
                description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
                data: [
                    { key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
                    { key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
                    { key: 3, name: 'Jo12e Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
                ] },
            { 
                selectedRowKeys: [],
                key: 3, 
                name: 'Jo12e Black', 
                age: 32, 
                address: 'Sidney No. 1 Lake Park', 
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
                data: [
                    { key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
                    { key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
                    { key: 3, name: 'Jo12e Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
                ] },
        ],
        defaultChecked: false,
    },
    reducers: {
        setDefaultChecked(state) {
            return { ...state, defaultChecked: !state.defaultChecked}
        },
        setDataTrue(state) {
            
            let datas = state.data
            datas.map((item, index) => {
                for (let i = 1; i <= item.data.length; i++) {
                    item['selectedRowKeys'].push(i)
                }
            })
            console.log(true,datas)
            return { ...state, data: datas }
        },
        setDataFalse(state) {
            let datas = state.data
            datas.map((item, index) => {
                for (let i = 1; i <= item.data.length; i++) {
                    item['selectedRowKeys'] = []
                }
            })
            console.log(false, datas)

            return {...state, data: datas}
        },
        setSelecteKey(state, {payload}) {
            let datas = state.data
            datas.map((item, index) => {
                item['selectedRowKeys'] = payload
            })
            return { ...state, data: datas}
        }
    },
    effects: {

    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/dashboard' || pathname === '/') {
                   
                }
            })
        },
    },
})