var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/dispatcher.js');
var ActionTypes = AppConstants.ActionTypes;

var AppActions = {
	addVideo:function(video){
		AppDispatcher.dispatch({
			type: ActionTypes.ADD_VIDEO,
			video: video
		})
	},
	removeVideo:function(index){
		AppDispatcher.dispatch({
			type: ActionTypes.REMOVE_VIDEO,
			index: index
		})
	}
}

module.exports = AppActions;