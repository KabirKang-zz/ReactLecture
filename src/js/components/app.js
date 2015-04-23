/** @jsx React.DOM */
var React = require('react');
var Catalog = require('./app-catalog.js');
var Playlist = require('./app-playlist.js');

var APP = React.createClass({
		render:function(){
			return (
				<div>
				<div>
					<h1>Catalog</h1>
					<Catalog />
				</div>
				<div>
					<h1>Playlist</h1>
					<Playlist />
				</div>
				</div>
			)
		}
});

module.exports = APP;