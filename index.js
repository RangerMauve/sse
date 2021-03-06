/*
 * SSE
 *
 * Copyright (c) 2014 RangerMauve
 * Licensed under the MIT license
 */
var EventEmitter = require("eventemitter2").EventEmitter2;

function SSE(url, options) {
	if (!(this instanceof SSE)) return new SSE(url, options);
	EventEmitter.call(this);
	var self = this;
	this.setMaxListeners(0);
	var sse = new EventSource(url);
	this.connection = sse
	this.has_registered = {};
	sse.onerror = function (e) {
		self.emit("error", e);
	}
	sse.onmessage = function (e) {
		self._emit_sse("message", e);
	}
}

SSE.prototype = Object.create(new EventEmitter());

SSE.prototype._listen_to_sse = function (event) {
	if (event in this.has_registered) return;
	var self = this;
	this.has_registered[event] = true;
	this.connection.addEventListener(event, function (e) {
		self._emit_sse(event, e);
	});
}

SSE.prototype._emit_sse = function (event, e) {
	var data = e.data;
	var self = this;
	try {
		var parsed = JSON.parse(data);
		self.emit(event, parsed);
	} catch (e) {
		self.emit(event, data);
	}
}

SSE.prototype.on = function (event) {
	this._listen_to_sse(event);
	EventEmitter.prototype.on.apply(this, arguments);
}

SSE.prototype.close = function () {
	this.connection.close();
}

SSE.prototype.isOpen = function () {
	return this.connection.readyState === this.connection.OPEN;
}

module.exports = SSE;
