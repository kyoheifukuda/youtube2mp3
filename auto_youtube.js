var chai        = require('chai'),
    assert      = chai.assert,
    expect      = chai.expect,
    should      = chai.should,
    webdriverio = require('webdriverio');

describe('youtube', function(){

    this.timeout(99999999);
    var client = {};
    var url = 'http://www.youtube-mp3.org/jp';

    before(function(done){
      client = webdriverio.remote({
        desiredCapabilities: {browserName: 'chrome'},
        singleton: true
      });
      client.init(done);
    });

    it('search', function(done) {
      client
        .url(url)
        .setValue('#youtube-url', 'https://www.youtube.com/watch?v=iS1g8G_njx8')
        .click('#submit')
        .then(function(){
          setTimeout(function(){
            return  client.click('#details > #dl_link >a:nth-Child(3)');
          }, 2000);
        });
      });
});