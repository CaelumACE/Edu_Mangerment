
//课程点击选中，再点击取消
var isshooseCrs=true;//课程菜单是否被选中
var isshooseQb=true;//题库菜单是否被选中
var isshooseData=false;//数据菜单是否被选中
var varElemCrs = document.getElementById("crsid");
var varElemQb = document.getElementById("qbid");
var varElemData = document.getElementById("datacrsid");
var leftMenu = document.getElementById("leftmenupara");

///////////////////////左侧菜单
var mh = 30;//高度
var step = 1;//每次变化的量
var ms = 10;//循环时间
function toggle(o){
    //alert(2);
    //alert(o);
    //alert(o.tid);
    if (!o.tid)
            o.tid = "_" + Math.random() * 100;
    if (!window.toggler)
            window.toggler = {};
    if (!window.toggler[o.tid]){
            window.toggler[o.tid]={
                                    obj:o,
                                    maxHeight:o.offsetHeight,
                                    minHeight:mh,
                                    timer:null,
                                    action:1
            };
    }
    o.style.height = o.offsetHeight + "px";
    if (window.toggler[o.tid].timer)
            clearTimeout(window.toggler[o.tid].timer);

    window.toggler[o.tid].action *= -1;
    window.toggler[o.tid].timer = setTimeout("anim('"+o.tid+"')",ms );
}

function anim(id){
    var t = window.toggler[id];
    var o = window.toggler[id].obj;
    if (t.action < 0){
            if (o.offsetHeight <= t.minHeight){
                    alert(1);
                    clearTimeout(t.timer);
                    
                    return;
            }
    }
    else{
            if (o.offsetHeight >= t.maxHeight){
                    alert(2);
                    clearTimeout(t.timer);
                     return;
            }
    }
    o.style.height = (parseInt(o.style.height, 10) + t.action * step) + "px";
    window.toggler[id].timer = setTimeout("anim('"+id+"')",ms );
}
////////////////////

leftMenu.onclick = function(){
    alert(1);
    toggle(this)
}

document.getElementById("crsid").onclick = function () {
    if(isshooseCrs){
        isshooseCrs = false; 
        varElemCrs.removeAttribute("class");
        leftMenu.click();
    }
    else{
        isshooseCrs = true; 
        varElemCrs.setAttribute("class","course");
        varElemQb.removeAttribute("class");
        varElemData.removeAttribute("class");
        isshooseData = true; 
        isshooseQb = true; 
    }
}
//题库点击选择，再点击取消


document.getElementById("qbid").onclick = function () {
    if(isshooseQb){
        isshooseQb = false; 
        varElemQb.setAttribute("class","questbk");
        varElemCrs.removeAttribute("class");
        varElemData.removeAttribute("class");
        isshooseCrs = false; 
        isshooseData = false; 
       
    }
    else{
        isshooseQb = true; 
        varElemQb.removeAttribute("class");
    }
}
//数据点击选择，再点击取消


document.getElementById("datacrsid").onclick = function () {
       
    if(isshooseData){
        isshooseData = false; 
        varElemData.removeAttribute("class");
    }
    else{
        isshooseData = true; 
        varElemData.setAttribute("class","datacrs");
        varElemCrs.removeAttribute("class");
        varElemQb.removeAttribute("class");
        isshooseCrs = false;
        isshooseQb = true; 
    }
}