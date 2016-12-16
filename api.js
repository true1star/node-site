var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');


module.exports = function(wagner) {
    var api = express.Router();

	api.use(bodyparser.json());
	var array = [{ 
	 		school: "고려대",
		    	category: 3,
		    	topics: ["좋아하다","연락", "크리스마스"],
		    	contents: "너 말이야. 나한테 요새 누구 좋아하는 사람 생겼냐고, 연락하는 사람 생겼냐고, 크리스마스는 누구랑 보내고 싶냐고, 제발 묻지 좀 말아주라. 한 번만 더 물어봤다간 확 '너.' 라고 말해버린다!!!",
		    	date: 2016-12-16,
		    	like: 130,
		    	featured: false
		}];

	var exex123 = [{ 
	 		school: "고려대",
		    	category: 5,
		    	topics: ["상처", "응원", "기다림", "말"],
		    	contents: "그럼에도 불구하고. 저는 '그럼에도 불구하고' 라는 말을 좋아해요. 뭔가 이겨내는 느낌이 들어서 인지 제가 좋아하는 에세이 책안의 소제목이여서 인지는 저도 잘 모르겠지만 저 말이 되게 좋아요. 어느 말에 붙여놔도 말이 되니까요. 넌 내게 잊지못할 상처를 줬지만 그럼에도 불구하고 나는 너를 응원한다. 우린 너무 멀리 왔지만 그럼에도 불구하고 나는 너를 기다린다. 그럼에도 불구하고 네가 너무 보고싶다. 모두 붙여보세요..! '그럼에도 불구하고'",
		    	date: 2016-12-16,
		    	like: 130,
		    	featured: false
		},{ 
	 		school: "고려대",
		    	category: 2,
		    	topics: ["시험", "공부", "학기", "유급", "생활"],
		    	contents: "으아아아아아아아 본과 그켬 ㅎㅎ 예과생들 곧 본과네 얼른얼른 올라오거라 ㅎㅎㅎㅎㅎㅎ 왜 의대는 이렇게 할게 많은건가요 ㅠㅠㅠㅠㅠ 죽고싶다 일주일째 하루 2시간씩만 잤는데 물론 그전에 좀 놀긴 했지만 앞으로 이 생활을 일주일 더해야 한다닝이이ㅣ잉 미생물 약리학 병리학 기생층학 너무 할게 많아요ㅠㅠㅠㅠㅠㅠㅠ 우리학번 다같이 진급했으면 좋겠다아아아아아아아 그래도 이제 일즈일만 있으면 학기가 끝난다니 그나마 위로가 되네요ㅠㅠㅠ 제발 유급만은 안돼요 교수님들 ㅜㅜㅜㅜㅜㅜ 아이제 공부하러가야지 시험기간 다들 힘내세요 전 밤새러 갑니다",
		    	date: 2016-10-15,
		    	like: 44,
		    	featured: false
		},{ 
	 		school: "서울대",
		    	category: 7,
		    	topics: ["어머니","잠",,"피곤"],
		    	contents: "한밤중에 자다가 다리가 저려오는 게 느껴진다. 한 자세로 너무 오래 잤나보다. 잠결에 다리를 뒤척이려 움직여본다. 보통 사람이면 그냥 휙 뒤집고 그냥 또 잘 것이지만, 맞다 나는 안 되는구나 하고 다시 잠을 깨야 했다. 옆에서 깊이 잠이 드신 어머니를 벌써 3번째 깨우고 만다. 비몽사몽간에 신경질내면서 자세를 돌려주시곤 다시 쓰러지듯이 잠을 청하신다. 나도 부탁한다고 잠 다 깨선 15분쯤 잠 못 들다 겨우 다시 잠에 들지만 겨우 1시간 좀 넘어서 또 반복한다. 6번 넘게 계속 이러니 잠이 제대로 자질 리가 없다. 늦잠은 늦잠대로 자고 피로는 누적되어서 하루를 또 피곤하게 산다.",
		    	date: 2016-10-27,
		    	like: 1223,
		    	featured: false
		},{ 
	 		school: "서울대",
		    	category: 3,
		    	topics: ["고백","거절","친구"],
		    	contents: "오랫만이네요 대숲. 작년 여름 얘기에요. 어린 마음에 그 사람이 좋아졌고, 급하게 고백을 했다가 거절을 당했었죠. 그걸로 끝인줄 알았는데 우리는 그 다음 학기 교양에서 다시 만나게 됬고 뭔가 애매한 친구가 되었어요. 같은 수업 안에서 친구로서 지내는 기간이 길어질수록 그 사람은 '좋아하던 사람'에서 '그냥 친하고 편한 사람'이 되어갔죠. 그렇게 어떤 일도 없이 교양수업은 종강을 맞았고 그 뒤로는 정말 띄엄띄엄, 서너달에 한 번씩만 만나 밥을 먹으면서 이런저런 얘기만 하는? 정말 친구같은 사람이 되었죠. 잘 모르겠어요. 그 날 이후로 별 다른 연락은 하나도 없네요. 제가 먼저 말을 꺼내야되는건가요? 다가가야되는건가요? 그러기를 기다리는건가요... 아니면 제가 설레발을 치고 있는건가요.. 다른 분들의 생각을 들어보고 싶어요. 두서없는 주저리를 읽어주셔서 감사합니다ㅠㅠ ",
		    	date: 2016-10-13,
		    	like: 1213,
		    	featured: false
		},{ 
	 		school: "서울대",
		    	category: 7,
		    	topics: ["예쁘다","못생기다","외모","불공평","친구"],
		    	contents: "대숲! 저는 왜이렇게 예쁘지 않을까요... 주위에 너무 예쁜 친구들이 많아서 힘들어요. 물론 다들 이렇게 말해요. 그 친구는 그 친구고, 너는 너다. 예쁘다는 건 그냥 그 친구가 가진 하나의 장점이고 너에게도 그 이상의 무언가가 있을 거라고. 하지만 그래도 그 친구들이랑 비교를 하게 되는 것은 어쩔 수가 없어요. 제가 그렇게 못생긴 건 아니예요. 사실 못생겼다, 예쁘다의 기준은 제 만족도라고 생각을 하는데 저도 어느 정도는 제 얼굴에 만족하고 있어요. 그런데 앞서 이야기한 것처럼 너무 예쁜 친구들이 많아요. 예쁘면서 공부를 못하거나, 예쁘면서 사교성이 좀 떨어지거나 그런 것 같지도 않아요. 너무 불공평하지 않나하는 생각이 계속 들어요. 사실 예쁘다는 것도 하나의 특징일 뿐인데도, 얼굴이 예쁜 친구들은 그 특징 하나만으로도 너무 많은 것이 쉽게 이루어지는 것 같아요. 남자친구도 잘 사귀고, 동아리도 잘 들어가고, 선배들한테도 더 튀어서인지 선배들과도 잘 지내고... 이런 문제들은 본인이 노력하지 않아도 얻어지는 장점인거잖아요. 저는 친구들과 더 친해지고, 동아리에 들고, 선배들과 친해지기 위해서 정말 많은 노력을 하는데 그 친구는 저보다 적은 노력으로 많은 것을 얻어내는 것이 참 부러워요.",
		    	date: 2016-12-12,
		    	like: 329,
		    	featured: false
		},{ 
	 		school: "서울대",
		    	category: 3,
		    	topics: ["사랑", "힘", "설렘"],
		    	contents: "사랑이라는걸 이제 알았어.너를 떠올리며 하루를 시작하고, 지치고 피곤한 등교길에도 오늘 학교에서 너를 볼 수 있다는 것만으로도 힘이 났어.이번 학기에 너와 나는 참 자주 만났던 것 같아. 교양도 같이 듣고 전공도 같은 조이다보니 일주일에 하루를 제외하고는 수업이 겹쳤지.가끔 같이 듣는 수업에 너가 늦게 들어오는 날이면 옆자리를 비워두곤 했어. 그리고 강의실 뒤편에서 발자국 소리가 들리면 그게 너일까하며 뒤돌아보고, 너가 내 옆자리에 앉으면 너에게 내 신경이 집중되서 강의에는 집중을 할 수가 없었어.너와 같이 수업이 끝나고 걷다가 우연히 너와 나의 팔이 서로 스칠 때면, 내 마음은 설렘으로 스러져내렸어.",
		    	date: 2016-12-10,
		    	like: 113,
		    	featured: false
		},{ 
	 		school: "서울대",
		    	category: 7,
		    	topics: ["남초","공감","폭력","대화"],
		    	contents: "난 너한테 내가 남초과라서 겪었던 수많은 일들을 이야기 했었지만, 넌 위로는 커녕 듣고 표정만 썩치고 아무 말도 하지 않았었다. 나한테 공감같은 걸 해주려고 하지 않았다. 그리고 나중에는 내가 여초과가 아니라서 비싼 걸 안 입어도 되는 장점이 있다는 걸 이야기 한 적이 있었다. 너가 돈이 없어서 열등감이 있다는 것을 알고 있었고 지금도 알기 때문에 너가 저 말을 왜 뱉었었는지는 이해간다. 하지만 너의 열등감 때문에 나는 한번 더 상처를 입었다. 난 범죄를 당했는데 고작 비싼거 안 입어도 돼서 좋은 거야~ 라고 지랄을 했다니..ㅋㅋ작년 일이지만 너가 했던 뭣같았던 말들 중에 하나라서 기억을 하고 있다. 저 예시 말고도 너가 한 주옥같은 말들은 아직까지도 나한테 잊혀지지 않고 있다. 내가 한 말들에 대해서 저런 식으로 위로를 하는 것은 오히려 나한테 폭력이었다. 그래놓고 너는 내 태도에 대해서 내 성격이 싸가지가 없다는 식으로 대해왔었다. 너가 나한테 저지른 잘못은 없다고 생각하면서ㅋㅋㅋ그래서 내가 너랑 있을 때 말이 없어지는 거야ㅋㅋ 내가 뭔 말을 해봤자 맨스플레인 하지를 않나, 언어폭력을 하지를 않나.. 안 맞는 사람이랑은 대화 자체를 하기가 싫어ㅋㅋ 내가 말할 때마다 무시하고 나를 존중하지 않는 태도를 보이는 사람한테 내가 더이상 뭘 해야하나 싶다 ~~ 여튼 이제 더이상 너랑 엮이기도 싫고 이게 내가 널 좋아하지 않았던 가장 큰 이유야",
		    	date: 2016-12-9,
		    	like: 231,
		    	featured: false
		}];

	api.get('/createbam', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			
			Bamboo.
				create(array, function (err, bamboos) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ bamboos: bamboos });
                            });
		};
	}));

	
	api.get('/schools', wagner.invoke(function(School) {
		return function(req, res) {
			var sort = { date: 1 };
			
			School.
				find().
				exec(function(err, schools) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ schools: schools });
                            });
		};
	}));

	api.get('/categories', wagner.invoke(function(Category) {
		return function(req, res) {
			
			Category.
				find().
				exec(function(err, categories) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ categories: categories });
                            });
		};
	}));
	
	api.get('/bamboo', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			var sort = { date: 1 };
			
			Bamboo.
				find().
				sort(sort).
				exec(function(err, bamboos) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ bamboos: bamboos });
                            });
		};
	}));
	
	api.get('/bamboo/school/:school/:category?', wagner.invoke(function(Bamboo) {
		return function(req, res) {
		
			console.log(req.params);
			
			var query = { school : req.params.school };
			
			if ( req.params.category ){
				query["category"] = Number(req.params.category);
			}
			
			/*Bamboo.
				find(query).
				sort({ date : -1 }).
				exec(function(err, bamboos) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ bamboos: bamboos });
                });*/
                
				Bamboo.
				find(query).
				populate('category').
				sort({ date : 1 }).
				exec(function(err, bamboos) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ bamboos: bamboos });
                });
		};
	}));

	api.get('/bamboo/category/:category?', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			
			var query = {};
			console.log(req.params.category);
			if( req.params.category ){
				query = { category: Number(req.params.category) };
			}
			
			Bamboo.
				find(query).
				populate('category').
				sort({ date : 1 }).
				exec(function(err, bamboos) {
				
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            
                            res.json({ bamboos: bamboos });
				});
		};                            
	}));

	api.get('/bamboo/topics/:topic', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			
			Bamboo.
				find({ $text: { $search: req.params.topic } }).
				populate('category').
				sort({ date : 1 }).
				exec(function(err, bamboos) {
				
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            
                            res.json({ bamboos: bamboos });
				});
		};                            
	}));

	api.get('/bamboo/:query', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			Bamboo.
				find(
					{ $text : { $search: req.params.query } },
					{ score : { $meta: 'textScore' } }).
				sort({ score : { $meta: 'textScore' } }).
				limit(10).
				exec(function(err, bamboos) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ bamboos: bamboos });
                            });
		};
	}));
/*
    api.get('/category/id/:id', wagner.invoke(function(Category) {
                return function(req, res) {
                    Category.findOne({ _id: req.params.id }, function(err, category) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            if (!category) {
                                return res.
                                    status(status.NOT_FOUND).
                                    json({ error: 'Not found' });
                            }
                            res.json({ category: category });
                    });
                }
    }));
    
    api.get('/category/parent/:id', wagner.invoke(function(Category) {
                return function(req, res) {
                    Category.
                        find({ parent: req.params.id }).
                        sort({ _id: 1 }).
                        exec(function(err, categories) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ categories: categories });
                    });
                };
    }));
*/
    
    return api;
};
