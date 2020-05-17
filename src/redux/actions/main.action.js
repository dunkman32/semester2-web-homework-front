import {readEpisodes, readEpisodesById, saveUser, editUser, remove} from '../service/main.service';
import NotificationHandler, {NOTIFICATION_ERROR} from './notification.action';
import toggleLoading from './loading.action';

const getEpisodes = () => {
	return async dispatch => {
		await dispatch(toggleLoading(true));
		try {
			const res = await readEpisodes();
			if (res.data) {
				const data = res.data.user;
				dispatch({
					type: 'GET_USER',
					results: data,
				});
			}
		}catch (e) {
			dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
		}finally {
			dispatch(toggleLoading(false));
		}
	};
};

const postData = (data) => {
	return async dispatch => {
		await dispatch(toggleLoading(true));
		try {
			await saveUser(data);
			dispatch({
				type: 'SAVE_USER',
				saved: true
			});
		}catch (e) {
			dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
		}finally {
			dispatch(toggleLoading(false));
			dispatch({
				type: 'SAVE_USER',
				saved: false
			});
		}
	};
};
const putData = (id, data) => {
	return async dispatch => {
		await dispatch(toggleLoading(true));
		try {
			await editUser(id, data);
			dispatch({
				type: 'EDIT_USER',
				edited: true
			});
		}catch (e) {
			dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
		}finally {
			dispatch(toggleLoading(false));
			dispatch({
				type: 'EDIT_USER',
				edited: false
			});
		}
	};
};
const deleteIt = (id) => {
	return async dispatch => {
		await dispatch(toggleLoading(true));
		try {
			await remove(id);
			dispatch({
				type: 'DELETE_USER',
				removed: true
			});
		}catch (e) {
			dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
		}finally {
			dispatch(toggleLoading(false));
			dispatch({
				type: 'DELETE_USER',
				removed: false
			});
		}
	};
};


const getEpisodesById = id => async dispatch => {
	await dispatch(toggleLoading(true));
	try {
		const response = await readEpisodesById(id);
		if (response.data) {
			const episodes = response.data;
			dispatch({
				type: 'GET_USER_BY_ID',
				episodes
			});
		}
	} catch (e) {
		dispatch(NotificationHandler(NOTIFICATION_ERROR, `Server error - ${e.message}`));
	}finally {
		dispatch(toggleLoading(false));
	}
};

export {
	getEpisodes,
	getEpisodesById,
	postData,
	deleteIt,
	putData
};
