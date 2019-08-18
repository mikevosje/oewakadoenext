exports.getFBData = function(url) {
  FB.init({
    appId      : '548466918497006',
    channelUrl : '//conor.lavos.local/channel.html',
    status     : true,
    cookie     : true,
    xfbml      : true
  });
}
