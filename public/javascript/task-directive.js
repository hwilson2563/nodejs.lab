(function () {
	function taskDirective () {
		return {
			restrict: "A",
			link: function ($scope, $element, $attrs){
			$element.on("mouseenter", function() { 
				console.log($element);
				$element.css("background-color", "#EEE");
			});
				$element.on("mouseleave", function() { 
				$element.css("background-color", "");
			});
			$element.on("mouseenter", function(){
				var icon = $element[0].lastElementChild;
				icon.style.color = "#FF0000";
			});
			$element.on("mouseleave", function(){
				var icon = $element[0].lastElementChild;
				icon.style.color = "";
			});
		}
	
	}
}



	angular 
		.module("app")
		.directive("taskDirective", taskDirective);
})();