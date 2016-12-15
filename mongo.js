//db test
/*
var mongoose = require('mongoose');
var wagner = require('wagner-core');
mongoose.connect('mongodb://localhost:27017/text');

require('./models')(wagner);

wagner.factory('db', function(){
		return mongoose;
	});

var Category = require('./category');
var Bamboo = require('./bamboo');

var cat = new Category({ _id:999, categories: ["가족","할미새"]})

cat.save(function(err) {
	if(err) return handleError(err);

	var bamboo = new Bamboo({
				school: "고려대",
				category: cat._id,
				topics: ["토픽하나","토픽","토픽셋"],
				contents: "새 아니더면, 우리의 튼튼하며, 인도하겠다는 목숨을 노래하며 무한한 듣는다. 인간이 기관과 방황하여도, 무엇이 피다. 영락과 실로 두기 같이, 뜨고, 끝까지 관현악이며, 보라. 그들을 청춘은 싹이 같이, 얼마나 열매를 아름다우냐? 때에, 품고 창공에 붙잡아 피부가 하는 있을 것이다. 끝까지 이 가치를 별과 싶이 행복스럽고 듣는다. 그들은 넣는 천지는 피다.",
				date: "12-12-12",
				like: 123,
				featured: true
				});
	bamboo.save(function(err){
		if(err) return handleError(err);
	});
	
	Bamboo
		.findOne({ date: "12-12-12" })
		.populate('category')
		.exec(function (err, bamboo) {
  			if (err) return handleError(err);
  			console.log('category:', bamboo.category.categories);
		});
});
*/
