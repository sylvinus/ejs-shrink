var express = require('express'), ejs = require('ejs');
require('/usr/local/lib/node_modules/ejs-shrink');


describe("A suite", function(){
  it("should remove whitespaces between tags", function(done){
    var output = ejs.render("<div>  \n\n</div>\t\t\t<div id=\"lol wut\" >\n\n\n\n\t\t\t\t\t</div>");
    expect(output).toEqual("<div></div>\t\t\t<div id=\"lol wut\" ></div>");
    done();
  });
  it("shouldn't mess with html attributes", function(done){
    var output = ejs.render("<div class='test classes here' id=\"awesome\"></div><input selected/>");
    expect(output).toEqual("<div class='test classes here' id=\"awesome\"></div><input selected/>");
    done();
  })
  it("shouldn't mess with anything between script tags", function(done){
    var output = ejs.render("<script>console.log('test<b> </b> <b> </b>\t\t\t\t\t\t\tboom');</script>");
    expect(output).toEqual("<script>console.log('test<b> </b> <b> </b>\t\t\t\t\t\t\tboom');</script>");
    done();
  })
})
