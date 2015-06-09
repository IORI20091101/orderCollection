var temp = new Date();
var regex = /\//g;
(temp.toLocaleDateString() + ' ' + temp.toLocaleTimeString().slice(2)).replace(regex,'-');

// "2015-5-7 9:04:10"