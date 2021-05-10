function initLayout() {

	$(".tools-list .disabled img").css("opacity", 0.3);
	$(".tools-list .disabled a").css("cursor", "default");
	$(".tools-list .disabled a").click(function () {
		return false;
	});

	si = $(".toolbar-search input[type=text]")

	$(si).focus(function () {
		if ($(si).attr("value") == $(si).attr("title")) {
			$(si).attr("value", "");
		}
		$(si).parent().addClass("focus");
	});

	$(si).blur(function () {
		if ($(si).attr("value") == "") {
			$(si).attr("value", $(si).attr("title"));
		}
		$(si).parent().removeClass("focus");
	});


	$(".menuAdvanced, .menuApplication").bind("click", function () {
		$("#menuTop a").removeClass("active");
		$(this).addClass("active");
	});

	$(".linkAdvSearchHide, .menuAppllication").click(function () {
		$(".toolbar-advanced-search").slideUp("medium", function () {});

		Advanced.clearOverlays();

		$(".toolbar-advanced-search-expand").show();
		$(".toolbar-search-submit").removeClass("disabled");
		$('.toolbar-search-input').removeAttr('disabled');
		$('.toolbar-search-submit').attr('onclick', 'searchSimple.search();');

		return false;

	});


	$(".popup .header a.close").click(function () {

		$(this).parent().parent().parent().hide();

	});

	$(".draggable").draggable({ handle: ".header" });

	$(".toolbar-search-submit:not(.disabled)").click(function () {
		$(this).next().click();
	});

	$(".popup .content .inside").jScrollPane({ showArrows: true });

	// reset Advanced Search Form values
	$("#advancedSearchResetForm").click(function() {
		$('#advancedSearchName, #advancedSearchYearFrom, #advancedSearchYearTo, #TYP, #advancedSearchScale, #advancedSearchClub, #advancedSearchAuthor, #advancedSearchGPS, #advancedSearchPlace, #advancedSearchDistance').val('').placeholder();
	});

	$(document).on('mouseenter', 'ul.tools-list', initPreviewAndInfo);

}
