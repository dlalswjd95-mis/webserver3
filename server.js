
//insert(C), delete(D), update(U), select(R)
var http = require("http");
var express = require("express");
var ejs = require("ejs") ; //동적 html 생성 모듈...
var fs = require("fs"); //파일을 읽어들이는 내부모듈
var app = express(); //모듈생성
var server = http.createServer(app);
//express모듈의 최대 장점!! 각정 미들웨어라 불리는 기능들을 지원
//미들웨어 사용시 use()로 호출!!
//정적파일들을 일일이 라우팅 시킬 필요가 없다.

app.use(express.static(__dirname));

//리스트 요청받기
app.use("/list",function(request, response){
    fs.readFile("list.ejs","utf-8",function(error,data){
        if(error){
            console.log("읽기 실패",error);
        }
        response.writeHead(200,{"Content-Type":"text/html"});
        response.end(ejs.render(data)); //data를 해석
    });
});

server.listen(8888, function(){
    console.log("webserver is running at 8888");
});





