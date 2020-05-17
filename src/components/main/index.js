import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import {getEpisodes, postData, putData, deleteIt} from '../../redux/actions/main.action';
import TableHead from '@material-ui/core/TableHead';
import Post from '../Post';
import Put from '../Put';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {Tooltip} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
}));

const Main = props => {
	const classes = useStyles();
	const {mainReducer, getEpisodes, postData, putData, deleteIt} = props;
	const data = mainReducer.results;
	useEffect(() => {
		getEpisodes();
	}, [getEpisodes, mainReducer.saved, mainReducer.removed, mainReducer.edited]);

	console.log(data);

	return (
		<div className={classes.root}>
			{data && <>
				<Paper style={{marginBottom: '2rem'}}>
					<Post length={data.length} postData={postData}/>
					<Divider/>
					<Put putData={putData}/>
				</Paper>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>id</TableCell>
								<TableCell>First Name</TableCell>
								<TableCell>Last Name</TableCell>
								<TableCell>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((row) => (
								<TableRow key={row.uri}>
									<TableCell component="th" scope="row">
										{row.id}
									</TableCell>
									<TableCell>{row.firstName}</TableCell>
									<TableCell>{row.lastName}</TableCell>
									<TableCell> 
										<Tooltip placement={'top'} title={'remove it'}>
											<IconButton onClick={() => deleteIt(row.id)}>
												<DeleteIcon style={{color: 'red'}} color="action"/>
											</IconButton>
										</Tooltip>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer></>}
		</div>
	);
};

Main.propTypes = {
	getEpisodes: PropTypes.func.isRequired,
	putData: PropTypes.func.isRequired,
	postData: PropTypes.func.isRequired,
	deleteIt: PropTypes.func.isRequired,
	mainReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	mainReducer: state.mainReducer
});

const mapDispatchToProps = dispatch => ({
	getEpisodes: params => {
		dispatch(getEpisodes(params));
	},
	postData: data => {
		dispatch(postData(data));
	},
	putData: (id, data) => {
		dispatch(putData(id, data));
	},
	deleteIt: (id) => {
		dispatch(deleteIt(id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
