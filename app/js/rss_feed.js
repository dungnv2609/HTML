$(document).ready(function() {
	//feed to parse
	rssRender(feed_sec1, '#sec1_rss',1);
	rssRender(feed_sec3, '#sec3_rss',5)
	
});
function rssRender(feed, idElement, max) {
	$.ajax(feed, {
		accepts:{
			xml:"application/rss+xml"
		},
		dataType:"xml",
		success:function(data) {
			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
			var number = 0
			$(data).find("item").each(function () { // or "item" or whatever suits your feed
				var el = $(this);
				number ++;
				if(number <= max){
				// console.log("------------------------");
					var pubDate = new Date(el.find("pubDate").text());
					/*var textPubDate = pubDate.getFullYear()+'.'+pubDate.getMonth()+'.'+pubDate.getDay();*/
                    var textPubDate = pubDate.getFullYear()+'.'+('0' + (pubDate.getMonth() + 1)).slice(-2)+'.'+('0' + (pubDate.getDate() + 1)).slice(-2);
				// console.log("date      : " + textPubDate);
				// console.log("title      : " + el.find("title").text());
				// console.log("link       : " + el.find("link").text());
				// console.log("aaa       : " + idElement);
				
					$(idElement).append($("<dl class='clearfix'><dt>"+textPubDate+"</dt><dd><a href='" + el.find("link").text() + "'target='_blank'>" + el.find("title").text() + "</a></dd></dl>"));
				}
			});
		}	
	});
}
        