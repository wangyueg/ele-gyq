import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreator from './actionCreator';
import './index.less';

const Discover = (props) => {
	const { DiscoverState } = props;

	//get top_banner in discover
	useEffect(() => {
		props.getTopBanner();
	}, []);

	return (
		<div className='discover-container'>
			<div className='discover-top-banner'>
				{DiscoverState.topBanner && DiscoverState.topBanner.map(item => {
					return (
						<div className='discover-top-banner-item'>
							<div className='title'>
								<span style={{color: item.title_color}}>{item.title}</span>
								<span>{item.subtitle}</span>
							</div>
							<img src={item.icon} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default connect(
	state => { return {DiscoverState: state.DiscoverState} },
	dispatch => bindActionCreators({...actionCreator}, dispatch)	
)(Discover);