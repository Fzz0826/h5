//官方插件
var clipboard = new Clipboard(".btn");
  clipboard.on("success",function (element) {//复制成功的回调
      console.log("复制成功");
  });
  clipboard.on("error",function (element) {//复制失败的回调
      console.log("复制失败");
  })