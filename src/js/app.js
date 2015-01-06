var courseMarkApp =  angular.module('CourseMark',[]);
// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

courseMarkApp.controller('CourseMarkCtrl', function($scope){

    $scope.courses = [{
        'text': "6.006",
        'link': "http://mit.edu/6.006",
        'color': "red",
        'id':0},
    {'text': "6.046",
        'link': "http://mit.edu/6.045",
        'color': "blue",
        'id':1
    }];
    // $scope.bookmarks=[];
    $scope.colorPicker = function(index){
        var colors ={
            0:'red',
            1:'green',
            2:'blue',
            3:'orange',
            4:'purple',
            5:'teal'
        };
        return colors[index];
    };
    $scope.user="Dang";
    $scope.text = "";
    $scope.link = "";
    $scope.newCourse = function(){
        $scope.courses.push({'text':$scope.text,
                        'link':$scope.link,
                        'color':$scope.colorPicker($scope.courses.length),
                        'id':$scope.courses.length});
        $scope.text = "";
        $scope.link = "";
    };

    $scope.deleteCourse = function(id){
        $scope.courses.remove(id);
    };

});
