/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store.js');
var RemoveFromPlaylist = require('./app-removefromplaylist.js');


function getPlaylist(){
	return {videos: AppStore.getPlaylist()}
}

var Playlist = React.createClass({
	getInitialState:function(){
		return getPlaylist();
	},
	componentWillMount:function(){
		AppStore.addChangeListener(this._onChange)
	},
	_onChange:function(){
		this.setState(getPlaylist());
	},

	render:function(){
		var videos = this.state.videos.map(function(video, i){
				return (<tr key={i}><td>{video.title}</td><td>{video.description}</td><td><RemoveFromPlaylist index={i} /></td>
				</tr>)
			})
			return (
				<table>{videos}</table>
			)
	}
})

module.exports = Playlist;