import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card, List } from 'antd'
import { color } from 'utils'
import { Page } from 'components'
import { NumberCard, Quote, Sales, Weather, RecentSales, Comments, Completed, Browser, Cpu, User } from './components'
import styles from './index.less'

const bodyStyle = {
    bodyStyle: {
        height: 432,
        background: '#fff',
    },
}
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
function Dashboard ({ dashboard, loading }) {
    const {
        weather, sales, quote, numbers, recentSales, comments, completed, browser, cpu, user,
    } = dashboard
    const numberCards = numbers.map((item, key) => (<Col key={key} lg={6} md={12}>
        <NumberCard {...item} />
    </Col>))

    return (
        <Page loading={loading.models.dashboard && sales.length === 0} className={styles.dashboard}>
            <Row gutter={24}>
                {numberCards}
                <Col lg={18} md={24}>
                    <Card bordered={false}
                        bodyStyle={{
                        padding: '24px 36px 24px 0',
                        }}
                    >
                        <Sales data={sales} />
                    </Card>
                </Col>
                <Col lg={6} md={24}>
                    <Row gutter={24}>
                        <Col lg={24} md={12}>
                            <Card bordered={false}
                                className={styles.weather}
                                bodyStyle={{
                                    padding: 0,
                                    height: 204,
                                    background: color.blue,
                                }}
                            >
                                <Weather {...weather} loading={loading.effects['dashboard/queryWeather']} />
                            </Card>
                        </Col>
                        <Col lg={24} md={12}>
                            <Card bordered={false}
                                className={styles.quote}
                                bodyStyle={{
                                    padding: 0,
                                    height: 310,
                                    background: color.peach,
                                }}
                            >
                                <Quote {...quote} />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col lg={12} md={24}>
                    <Card bordered={false} {...bodyStyle}>
                        <RecentSales data={recentSales} />
                    </Card>
                </Col>
                <Col lg={12} md={24}>
                    <Card bordered={false} {...bodyStyle}>
                        <Comments data={comments} />
                    </Card>
                </Col>
            </Row>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </Page>
    )
}

Dashboard.propTypes = {
    dashboard: PropTypes.object,
    loading: PropTypes.object,
}

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard)
