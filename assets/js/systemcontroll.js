
    // 添加下面的代码。
    // 引入 ipcRenderer 模块。
    var ipcRenderer = require('electron').ipcRenderer;
    
    document.getElementById("closed").onclick = function () {
    //alert("关闭窗口");
   
    ipcRenderer.send('close-window');
    }
    var isBig=true;//窗口放大还原标示
    var imgElements = document.getElementsByName('img_');

    document.getElementById("big").onclick = function () {
       
    if(isBig){
        isBig = false;
    
        ipcRenderer.send('show-window');
       
        for(var i=0;i<imgElements.length;i++)
        {
            imgElements[i].setAttribute("class","imgsrcbig");
        }
        
       // }
        
    }
    else{
        isBig = true;
        //alert("缩小窗口");
        ipcRenderer.send('orignal-window');
       
        for(var i=0;i<imgElements.length;i++)
        {
            imgElements[i].setAttribute("class","imgsrc");
        }
        }
    
    }
    document.getElementById("min").onclick = function () {
    //alert("隐藏窗口");
    ipcRenderer.send('hide-window');
    }