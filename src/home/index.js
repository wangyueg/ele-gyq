import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actionCreators';

class HomeView extends React.Component {

	state = {
		count: 0,
	}

	click = () => {
		this.setState({count: this.state.count + 1});
		this.setState({count: this.state.count + 2});

		setTimeout(() => {
			this.setState({count: this.state.count + 2});
			this.setState({count: this.state.count + 2});
		});
	}

	componentWillMount() {
		console.log('will mount');
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('will update');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('should', nextState.count);
		return true;
	}

	render() {
		console.log('render ', this.state.count);
		return (
			<div>
				{this.state.count}
				<button onClick={this.click}>点击</button>
			</div>
		);
	}

	componentDidMount() {
		console.log('did mount', this.state.count);
		this.setState({count: this.state.count + 2});
		console.log('did mount2 ', this.state.count);
		this.setState({count: this.state.count + 2});
		console.log('did mount3 ', this.state.count);


	}

	componentDidUpdate(prevProps, prevState) {
		console.log('did update ', prevState.count);
		console.log('qlast did update ', this.state.count);
	}
}

export default connect(
	(state, ownProps) => (state) => {return {HomeState: state.HomeState}},
	(dispatch) => bindActionCreators({...actionCreators}, dispatch)
)(HomeView);
