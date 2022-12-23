const div = $("#root");
console.log(div);

$(document).ready(function () {
  console.log("文档已就绪");
});

console.log("juqery 版本号", $.fn.jquery);

setTimeout(() => {
  $(".hide").hide();
}, 3000);

$("#root").click(() => {
  console.log("我被点击了");
});
