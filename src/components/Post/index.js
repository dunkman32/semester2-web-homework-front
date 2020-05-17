import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Button, TextField} from '@material-ui/core';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: 'calc(100% / 4)',
		},
	},
}));

export default function Post({length, postData}) {
	const classes = useStyles();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const saveData = () => {
		const data = {
			firstName,
			lastName,
			id: length + 1,
			uri: `/user-management/${length + 1}`
		};
		if (firstName && lastName)
			postData(data);
	};

	return (
		<Box className={classes.root} noValidate autoComplete="off">
			<TextField label="First Name" variant="outlined" value={firstName} onChange={e => {
				const value = e.target.value;
				setFirstName(value);
			}}/>
			<TextField label="Last Name" variant="outlined" value={lastName} onChange={e => {
				const value = e.target.value;
				setLastName(value);
			}}/>
			<Button variant="contained" color="primary" onClick={saveData} style={{height: '3.5rem'}} disabled={!firstName || !lastName}>
                Save It
			</Button>
		</Box>
	);
}

Post.propTypes = {
	postData: PropTypes.func.isRequired,
	length: PropTypes.number.isRequired,
};