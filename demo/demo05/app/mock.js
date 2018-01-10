import Mock from 'mockjs'
import $ from 'jquery'

Mock.mock('http://baidu.com', {
	'name': "JingMiao",
	'age|1-100': 100,
	'color|4': [1, 2, 3]
})

$.ajax({
	url: 'http://baidu.com'
}).done(function(data, status, xhr) {
	document.getElementById('mock').innerHTML = data
})
