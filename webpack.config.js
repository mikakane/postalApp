module.exports = {
	"entry": {
        "common":"./coffee/common.coffee"
    },
	"output": {
		"filename": "public/assets/js/[name].bundle.js"
	},
    module: {
        loaders: [
            { test: /\.coffee/, loader: "coffee" },
            { test: /\.html/, loader: "html" }
        ]
    },
    resolve: {
        extensions:["",".coffee"]
    }
}