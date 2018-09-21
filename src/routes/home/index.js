// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'dva'
// import { Row, Col, Card } from 'antd'
// import Tab from './components/tabs'
// import styles from './index.less'

// // export default class Home extends Component {
// //     render() {
// //         return (
// //             <h1>home</h1>
// //         )
// //     }
// // }

// const Home = () => {
//     const cardNum = [1475, 321, 443, 12]
//     const gridStyle = {
//         width: '23%',
//         height: '110px',
//         marginRight: '20px',
//         textAlign: 'center',
//     };
//     const colors = ['#84c470', '#70c4b9', '#c49770', '#9970c4', '#c47083', '#c470ad'];
//     let idx0 = parseInt(Math.random() * 6)
//     let idx1 = parseInt(Math.random() * 6)
//     let idx2 = parseInt(Math.random() * 6)
//     let idx3 = parseInt(Math.random() * 6)
//     const homeCardsNumStyle0 = {
//         color: colors[idx0]
//     }
//     const homeCardsNumStyle1 = {
//         color: colors[idx1]
//     }
//     const homeCardsNumStyle2 = {
//         color: colors[idx2]
//     }
//     const homeCardsNumStyle3 = {
//         color: colors[idx3]
//     }
//     const selectChange = (e) => {
//         console.log(e.target.value)
//     }
//     return (
//         <section className={styles.homeContent}>
//             <Card>
//                 <Card.Grid style={gridStyle} className={styles.homeCards}>
//                     <span className={styles.homeCardsTitle}>Online Review</span>
//                     <span className={styles.homeCardsNum} style={homeCardsNumStyle0}>{cardNum[0]}</span>
//                 </Card.Grid>
//                 <Card.Grid style={gridStyle} className={styles.homeCards}>
//                     <span className={styles.homeCardsTitle}>New Customers</span>
//                     <span className={styles.homeCardsNum} style={homeCardsNumStyle1}>{cardNum[1]}</span>
//                 </Card.Grid>
//                 <Card.Grid style={gridStyle} className={styles.homeCards}>
//                     <span className={styles.homeCardsTitle}>Active Projects</span>
//                     <span className={styles.homeCardsNum} style={homeCardsNumStyle2}>{cardNum[2]}</span>
//                 </Card.Grid>
//                 <Card.Grid style={gridStyle} className={styles.homeCards}>
//                     <span className={styles.homeCardsTitle}>Referrals</span>
//                     <span className={styles.homeCardsNum} style={homeCardsNumStyle3}>{cardNum[3]}</span>
//                 </Card.Grid>
//             </Card>
//             <div className={styles.formType}>
//                 <span>在这里选择：</span>
//                 <select name="select" id="" onChange={selectChange}>
//                     <option value="空白" defaultValue></option>
//                     <option value="1">aaaaa</option>
//                     <option value="2">bbbbb</option>
//                     <option value="3">ccccc</option>
//                 </select>
//             </div>
//             <Tab></Tab>
//         </section>
//     )
// }



// export default Home;
