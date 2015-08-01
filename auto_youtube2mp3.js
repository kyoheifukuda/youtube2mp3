var chai        = require('chai'),
    assert      = chai.assert,
    expect      = chai.expect,
    should      = chai.should,
    webdriverio = require('webdriverio'),
    i;

describe('Automatically YOUTUBE to mp3', function(){
  this.timeout(99999999);
  var client = {},
      url = 'http://www.youtube-mp3.org/jp',
      tgt1 = '#details #dl_link a:nth-Child(1)',
      tgt2 = '#details #dl_link a:nth-Child(2)',
      tgt3 = '#details #dl_link a:nth-Child(3)',
      tgt4 = '#details #dl_link a:nth-Child(4)',
      tgt5 = '#details #dl_link a:nth-Child(5)';

  before(function(done){
    client = webdriverio.remote({
      desiredCapabilities: {browserName: 'chrome'},
      singleton: true
    });
    client.init(done);
  });

  it('Open http://www.youtube-mp3.org/jp', function(done) {
    client
      .url(url)
      .setValue('#youtube-url', 'https://www.youtube.com/watch?v=cQHAcerYDi8')
      .click('#submit')
      .waitForVisible('#progress_info')
      .then(function(){
        client
          .isVisible(tgt1).then(function(isVisible) {
            if(isVisible){
              console.log("Hit!!");
              return client.click(tgt1);
            }else{
              console.log("Miss...");
            }
          })
          .isVisible(tgt2).then(function(isVisible) {
            if(isVisible){
              console.log("Hit!!");
              return client.click(tgt2);
            }else{
              console.log("Miss...");
            }
          })
          .isVisible(tgt3).then(function(isVisible) {
            if(isVisible){
              console.log("Hit!!");
              return client.click(tgt3);
            }else{
              console.log("Miss...");
            }
          })
          .isVisible(tgt4).then(function(isVisible) {
            if(isVisible){
              console.log("Hit!!");
              return client.click(tgt4);
            }else{
              console.log("Miss...");
            }
          })
          .isVisible(tgt5).then(function(isVisible) {
            if(isVisible){
              console.log("Hit!!");
              return client.click(tgt5);
            }else{
              console.log("Miss...");
            }
          });
        return client.setValue('#youtube-url', 'END');
      });
    });
});