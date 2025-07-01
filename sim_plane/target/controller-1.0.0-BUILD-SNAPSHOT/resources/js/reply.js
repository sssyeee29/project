<<<<<<< HEAD
console.log("Reply Module............");

//즉시 실행 함수
let replyService = (function(){

    function add(reply, callback){  //비동기 통신
        console.log("reply.....................");

        $.ajax({  //앞에도 따옴표가 붙으면 json 객체, 없으면 js객체
            type : 'post',
            url : '/replies/new',
            data : JSON.stringify(reply),  //reply(js객체)를 json으로 변환
            contentType : "application/json; charset=utf-8",
            success : function(result, status, xhr) {
                if(callback) {
                    callback(result);
                }
            },
            error : function(xhr, status, er) {
                if (error) {
                    error(er);
                }
            }
        })
    } //end add

    function getList(param, callback, error) {
        let testid = param.testid;
        let page = param.page || 1;  //page값 없으면 1값 입력

        $.ajax({
            type: 'get',
            url: '/replies/pages/'+testid+"/"+page,
            success : function(result, status, xhr) {
                if(callback) {
                    callback(result.replyCnt, result.list);
                }
            },
            error : function(xhr, status, er) {
                if (error) {
=======
console.log("Reply Module.....");

//즉시 실행함수
let replyService = (function (){

    //DB에 값이 잘 들어갔는지
    function add(reply, callback, error){
        console.log("add reply........");

        $.ajax({
            type : 'post',
            url : '/replies/new',
            data : JSON.stringify(reply),
            contentType : "application/json; charset=utf-8",

            success : function (result, status, xhr){
                if (callback){
                    callback(result);
                }
            },
            error : function (xhr, status, er){
                if(error){
                    error(er);
                }
            }
        });
    } //end add

    function getList(param, callback, error){
        let boardid = param.boardid;

        let page = param.page || 1; //값이 있으면 param.page에 넣고, 없으면 1이 나옴

        $.ajax({
            type : 'get',
            url : 'replies/pages/' + boardid + "/" + page,

            success : function (result, status, xhr){
                if(callback){
                    callback(result.replyCnt, result.list);
                }
            },
            error : function (xhr, status, er){
                if(error){
>>>>>>> 2b53f6525f0bf16378ac3627abcc135ed29f73cb
                    error(er);
                }
            }
        })
<<<<<<< HEAD
    }//end getList

    function remove(replyid, callback, error) {

        $.ajax({
            type:'delete',
            url:'/replies/'+replyid,

            success: function(deleteResult, status, xhr) {
                if(callback) {
                    callback(deleteResult);
                }
            },
            error : function(xhr, status, er) {
                if (error) {
=======
    } //end getList

    function remove(rno, replyer, callback, error){

        $.ajax({
            type:'delete',
            url: '/replies/' + rno,
            data : JSON.stringify({rno : rno, replyer : replyer}),
            contentType: "application/json; charset=utf-8",

            success : function(deleteResult, status, xhr){
                if(callback){
                    callback(deleteResult);
                }
            },
            error : function(xhr, status, er){
                if(error){
>>>>>>> 2b53f6525f0bf16378ac3627abcc135ed29f73cb
                    error(er);
                }
            }
        })
<<<<<<< HEAD
    }//end remove

    function get(replyid, callback, error) {
        $.ajax({
            type:'get',
            url: '/replies/'+replyid,
=======

    } //end remove

    function get(rno, callback, error){

        $.ajax({
            type: 'get',
            url: '/replies/' + rno,

            success: function(result){
                if(callback){
                    callback(result);
                }
            },
            error: function(xhr, status, er){
                if(error){
                    error(er);
                }
            }
        });

    } //end get

    function update(reply, callback, error){
        $.ajax({
            type: 'put',
            url: '/replies/' + reply.rno,
            data: JSON.stringify(reply),
            contentType: "application/json; charset=utf-8",
>>>>>>> 2b53f6525f0bf16378ac3627abcc135ed29f73cb
            success: function(result, status, xhr){
                if(callback){
                    callback(result);
                }
            },
<<<<<<< HEAD
            error: function(xhr, status, err){
                if(error) {
                    error(err);
                }
            }
        })
    }//end get

    function update(reply, callback, error) {
        $.ajax({
            type:'put',
            url:'/replies/' + reply.replyid,
            data: JSON.stringify(reply),
            contentType : "application/json; charset=utf-8",
            success: function(result, status, xhr){
                if(callback) {
                    callback(result);
                }
            },
            error: function(xhr, status, err) {
                if(error){
                    error(err);
                }
            }
        })
    }

    function displayTime(timeValue) {
=======
            error : function(xhr, status, er){
                if(error){
                    error(er);
                }
            }
        })
    }; //end update

    function displayTime(timeValue){
>>>>>>> 2b53f6525f0bf16378ac3627abcc135ed29f73cb

        let today = new Date();
        let gap = today.getTime() - timeValue;

        let dateObj = new Date(timeValue);
        let str = "";

<<<<<<< HEAD
        if(gap < (1000*60*60*24)) {
=======
        if(gap < (1000*60*60*24)){
>>>>>>> 2b53f6525f0bf16378ac3627abcc135ed29f73cb
            let hh = dateObj.getHours();
            let mi = dateObj.getMinutes();
            let ss = dateObj.getSeconds();

<<<<<<< HEAD
            return [ (hh>9 ? '' : '0')+ hh, ":",
                (mi>9 ? '':'0')+ mi, ":",
                (ss>9 ? '':'0')+ ss
=======
            return[ (hh > 9 ? '' : '0') + hh, ":" ,
                (mi > 9 ? '' : '0') + mi, ":",
                (ss > 9 ? '' : '0') + ss
>>>>>>> 2b53f6525f0bf16378ac3627abcc135ed29f73cb
            ].join('');
        }else{
            let yy = dateObj.getFullYear();
            let mm = dateObj.getMonth()+1;
            let dd = dateObj.getDate();

            return [
<<<<<<< HEAD
                yy, '/', (mm>9 ? '' : '0')+ mm, '/', (dd>9 ? '':'0')+dd
            ].join('');
        }
    }//end displayTime



    return {
        add : add,
        getList : getList,
        remove : remove,
        get : get,
        update : update,
        displayTime : displayTime
=======
                yy, '/', (mm>9? '' : '0') + mm, '/' , (dd>9? '' : '0') +dd
            ].join('');

        }
    }//end displayTime

    return {
        add:add,
        getList:getList,
        remove: remove,
        get:get,
        update:update,
        displayTime:displayTime
>>>>>>> 2b53f6525f0bf16378ac3627abcc135ed29f73cb
    };
})();