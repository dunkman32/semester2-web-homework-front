import {combineReducers} from 'redux';

import MainReducer from './main.reducer';
import NotificationReducer from './notification.reducer';
import LoadingReducer from './loading.reducer';

const allReducers = combineReducers({
	mainReducer: MainReducer,
	notificationReducer: NotificationReducer,
	loadingReducer: LoadingReducer,
});

export default allReducers;
