window.onload = function(){
    function $(id){//获取元素
        var elem = document.getElementById(id);
        return elem;
    }

    var arrs = ['banner.jpg','banner1.png','banner2.png'];//背景图数组
    var banner = $("banner");
    // console.log(banner);
    var index =1;
    function autoplay(){
        // console.log(index);
        // console.log(arrs[index]);
        banner.style.backgroundImage = "url("+arrs[index]+")";//更换背景图
        index ++;
        if(index == arrs.length){//防止下标越界
            index =0;
        }
    };
    var timer = setInterval(autoplay,2000);

    var whitepoint = $("whitepoint");
    var ps = whitepoint.children;
    var i =0;
    function automove(){
        ps[i].style.backgroundColor = "white";//去除背景色
        i++;
        if(i==ps.length){
            i =0;
        }
        ps[i].style.backgroundColor = "red";//更换背景色
    }
    var timer1 = setInterval(automove,2000);


    banner.onmouseover = function(){
        clearInterval(timer);//鼠标悬停停止
        clearInterval(timer1);
    };

    banner.onmouseout = function(){
        timer = setInterval(autoplay,2000);
        //鼠标离开继续,timer为全局变量，否则不能多次关闭
        timer1 = setInterval(automove,2000);
    };






}
