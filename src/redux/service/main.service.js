import axios from 'axios';

const readEpisodes = () => axios.get('/users');
const readEpisodesById = id => axios.get(`/users/${id}`);
const saveUser = data => axios.post('/users/', data);
const editUser = (id, data) => axios.put(`/users/${id}`, data);
const remove = (id) => axios.delete(`/users/${id}`);


export {
	readEpisodes,
	readEpisodesById,
	saveUser,
	editUser,
	remove
};
