import './index.pug'
import './app.sass'
import 'semantic-ui/dist/semantic.css'
window.$ = window.jQuery = require('jquery')
require('semantic-ui/dist/semantic.js')

$(document).ready(function(){
  function getinfo(){
    var info = AndroidInterface.getInfo();
    if(info != undefined){
      var info_obj = JSON.parse(info);
      document.getElementById("totalHr").innerHTML = info_obj["time"]["total"]["hr"];
      document.getElementById("totalMin").innerHTML = info_obj["time"]["total"]["min"];
      document.getElementById("totalSec").innerHTML = info_obj["time"]["total"]["sec"];
      document.getElementById("fbHr").innerHTML = info_obj["time"]["fb"]["hr"];
      document.getElementById("fbMin").innerHTML = info_obj["time"]["fb"]["min"];
      document.getElementById("fbSec").innerHTML = info_obj["time"]["fb"]["sec"];
      document.getElementById("igHr").innerHTML = info_obj["time"]["ig"]["hr"];
      document.getElementById("igMin").innerHTML  = info_obj["time"]["ig"]["min"];
      document.getElementById("igSec").innerHTML  = info_obj["time"]["ig"]["sec"];
      document.getElementById("lineHr").innerHTML  = info_obj["time"]["line"]["hr"];
      document.getElementById("lineMin").innerHTML  = info_obj["time"]["line"]["min"];
      document.getElementById("lineSec").innerHTML  = info_obj["time"]["line"]["sec"];
      document.getElementById("ytHr").innerHTML  = info_obj["time"]["youtube"]["hr"];
      document.getElementById("ytMin").innerHTML  = info_obj["time"]["youtube"]["min"];
      document.getElementById("ytSec").innerHTML  = info_obj["time"]["youtube"]["sec"];

      document.getElementById("totalKm").innerHTML  = info_obj["dist"]["total"]["km"];
      document.getElementById("totalM").innerHTML  = info_obj["dist"]["total"]["m"];
      document.getElementById("totalCm").innerHTML  = info_obj["dist"]["total"]["cm"];
      document.getElementById("fbKm").innerHTML  = info_obj["dist"]["fb"]["km"];
      document.getElementById("fbM").innerHTML  = info_obj["dist"]["fb"]["m"];
      document.getElementById("fbCm").innerHTML  = info_obj["dist"]["fb"]["cm"];
      document.getElementById("igKm").innerHTML  = info_obj["dist"]["ig"]["km"];
      document.getElementById("igM").innerHTML  = info_obj["dist"]["ig"]["m"];
      document.getElementById("igCm").innerHTML  = info_obj["dist"]["ig"]["cm"];
      document.getElementById("lineKm").innerHTML  = info_obj["dist"]["line"]["km"];
      document.getElementById("lineM").innerHTML  = info_obj["dist"]["line"]["m"];
      document.getElementById("lineCm").innerHTML  = info_obj["dist"]["line"]["cm"];
      document.getElementById("ytKm").innerHTML  = info_obj["dist"]["youtube"]["km"];
      document.getElementById("ytM").innerHTML  = info_obj["dist"]["youtube"]["m"];
      document.getElementById("ytCm").innerHTML  = info_obj["dist"]["youtube"]["cm"];
    }
  }
  var flag = false;
  $('#startBtn').click(function(){
    console.log('click');
    flag = !flag;
    AndroidInterface.StartService(flag);
    window.setInterval(function(){getinfo()}, 1000);
  });

});
