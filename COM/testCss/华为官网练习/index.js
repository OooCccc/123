window.onload=function(){
    //获取集团网站的id
    var web_jitaun=document.getElementById("web-jituan");
    var dj=document.getElementById("dj");
    var language=document.getElementById("language");
    var dj1=document.getElementById("dj1");
    var  down=document.getElementById("fa-chevron-down");
    var  down1=document.getElementById("fa-chevron-down1");
    web_jitaun.onclick=function(){
        web_jitaun.style.backgroundColor="#F7F7F7";
        web_jitaun.style.color="blank";
        dj.style.height=181+"px";
        dj.style.width=1519+"px";
        down.className="fa fa-chevron-up";
        down.style.fontSize=1+"px";
        down.style.marginLeft=3+"px";
        web_jitaun.onclick=function(){
            web_jitaun.style.backgroundColor="#111111";
            dj.style.height=0+"px";
            dj.style.width=0+"px";
            // 刷新页面
            location.reload();
        };
    }
    // 语言和地区
    language.onclick=function(){
        language.style.backgroundColor="#F7F7F7";
        language.style.color="blank";
        dj1.style.height=181+"px";
        dj1.style.width=1519+"px";
        down1.className="fa fa-chevron-up";
        down1.style.fontSize=1+"px";
        down1.style.marginLeft=3+"px";
        language.onclick=function(){
            language.style.backgroundColor="#111111";
            dj1.style.height=0+"px";
            dj1.style.width=0+"px";
            // 刷新页面
            location.reload();
        };
    }
}