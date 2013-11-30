function BoardController($scope) {
    $scope.names = [
                  {text:'Kamal is awesome!', hasBomb:false},
                  {text:'Hurray Birthday',   hasBomb:true}];
    $scope.isPlaying = true;
    
    $scope.reset = function() {
        $scope.names = [
                  {text:'Kamal is awesome!', hasBomb:false},
                  {text:'Hurray Birthday',   hasBomb:true}];
        $scope.clock = 0;
        $scope.isPlaying = true;
    };
    
    $scope.gotClicked = function() {
        alert("A button was clicked!");
    };
    
}

