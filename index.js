/*初始化水印*/
watermark.init({  watermark_txt: '对对对',
    watermark_color: 'rgb(0,0,0)',
    watermark_y: 90,
    watermark_x: 210,
    watermark_alpha: 0.7,
    watermark_width: 260,
    watermark_height: 80,
    watermark_angle: 10})
    ;
/*加载水印*/
// watermark.load({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" , watermark_width: 200});
/*移除水印*/
document.getElementById('remove-watermark').addEventListener("click",function () {
    watermark.remove();
},true)

/*添加水印*/
document.getElementById('add-watermark').addEventListener("click",function () {
    watermark.load({ watermark_txt: "测试水印，1021002301，测试水印，100101010111101" });
},true)
