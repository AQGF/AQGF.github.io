<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\css\APlayer.min.css"><script src="\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\js\Meting.min.js"></script>let newYearTimer = null;
var newYear = ()=&gt;{
  clearTimeout(newYearTimer);
  if (!document.querySelector('#newYear')) return;
  // 新年时间戳 and 星期对象
  let newYear = new Date('2024-11-22 00:00:00').getTime() / 1000,
      week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' }

  time();

  // 补零函数
  function nol(h) { return h &gt; 9 ? h : '0' + h; };

  function time() {
    // 现在 时间对象
    let now = new Date();

    // 右下角 今天
    document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()]

    // 现在与新年相差秒数
    let second = newYear - Math.round(now.getTime() / 1000);

    // 小于0则表示已经过年
    if (second &lt; 0) {
      document.querySelector('#newYear .title').innerHTML = 'Happy New Year!';
      document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐</span>';
    } else {
      // 大于0则还未过年
      document.querySelector('#newYear .title').innerHTML = '距离2024年纪念日：'

      // 大于一天则直接渲染天数
      if (second &gt; 86400) {
        document.querySelector('#newYear .newYear-time').innerHTML = `<span class="day">${Math.ceil(second / 86400)}<span class="unit">天</span></span>`
      } else {
        // 小于一天则使用时分秒计时。
        let h = nol(parseInt(second / 3600));
        second %= 3600;
        let m = nol(parseInt(second / 60));
        second %= 60;
        let s = nol(second);
        document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${h}:${m}:${s}</span>`;
        // 计时
        newYearTimer = setTimeout(time, 1000);
      }
    }
  }

  // 元宝飘落
  jQuery(document).ready(function($) {
    $('#newYear').wpSuperSnow({
      flakes: ['https://s11.ax1x.com/2024/02/15/pFGKGSs.jpg', 'https://s11.ax1x.com/2024/02/15/pFGKlFg.jpg', 'https://s11.ax1x.com/2024/02/15/pFGKmOP.jpg'],
      totalFlakes: '100',
      zIndex: '1',
      maxSize: '30',
      maxDuration: '20',
      useFlakeTrans: false
    });
  });
}
newYear();
