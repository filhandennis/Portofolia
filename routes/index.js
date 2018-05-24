var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET home page. */
var file = fs.readFileSync('./public/content_IND.json','utf-8');
var json = JSON.parse(file);

router.get('/', function(req, res, next) {
	res.render('index', { title: 'My Activities: DNN', content: json });
});

router.get('/activity/:name', (req,res,next)=>{
	var data = json;
	var activities = json.profile.Activities;
	var activity = activities.find((act)=>(act.title).toLowerCase().replace(/\s+/g,"-")===req.params.name);
	var activityIndex = activities.findIndex((act)=>(act.title).toLowerCase().replace(/\s+/g,"-")===req.params.name);
	// res.json({content: activity, indexOf: activityIndex});
	res.render('detail', { title: activity.title, content: activity});
})

module.exports = router;
