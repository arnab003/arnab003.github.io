(function() {

	//takes tweets as input
	//analyse category of tweets
	//returns color codes of analyzed category
	var generate_category = function(str) {

		if ( str.match(/(\bcinema\b|\bcinemas\b|film|\bmovies\b|\bmovie\b|\bbioscope\b|\bshooting\b)/gi) ) {
			return "#e41a1c";
		}

		else if ( str.match(/(\bsport\b|\bfootball\b|\bcricket\b|\bkabaddi\b|\bisl\b)/gi) ) {
			return "#fb9a99";
		}
		else if ( str.match(/(jaya|abhishek|family|aishwarya|\bson\b|wives|wife|daughter|grand daughter|aradhya|mother|father)/gi) ) {
			return "#33a02c";
		}
		else if ( str.match(/(kbc)/gi) ) {
			return "#ff7f00";
		}
		else if ( str.match(/(india)/gi) ) {
			return "#428bca";
		}
		else if ( str.match(/(\bpeace\b|\bhappiness\b|\blove\b|\bfun\b|\bgreat\b|\bfantastic\b|\bwonderful\b|\bincredible\b|\bbrilliant\b)/gi) ) {
			return "purple";
		}
		else if ( str.match(/(\W"\W|\W'\W)/gi) ) {
			return "#969696";
		}
		else
			return "#754719";
	};//end of generate_category()

	//render bubbles according to it's analyzed category
	(function render() {

		var R = Raphael ( 600,5,750,650 ),
		R_text = Raphael ( 600,5,400,200 ),
		limit = 0,
		l = 0,
		level_angle,
		angle = 0,
		data_limit = tweet_data.length,
		data_limit_copy = data_limit,
		anim,
		bubbles = [],
		objct,
		level_angle_factor = 1,
		max = tweet_data[0].favorite_count,
		loc,
		i,
		j,
		t,
		c;

		//search for the maximum favorite count of the tweets
		for ( i = 1; i < tweet_data.length; i++ ) {

			if ( tweet_data[i].favorite_count > max ) {
				max  = tweet_data[i].favorite_count;
			}
		}

		//stores each bubble details(coordinates, radius, datas) in an array of objects
		for ( i = 0; i < data_limit; ) {

			if ( i % 6 == 0 ) {
				limit+= 6;
				l+= 20;
				level_angle = 60 * ( 1 / level_angle_factor );
			}

			for ( j = 0; j < limit; j++ ) {

				if ( data_limit_copy > 0) {

					objct= {
						cx : 400 + ( l * Math.cos(angle * (Math.PI / 180))),
						cy : 330 + ( l * Math.sin(angle * (Math.PI / 180))),
						radius : Math.ceil(((10 / max) * tweet_data[i].favorite_count) + 3),
						color : generate_category(tweet_data[i].text),
						date : tweet_data[i].created_at,
						data : "Tweet: " + tweet_data[i].text + "\nFavorite Count: " + tweet_data[i].favorite_count + "\nRetweet Count: " + tweet_data[i].retweet_count + "\nDate: " + tweet_data[i].created_at
					}
					bubbles.push(objct);
					data_limit_copy--;
					angle+= level_angle;
					i++;
				}//end of if

			}//end of inner loop
			level_angle_factor++;
		}//end of outer loop

		//render bubbles in a circular pattern with animations and binding interactivty to each bubble
		for ( i = 0; i < bubbles.length; i++) {

			(function(index) {
				setTimeout(function() {
					R_text.clear();
					t = R_text.text(150, 20, "Tweets: "+(index+1)+"\n"+bubbles[index].date).attr({ "font-family": "arial", fill: "black", "font-size": 15 });
					anim = Raphael.animation({cx: bubbles[index].cx, cy: bubbles[index].cy}, 2e3);
					c = R.circle(Math.floor(Math.random() * 751), Math.floor(Math.random() * 651), bubbles[index].radius).attr({
						fill: bubbles[index].color,
						stroke: 'none',
					}).data("i",bubbles[index].data).hover(function(){//adding hover functionality to each bubble
						this.attr("title",this.data("i"));
						this.attr("r", 20);
						this.attr("stroke", "black");
						this.attr('fill-opacity', 0.7);
					}).mouseout((function(m){return function(){//adding mouseout functionality to each bubble
						this.attr("r",bubbles[m].radius);
						this.attr("stroke", "none");
						this.attr('fill-opacity', 1);
					}})(index)).animate(anim); 
				}, i * 100);
			})(i);
		}//end of loop

	})();//end of render()

})();

//-----------------------------------EXPERIMENT---------------------------------------------

/*var x,y,angle1=0,angle2=0,angle3=0, angle4=0,count=1;*/

/*for ( var i=0;i<6;i++) {

	x=150+(20*Math.cos(angle1 * (Math.PI / 180)));
	y=150+(20*Math.sin(angle1 * (Math.PI / 180)));

	var c = R.circle(x, y, 10).attr({
	 fill: "black",
	 stroke: 'none'
	}).data("i",count).hover(function(){
            this.attr("title",this.data("i"));
            });
	angle1+=60;
	count++;
}

for ( var i=0;i<12;i++) {

	x=150+(40*Math.cos(angle2 * (Math.PI / 180)));
	y=150+(40*Math.sin(angle2 * (Math.PI / 180)));

	var c = R.circle(x, y, 10).attr({
	 fill: "black",
	 stroke: 'none'
	}).data("i",count).hover(function(){
            this.attr("title",this.data("i"));
            });
	angle2+=30;
	count++;
}

for ( var i=0;i<18;i++) {

	x=150+(60*Math.cos(angle3 * (Math.PI / 180)));
	y=150+(60*Math.sin(angle3 * (Math.PI / 180)));

	var c = R.circle(x, y, 10).attr({
	 fill: "black",
	 stroke: 'none'
	}).data("i",count).hover(function(){
            this.attr("title",this.data("i"));
            });
	angle3+=20;
	count++;
}

for ( var i=0;i<24;i++) {

	x=150+(80*Math.cos(angle4 * (Math.PI / 180)));
	y=150+(80*Math.sin(angle4 * (Math.PI / 180)));

	var c = R.circle(x, y, 10).attr({
	 fill: "black",
	 stroke: 'none'
	}).data("i",count).hover(function(){
            this.attr("title",this.data("i"));
            });
	angle4+=15;
	count++;
}

var angle5=0;
for ( var i=0;i<30;i++) {

	x=150+(100*Math.cos(angle5 * (Math.PI / 180)));
	y=150+(100*Math.sin(angle5 * (Math.PI / 180)));

	var c = R.circle(x, y, 10).attr({
	 fill: "black",
	 stroke: 'none'
	}).data("i",count).hover(function(){
            this.attr("title",this.data("i"));
            });
	angle5+=12;
	count++;
}*/