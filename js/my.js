window.onload = function() {
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
      if(document.hidden) {
        $('[rel="icon"]').attr('href', "/img/face-sad-cry-solid.svg");
        $('[rel="shortcut icon"]').attr('href', "/img/face-sad-cry-solid.svg");
        document.title = '燕子！没有你我怎么活啊，燕子！';
        clearTimeout(titleTime);
      } else {
        $('[rel="icon"]').attr('href', "/img/logo.png");
        $('[rel="shortcut icon"]').attr('href', "/img/logo.png");
        document.title = '你回来啦！（づ￣3￣）づ';
        titleTime = setTimeout(function() {
          document.title = OriginTitile;
        }, 2000);
      }
    });
  }