const fs = require('fs');
const temme = require('temme').default;
let list = fs.readdirSync('pages');
let indexes = [];
list.forEach((e) => {
	if (e.includes('.html')) {
		let s = fs.readFileSync('pages/' + e, 'utf8');
		let obj = temme(s, `title{$title}`);
		title = obj.title.split(/ [-|] /)[0];
		console.log(title);
		indexes.push({ t: title, d: obj.title, p: 'pages/' + e });
	}
});
fs.writeFileSync('./indexes.json', JSON.stringify(indexes, null, 2));
