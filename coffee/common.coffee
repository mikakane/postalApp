

app = angular.module 'postalApp', ["ui.bootstrap"]

app.controller "postalCtrl",[
  "$scope","$http",
  ($scope,$http) ->
    $scope.postalCode = "";
    $scope.address = "";

    $scope.alerts = [];
    $scope.closeAlert = (index)->
      $scope.alerts.splice(index, 1);
    $scope.loadAddress = ->
      if $scope.postalCode.length == 7
        http = $http.get "/api/code/#{$scope.postalCode}"
        http.success (data)->
          console.log data
          for value in data.addressList
            msg = "#{value.postalCode} #{value.pref} #{value.city} #{value.address}"
            $scope.alerts.push { type: 'success', msg: msg }
        http.error (data)->
          $scope.alerts.push { type: 'danger', msg: '指定の郵便番号は見つかりませんでした。' }
      else
        $scope.alerts = [];


    console.log "hogehoge"

]