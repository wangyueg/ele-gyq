import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actionCreators';
import './index.less';

let OrderView = (props) => {

	const { OrderState } = props;
	const getPurchasedGoodsName = (purchasedGoods) => {
		let goodsName = [];
		purchasedGoods.map(item => {
			goodsName.push(item.name);
		});
		return goodsName.join(',');
	}

	//订单状态：订单已完成-1 订单配送中-2 订单已取消-3 
	//订单取消状态：您主动取消-1 商家取消-2 其他-0
	useEffect(() => {
		props.getOrdersList();
	}, []);
	
	//判断成功或者失败之后的操作
	useEffect(() => {
		if(OrderState.getOrdersListFlag) {
			if (OrderState.orderCode !== 0) {
				// alert(OrderState.ordersMsg);
			}
		}
	}, [OrderState.ordersData, OrderState.orderCode, OrderState.ordersMsg]); 

	return (
		<div className="ele-order-container">
			{(OrderState.ordersData || []).map((order, key) => {
				return (
					<div className="ele-order-item" key={key}>
						<div className="order-body">
							<img src={order.storeImageUrl} />
							<div className="order-message">
								<div className="order-status-store-name">
									<div className="store-name"><span>{order.storeName}</span><br /><span className="order-time">{order.orderTimeStr}</span></div>
									<div className="order-status">{order.orderStatus}</div>
								</div>
								<div className="goods-message">
									<span className="goods-name">{getPurchasedGoodsName(order.purchasedGoods)}</span>
									<span className="total-price">{order.totalPrice}</span>
								</div>
							</div>
						</div>
						{/* <div className="order-bottom">
							
						</div> */}
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