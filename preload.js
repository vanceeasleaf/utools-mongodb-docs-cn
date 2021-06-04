// utools.onPluginReady(function () {});

// utools.onPluginEnter(function (code, type, payload) {});
window.exports = {
	'mongodb-docs-cn': {
		mode: 'doc',
		args: {
			indexes: require('./indexes.json'),
			/**
             *  indexes:[
            {
               t: '这是标题',
               d: '这是描述',
               p: 'doc/xxx.html' //页面, 只能是相对路径
            }
         ],
             */
		},
		placeholder: '搜索',
	},
};
