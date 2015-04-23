/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js');

var RemoveFromPlaylist = React.createClass({
	handleClick:function(){
		AppActions.removeVideo(this.props.index);
	},
	render:function(){
		return (
			<button onClick={this.handleClick}>Remove</button>
		)
	}
});
module.exports = RemoveFromPlaylist;