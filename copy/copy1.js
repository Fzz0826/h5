//传入要复制内容的节点
function copy(attr) {
    //判断终端
    if (/(Android)/i.test(navigator.userAgent)){ //安卓机      
            var ele=document.querySelector(attr);//要复制文字的节点  
            ele.select(); // 选择对象  
            document.execCommand("Copy"); // 执行浏览器复制命令 
      } else {
          if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {//区分iPhone设备  
            window.getSelection().removeAllRanges();//这段代码必须放在前面否则无效  
            var ele=document.querySelector(attr);//要复制文字的节点  
            var range = document.createRange();  
            // 选中需要复制的节点  
            range.selectNode(ele);  
            // 执行选中元素  
            window.getSelection().addRange(range);  
            // 执行 copy 操作  
            var successful = document.execCommand('copy');  

            // 移除选中的元素  
            window.getSelection().removeAllRanges();
        }
      }
    
} 
