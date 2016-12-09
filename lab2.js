var fs = require("fs");
var data = fs.readFileSync('access.log', 'utf8');
var res = data.match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/ig);
var obj = {};
for (var i in res) {
	if (res[i] in obj) {
		obj[res[i]] += 1;
	}
	else obj[res[i]] = 1;
}
var d = "";
var keys = Object.keys(obj);
keys.sort();
for (var i in keys) {
	var g = keys[i].match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/i);
	if (g[0] != d) {
		console.log();
		console.log(g[0]);
		d = g[0];
	}
	console.log(keys[i], "-", obj[keys[i]]);
}
