(function (){
	function clickDirective () {
		return {
			restrict: "A",
			link: function ($scope, $element, $attrs){
				$element.on("mouseleave", function() { 
				$element.css("background-color", "#FF69B4");
			});
				$element.on("mouseenter", function() { 
				$element.css("background-color", "#FF1493");
			});
		}
	}






	}
	angular
		.module("app")
		.directive("clickDirective",clickDirective)
})();