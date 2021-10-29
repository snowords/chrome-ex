// 所谓content-scripts，其实就是Chrome插件中向页面注入脚本的一种形式（虽然名为script，其实还可以包括css），
// 借助content-scripts我们可以实现通过配置的方式轻松向指定页面注入JS和CSS（如果需要动态注入，可以参考下文），
// 最常见的比如：广告屏蔽、页面CSS定制，等等。

// 接收消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  document.body.contentEditable = ![true, 'true'].includes(
    document.body.contentEditable
  );
  // 未关注展开文章
  document.body.getElementsByClassName('article_content')[0].style.height = 'auto';
  sendResponse(document.body.contentEditable);
});