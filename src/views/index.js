import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Main from '../components/main';
import './styles/episodes.css';
import './styles/sheared.css';
import ParticlesBg from '../components/particles';

const Episodes = props => {
	const {history} = props;

	return (
		<div className='main'>
			<div style={{height: 100}}>
				<div style={{position: 'relative', height: '45vh'}}>
					<ParticlesBg numbers={ 100}/>
				</div>
			</div>
			<div className={'paper'}>
				<Main main history={history}/>
			</div>
		</div>
	);
};


const mapStateToProps = state => ({
	episodesReducer: state.episodesReducer
});

Episodes.propTypes = {
	history: PropTypes.object.isRequired,
	episodesReducer: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Episodes);
