var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatchers/dispatcher');
var AppConstants = require('../constants/app-constants');

var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = "change";

var _catalog = [
	{id:1,title:'Video 1',description:'This is video 1.'},
	{id:2,title:'Video 2',description:'This is video 2.'},
	{id:3,title:'Video 3',description:'This is video 3.'}
];

var _playlist= [
	{id:4,title:'Video 4',description:'This is video 4.'}
];

function _addVideo(video){
	_playlist.push(video);
}

function _removeVideo(index){
	_playlist.splice(index,1);
}

var AppStore = 
assign({}, EventEmitter.prototype, {
	emitChange:function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener:function(callback){
		this.on(CHANGE_EVENT, callback) 
	}, 
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getCatalog: function(){ 
		return _catalog; 
	},
	getPlaylist: function(){
		return _playlist;
	}
})

AppStore.dispatchToken = 
AppDispatcher.register(
	function(action){ 
		switch(action.type){ 
			case ActionTypes.ADD_VIDEO: 
				_addVideo(action.video); 
				break;
			case ActionTypes.REMOVE_VIDEO:
				_removeVideo(action.index);
				break;
		}
	AppStore.emitChange(); 
})

module.exports = AppStore;