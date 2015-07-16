
var biblioApp = angular.module('biblioApp', ['ngDialog']);

biblioApp.controller('MainCtrl', function($scope, ngDialog) {
	$scope.clickToOpen = function () {
		ngDialog.open({ template: 'popupTmpl' });
	};
});