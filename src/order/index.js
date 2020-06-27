import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actionCreators';
import './index.less';

let OrderView = (props) => {
	//订单状态：订单已完成-1 订单配送中-2 订单已取消-3 
	//订单取消状态：您主动取消-1 商家取消-2 其他-0
	useEffect(() => {
		props.getOrdersList();
	}, []); 

	let orders = props.OrderState.ordersData ? props.OrderState.ordersData : [];

	return (
		<div className="ele-order-container">
			{orders.map((order, key) => {
				return (
					<div className="ele-order-item" key={key}>
						<div className="order-body">
							<div className="order-store-image"><img src={order.storeImageUrl} /></div>
							<div className="order-message">
								<div className="order-status-store-name">
									<div className="store-name"><span>{order.storeName}</span><br /><span className="order-time">{order.orderTimeStr}</span></div>
									<div className="order-status">{order.orderStatus}</div>
								</div>
								<div className="goods-message">
									<span className="goods-name">商品</span>
									<span className="total-price">{order.totalPrice}</span>
								</div>
							</div>
						</div>
						<div className="order-bottom">
							
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default connect(
	(state) => {return {OrderState: state.OrderState}},
	(dispatch) => bindActionCreators({...actionCreators}, dispatch)
)(OrderView);