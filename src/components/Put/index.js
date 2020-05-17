import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Button, TextField} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: 'calc(100%/4)',
		},
	},
}));

export default function Put({putData}) {
	const classes = useStyles();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [id, setId] = useState('');

	const saveData = () => {
		const data = {};
		if (firstName) data.firstName = firstName;
		if (firstName) data.lastName = lastName;
		putData(parseInt(id), data);
	};

	return (
		<Box className={classes.root} noValidate autoComplete="off">
			<TextField label="id" variant="outlined" value={id} onChange={e => {
				const value = e.target.value;
				setId(value);
			}}/>
			<TextField label="First Name" variant="outlined" value={firstName} onChange={e => {
				const value = e.target.value;
				setFirstName(value);
			}}/>
			<TextField label="Last Name" variant="outlined" value={lastName} onChange={e => {
				const value = e.target.value;
				setLastName(value);
			}}/>
			<Button variant="contained" style={{height: '3.5rem'}} color="primary" onClick={saveData} disabled={!id}>
                Change It
			</Button>
		</Box>
	);
}

Put.propTypes = {
	putData: PropTypes.func.isRequired
};