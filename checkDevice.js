(function(){
  console.log(window.navigator.userAgent);

  var _ua = (function(u){
    var mobile = {
              0: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
              || u.indexOf("iphone") != -1
              || u.indexOf("ipod") != -1
              || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
              || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
              || u.indexOf("blackberry") != -1,
              iPhone: (u.indexOf("iphone") != -1),
              Android: (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
    };
    var tablet = (u.indexOf("windows") != -1 && u.indexOf("touch") != -1)
              || u.indexOf("ipad") != -1
              || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
              || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
              || u.indexOf("kindle") != -1
              || u.indexOf("silk") != -1
              || u.indexOf("playbook") != -1;
    var pc = !mobile[0] && !tablet;
    return {
      Mobile: mobile,
      Tablet: tablet,
      PC: pc
    };
  })(window.navigator.userAgent.toLowerCase());

  // デバイス検出
  var searchDevice = (function(ua){
    if(ua.Mobile[0]){
      return Object.keys(ua)[0]
    }else if(ua.Tablet){
      return Object.keys(ua)[1];
    }else{
      return Object.keys(ua)[2];
    }
  })(_ua);

  var device = document.getElementById('device');
  device.innerHTML = searchDevice;

  // モバイル検出
  if(_ua.Mobile[0]){
    var searchMobile = (function(ua){
      var st = '(';
      var ed = ')';
      for(var j = 1; j < Object.keys(ua.Mobile).length; j++){
        var key = Object.keys(ua.Mobile)[j];
        if(ua.Mobile[key]){
          return st + Object.keys(ua.Mobile)[j] + ed;
        }
      }
      return st + Object.keys(ua.Mobile).slice(1, (Object.keys(ua.Mobile).length)-1) + '以外' + ed;
    })(_ua);

    var mobile = document.getElementById('mobile');
    mobile.innerHTML = searchMobile;
  }
})();
