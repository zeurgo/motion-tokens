/*! sass.js - v0.11.1 (f286436) - built 2019-10-20
  providing libsass 3.6.2 (4da7c4bd)
  via emscripten 1.38.31 (040e49a)
 */var Sass=require("./sass.sync.js"),fs=require("fs"),path=require("path");function fileExists(e){var r=fs.statSync(e);return r&&r.isFile()}function removeFileExtension(e){return e.slice(0,e.lastIndexOf("."))}function importFileToSass(e,r){var i="./"+e,t=Sass.findPathVariation(fileExists,i);if(!t){r({error:'File "'+i+'" not found'});return}var s=!i.endsWith(".css")&&t.endsWith(".css"),n=s?removeFileExtension(t):t,a=fs.readFileSync(t,{encoding:"utf8"});Sass.writeFile(t,a,function(){r({path:n})})}function importerCallback(e,r){importFileToSass(resolve(e),r)}function compileFile(e,r,i){i||(i=r,r={}),Sass.importer(importerCallback),importFileToSass(e,function(){Sass.compileFile(e,r,i)})}function resolve(e){return path.normalize(path.join(path.dirname(e.previous.replace(/^\/sass\//,"")),e.current)).replace(/\\/g,"/")}compileFile.importFileToSass=importFileToSass,compileFile.Sass=Sass,module.exports=compileFile;
