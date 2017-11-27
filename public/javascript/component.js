(function () {
	var taskForm = {
		template:`<div class="bigDiv">
		<div id="mainDiv">
		<h1>TODO List</h1>
			<p>A place to store thet things you have to do!</p>
			<input type="text" id="search" ng-model="$ctrl.findItem" 
			placeholder=" Filter your to-dos">
			<task-list find-item="$ctrl.findItem" item-list="$ctrl.itemList"></task-list>
			<input id="adding" type="text" ng-model="$ctrl.add" 
			placeholder=" add your to-do">
		<button ng-click="$ctrl.addItem($ctrl.add)" click-directive>Add</button>
	</div>
	</div>`,
		controller: "FormController"
	}
	angular
	.module("app")
	.component("taskForm", taskForm);
})();