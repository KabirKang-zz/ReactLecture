/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store.js');
var AddToPlaylist = require('./app-addtoplaylist.js');

function getCatalog(){
	return {videos:AppStore.getCatalog()}
}

var Catalog =
React.createClass({
	getInitialState:function(){
		return getCatalog();
	},
	render:function(){
		var videos = this.state.videos.map(function(video,i){
			return (<tr key={i}><td>{video.title}</td><td>{video.description}</td>
				<td><AddToPlaylist video={video} /></td>
				</tr>)
		})
		return (
			<table>{videos}</table>
		)
	}
})

module.exports = Catalog;