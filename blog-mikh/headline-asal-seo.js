<script type='text/javascript'>
//<![CDATA[
// Breaking News
$(document).ready(function(){var e="https://www.naminakiky.com/",t=10;$.ajax({url:""+e+"/feeds/posts/default?alt=json-in-script&amp;max-results="+t,type:"get",dataType:"jsonp",success:function(e){function t(){$("#recentbreaking li:first").slideUp(function(){$(this).appendTo($("#recentbreaking ul")).slideDown()})}var n,r,a="",i=e.feed.entry;if(void 0!==i){a="<ul>";for(var l=0;l<i.length;l++){for(var s=0;s<i[l].link.length;s++)if("alternate"==i[l].link[s].rel){n=i[l].link[s].href;break}r=i[l].title.$t,a+='<li><i class="fa fa-check-square"></i><a href="'+n+'" target="_blank">'+r+"</a></li>"}a+="</ul>",$("#recentbreaking").html(a),setInterval(function(){t()},5e3)}else $("#recentbreaking").html("<span>There nothing here?</span>")},error:function(){$("#recentbreaking").html("<strong>Error Loading Feed!</strong>")}})});
//]]>
</script>
