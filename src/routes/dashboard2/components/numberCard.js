import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card } from 'antd' 
// countUp 数字递增动画 start 起始值 end 结束值
// 
import CountUp from 'react-countup'
import styles from './numberCard.less'

const NumberCard = ({ icon, color, title, number, countUp, haha }) => {
return (
    <Card className={styles.numberCard} bordered={false} bodyStyle={{ padding: 0 }}>
    <Icon className={styles.iconWarp} style={{ color }} type={icon} />
    <div>
        <p>{title}</p>
        <p>
        <CountUp
            start={0}
            end={number}
            duration={2.75}
            useEasing
            useGrouping
            separator=","
            {...countUp || {}}
        />
        </p>
    </div>
    </Card>
)
}
console.log(777, NumberCard.props)
// function NumberCard ({
//   icon, color, title, number, countUp,
// }) {
//   return (
//     <Card className={styles.numberCard} bordered={false} bodyStyle={{ padding: 0 }}>
//       <Icon className={styles.iconWarp} style={{ color }} type={icon} />
//       <div className={styles.content}>
//         <p className={styles.title}>{title || 'No Title'}</p>
//         <p className={styles.number}>
//           <CountUp
//             start={0}
//             end={number}
//             duration={2.75}
//             useEasing
//             useGrouping
//             separator=","
//             {...countUp || {}}
//           />
//         </p>
//       </div>
//     </Card>
//   )
// }

// NumberCard.propTypes = {
//   icon: PropTypes.string,
//   color: PropTypes.string,
//   title: PropTypes.string,
//   number: PropTypes.number,
//   countUp: PropTypes.object,
// }

export default NumberCard
