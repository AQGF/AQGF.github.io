window.onload = function() {
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
      if(document.hidden) {
        $('[rel="icon"]').attr('href', "https://s11.ax1x.com/2024/02/14/pF8xMIU.png");
        $('[rel="shortcut icon"]').attr('href', "https://s11.ax1x.com/2024/02/14/pF8xMIU.png");
        document.title = '燕子！没有你我怎么活啊，燕子！';
        clearTimeout(titleTime);
      } else {
        $('[rel="icon"]').attr('href', "https://s11.ax1x.com/2024/02/14/pF8xMIU.png");
        $('[rel="shortcut icon"]').attr('href', "https://s11.ax1x.com/2024/02/14/pF8xMIU.png");
        document.title = '你回来啦！（づ￣3￣）づ';
        titleTime = setTimeout(function() {
          document.title = OriginTitile;
        }, 2000);
      }
    });
  }