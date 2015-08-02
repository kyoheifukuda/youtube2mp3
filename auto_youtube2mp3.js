var webdriverio = require('webdriverio');
var i;
describe('Automatically YOUTUBE to mp3', function(){
  before(function(done){
    client = webdriverio.remote({
      desiredCapabilities: {browserName: 'chrome'},
      singleton: true
    });
    client.init(done);
  });
  this.timeout(99999999);

  // 'https://www.youtube.com/watch?v=RNBiaZbFGII&list=PL9111EF1C50B83D72'
  // 'https://www.youtube.com/watch?v=bh6kyW8lHdw&list=PL9111EF1C50B83D72&index=65'
  // 'https://www.youtube.com/watch?v=X4Ib_tQQivM&list=PL9111EF1C50B83D72&index=66'

  var tgt1 = '#details #dl_link a:nth-Child(1)',
      tgt2 = '#details #dl_link a:nth-Child(2)',
      tgt3 = '#details #dl_link a:nth-Child(3)',
      tgt4 = '#details #dl_link a:nth-Child(4)',
      tgt5 = '#details #dl_link a:nth-Child(5)';

  it('Open http://www.youtube-mp3.org/jp', function(done){
    client.url('http://www.youtube-mp3.org/jp');
    client.session('delete');

    getMp3('https://www.youtube.com/watch?v=RNBiaZbFGII&list=PL9111EF1C50B83D72');

    function getMp3(src){
      console.log(src);
      client
        .setValue('#youtube-url',src)
        .then(function (){
          console.log("Click Submit!!");
          return client.pause(2000).click('#submit');
        })
        .then(function (){
          client.isVisible(tgt1).then(function (isVisible){
            if (isVisible) {
              console.log(tgt1 + " is Hit!!");
              client.click(tgt1);
              return;
            } else {
              console.log(tgt1 + " is Miss...");
              client.isVisible(tgt2).then(function (isVisible){
                if (isVisible) {
                  console.log(tgt2 + " is Hit!!");
                  client.click(tgt2);
                  return;
                } else {
                  console.log(tgt2 + " is Miss...");
                  client.isVisible(tgt3).then(function (isVisible){
                    if (isVisible) {
                      console.log(tgt3 + " is Hit!!");
                      client.click(tgt3);
                      return;
                    } else {
                      console.log(tgt3 + " is Miss...");
                      client.isVisible(tgt4).then(function (isVisible){
                        if (isVisible) {
                          console.log(tgt4 + " is Hit!!");
                          client.click(tgt4);
                          return;
                        } else {
                          console.log(tgt4 + " is Miss...");
                          client.isVisible(tgt5).then(function (isVisible){
                            if (isVisible) {
                              console.log(tgt5 + " is Hit!!");
                              client.click(tgt5);
                              return;
                            } else {
                              console.log(tgt5 + " is Miss...");
                              return;
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        });
        return client.end();
      }

    });//it
});//describe