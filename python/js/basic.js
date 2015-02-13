var roll = function(){

	$("#front1").animate(
			{width: "hide"},
			{duration: 1500,
		     complete: function(){$("#front1").toggleClass("refrect");}})
		     .animate({width: "show"}, 1000)
		     .animate(
		    		 {width: "hide"},
		    		 {duration: 1000,
		    		  complete: function(){$("#front1").toggleClass("refrect");}})
		     .animate({width: "show"}, 1500);
	$("#front1").fadeTo("300", 0);
	$("#front1").fadeTo("200", 1);


}


var roll2 = function(){

	$("#illuminate").fadeTo(0,0);

	$("#front1").animate(
			{width: "1",
			 height: "170",
			},
			{duration: 700,
		     complete: function(){$("#front1").toggleClass("refrect");}})
		     .animate({width: "700", height:"138"}, 700)
		     .animate(
		    		 {width: "1" , height: "170"},
		    		 {duration: 700,
		    		  complete:
		    			  function(){$("#front1")
		    			  	.toggleClass("refrect")
		    		;}})
		     .animate(
		    		 {width: "700",height:"138"},
		    		 {duration:700,
		    		  complete:function(){
		    			  $("#illuminate")
		    			  	.fadeTo( 0 , 0.7 )
		    			  	.animate(
		    			  			{"left": "+=1700px"},
		    			  			{duration:500 , complete:function(){$("#illuminate").hide();
		    			  			}});
		    		 }
		    		 });}

$(function() {$("#front1").load(roll2);});