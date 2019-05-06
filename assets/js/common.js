function pageOnload (i, links) {
    $(i).load(links);    
}

function winPopup(winWidth, winHeight, winName) {
    var popupX = (window.innerWidth / 2) - (winWidth / 2);
    var popupY= (window.innerHeight / 2) - (winHeight / 2);
//    var requestValue = document.getElementById("Name").value;                  // 전송 파라미터 값
//    var theURL = "/servlet/servlet.ExampleOpenUrl?requestValue="+requestValue; // 전송 URL
    window.open('./comp-popup-test.html', winName, 'scrollbars=no, width='+ winWidth +', height='+ winHeight +'px,  left='+ popupX + ', top=20px');
}

function alignModal(){
    var modalDialog = $(this).find(".modal-dialog");
    
    // Applying the top margin on modal dialog to align it vertically center
    modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
}

$(function() {
	$(window).on("resize", function(){
	    $(".modal:visible").each(alignModal);
	});   
})