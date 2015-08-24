var R;
var t = R.text(50, 50, "Raphaël\nkicks\nbutt!");

var max=tweet_data[0].favorite_count,loc;
	for (var sr = 1; sr < tweet_data.length; sr++)
	  {
	    if (tweet_data[sr].favorite_count > max)
	    {
	       max  = tweet_data[sr].favorite_count;
	    }
	  }

var generate_category=function(str) {

		if(str.match(/(\bcinema\b|\bcinemas\b|\bfilms\b|\bmovies\b|\bmovie\b|\bbioscope\b)/gi)) {
			return "#e41a1c";
		}

		else if(str.match(/(\bsport\b|\bfootball\b|\bcricket\b|\bkabaddi\b|\bisl\b)/gi)) {
			return "#fb9a99";
		}
		else if(str.match(/(jaya|abhishek|family|aishwarya|\bson\b|wives|wife|daughter|grand daughter|aradhya|mother|father)/gi)) {
			return "#33a02c";
		}
		else if(str.match(/(kbc)/gi)) {
			return "#ff7f00";
		}
		else if(str.match(/(india)/gi)) {
			return "purple";
		}
		else if(str.match(/(\bpeace\b|\bhappiness\b|\blove\b|\bfun\b|\bgreat\b|\bfantastic\b|\bwonderful\b|\bincredible\b|\bbrilliant\b)/gi)) {
			return "#969696";
		}
		else if(str.match(/(\W"\W|\W'\W)/gi)) {
			return "grey";
		}
		else
			return "black";
};

var populate_viz=function(obj){
R=Raphael(300,100,1000,1000);
var dta=obj.length;
var side=Math.ceil(Math.sqrt(dta));
sectionLayout(side,dta,obj);

function sectionLayout(sides,length,obj) {
 var radius = 10;
 var diameter = 2 * radius;
 var padding = 0;
 var recWidth = sides * diameter;
 var recHeight = sides * diameter;
 var i=0;

 /*function abc(i) {
this.attr("r",(10/max)*obj[i].favorite_count);
}*/
   for (var j = 0; j < sides; j++) {

     cy = 0 + radius + (j * diameter);

     for (var k = 0; k < sides; k++) {

       var cx = 0 + radius + (k * diameter);

       if(length>=0) {
       	   var anim = Raphael.animation({cx: cx, cy: cy}, 2e3);
       	   var colr=generate_category(obj[i].text);

	       var c = R.circle(0, 0, (10/max)*obj[i].favorite_count).attr({
	         fill: colr,
	         stroke: 'none'
	       }).data("i",obj[i].text).hover(function(){
            this.attr("title",this.data("i"));
            this.attr("r", 30);
            }).mouseout((function(m){return function(){
            	//abc.call(this,i);
            this.attr("r",(10/max)*obj[m].favorite_count);
            }})(i)).animate(anim);
	       length--;
	       i++;
  		}
       }
     }
   }    
};

populate_viz(tweet_data);