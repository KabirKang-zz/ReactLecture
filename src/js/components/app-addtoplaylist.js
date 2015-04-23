/** @jsx React.DOM */ 
var React = require('react');
var AppActions = require('../actions/app-actions.js');

var AddToPlaylist = React.createClass({
handleClick:function(){
	AppActions.addVideo(this.props.video);
},
render:function(){ 
	return ( <button onClick={this.handleClick}>Add to playlist</button> ) 
} 
});

module.exports = AddToPlaylist;
