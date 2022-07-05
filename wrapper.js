//by fp so i could run my own owot instance
var bsql = require("better-sqlite3");

function fixArgs(buffer) {
	if(!Array.isArray(buffer)) return buffer;
	for(var i = 0; i < buffer.length; i++) {
		if(typeof buffer[i] == "boolean") {
			buffer[i] = Number(buffer[i]);
		}
	}
	return buffer;
}

function Database(path) {
	var db = bsql(path);
	db.prepare("PRAGMA foreign_keys = OFF;").run();
	this.db = db;
}

Database.prototype.get = function(cmd, args, cb) {
	fixArgs(args);
	var res;
	var err = null;
	try {
		res = this.db.prepare(cmd).get(args);
	} catch(e) {
		err = e;
	}
	cb(err, res);
}

Database.prototype.run = function(cmd, args, cb) {
	fixArgs(args);
	var res;
	var err = null;
	try {
		res = this.db.prepare(cmd).run(args);
	} catch(e) {
		err = e;
	}
	var lastID = 0;
	var changes = 0;
	if(res) {
		lastID = res.lastInsertRowid;
		changes = res.changes;
	}
	cb.call({
		lastID, changes
	}, err, res);
}

Database.prototype.all = function(cmd, args, cb) {
	fixArgs(args);
	var res;
	var err = null;
	try {
		res = this.db.prepare(cmd).all(args);
	} catch(e) {
		err = e;
	}
	cb(err, res);
}

Database.prototype.each = function(cmd, args, itercb, cb) {
	fixArgs(args);
	var res = this.db.prepare(cmd);
	for(var i of res.iterate(args)) {
		itercb(res);
	}
	cb();
}

Database.prototype.exec = function(cmd, cb) {
	var res = this.db.exec(cmd);
	cb();
}

module.exports = {
	Database
};
