import React from 'react';
import {BrowserRouter, Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import Login from './login';
import HomeView from './home';
import DiscoverView from './discover';
import OrderView from './order';
import ProfileView from './profile';
import MenuItem from 'components/menuTab/menuItem';
import elmImage0 from './images/elm-0.png';
import elmImage1 from './images/elm-1.png';
import discoverImage0 from './images/discover-0.png';
import discoverImage1 from './images/discover-1.png';
import orderImage0 from './images/order-0.png';
import orderImage1 from './images/order-1.png';
import profileImage0 from './images/profile-0.png';
import profileImage1 from './images/profile-1.png';
import './index.less';


export default (props) => {
	return (
		<BrowserRouter>
			<div className="ele-router-container">
				<Switch>
					<Route path="/msite" render={() => <HomeView name="HomeView" title="homeview" />} />
					<Route path="/discover" component={DiscoverView} />
					<Route path="/order" component={OrderView} />
					<Route path="/profile" component={ProfileView} />
					<Route path="/login" component={Login} />
					<Redirect to="/msite" />
				</Switch>
			</div>

			<div className="ele-menu-tabs">
				<MenuItem 
					to="/msite"
					title="首页"
					className="msite-item-tab"
					activeImage={elmImage1}
					depressiveImage={elmImage0}
				/>
				<MenuItem 
					to="/discover"
					title="发现"
					activeImage={discoverImage1}
					depressiveImage={discoverImage0}
				/>
				<MenuItem 
					to="/order"
					title="订单"
					activeImage={orderImage1}
					depressiveImage={orderImage0}
				/>
				<MenuItem 
					to="/profile"
					title="我的"
					activeImage={profileImage1}
					depressiveImage={profileImage0}
				/>
			</div>
		</BrowserRouter>
	);
}
