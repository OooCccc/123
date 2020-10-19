//1.执行动画
//封装动画
// 参数：
//     obj：执行动画的对象
//     speed：移动速度
//     tragrt：目标
//     direction:方向
//     callback: 回调函数
//定义一个计时器
var time;
function move(obj, speed, target, arrt, callback) {
  clearInterval(obj.time);
  //获取当前位置
  var cunrrentPostion = parseInt(getStyle(obj, arrt));
  if (cunrrentPostion > target) {
    speed = -speed;
  }
  obj.time = setInterval(function () {
    var oldValue = parseInt(getStyle(obj, arrt));
    var newValue = oldValue + speed;
    if ((speed > 0 && newValue > target) || (speed < 0 && newValue < target)) {
      newValue = target;
    }
    obj.style[arrt] = newValue + "px";
    if (newValue == target) {
      clearInterval(obj.time);
      callback && callback();
    }
  }, 10);
}
//输入对象和参数  获取对应的样式值
// 参数：
//     1.obj 传入的对象
//     2.该对象的样式名称
// 返回值：
//     返回该对象样式的具体数值

// 关于 getComputedStyle 的兼容性问题，在 Chrome 和 Firefox 是支持该属性的，同时 IE 9 10 11 也是支持相同的特性的，IE 8并不支持这个特性。
//  IE 8 支持的是 element.currentStyle 这个属性，这个属性返回的值和 getComputedStyle 的返回基本一致，只是在 float 的支持上，
//  IE 8 支持的是 styleFloat,这点需要注意。

function getStyle(obj, styleName) {
  //正常浏览器
  if (window.getComputedStyle) {
    return getComputedStyle(obj, null)[styleName];
  }
  //ie8
  else {
    return obj.currentStyle[styleName];
  }
}

//2.提换类名
//增加一个类名
function addClass(obj, cName) {
  if (hasClass(obj, cName)) {
    //如果有什么都不做
  } else {
    obj.className += " " + cName;
  }
}
//判断是否有该类名
function hasClass(obj, cName) {
  var re = new RegExp("\\b" + cName + "\\b");
  return re.test(obj.className);
}
//删除
function remove(obj, cName) {
  var re = new RegExp("\\b" + cName + "\\b");
  obj.className = obj.className.replace(re, "");
}
//替换：有就删除，没有就添加
function classReplace(obj, cName) {
  if (hasClass(obj, cName)) {
    remove(obj, cName);
  } else {
    addClass(obj, cName);
  }
}

/*  3.制作马赛克的方法
 *参数
 *imgSrc：图片对象地址
 *size：，马赛克大小
 *ctx :画笔对象
 */
function makeMosaic(imgSrc, szieMosaic, ctx) {
  //获取像素数据集
  var img = new Image();
  img.src = imgSrc;
  img.onload = function () {
    //设置画布的宽为图片的2倍，高为1倍；
    canvas.width = img.width * 2;
    canvas.height = img.height;
    //绘制图片
    ctx.drawImage(img, 0, 0);
    //获取图片位置的像素集
    var oldImageData = ctx.getImageData(0, 0, img.width, img.height);
    //新建一个像素集，用来接收像素点的颜色----->马赛克
    var newImageData = ctx.createImageData(img.width, img.height);
    //从图片中随机获取一个像素点的颜色值
    var size = szieMosaic; //马赛克块的大小
    for (var i = 0; i < oldImageData.width / size; i++) {
      for (var j = 0; j < oldImageData.height / size; j++) {
        //获取[0-4]的随机数，向下取整
        var x = Math.floor(Math.random() * size);
        var y = Math.floor(Math.random() * size);
        var color = getPxColor(oldImageData, i * size + x, j * size + y);
        //  console.log(color);
        //把第一块随机获取到的颜色值设置为该块的颜色   其他块也是一样的
        for (var m = 0; m < size; m++) {
          for (var n = 0; n < size; n++) {
            setPxColor(newImageData, i * size + m, j * size + n, color);
          }
        }
      }
    }
    ctx.putImageData(newImageData, img.width, 0);
  };
  //获取某个点的颜色
  function getPxColor(imageData, x, y) {
    var color = [];
    let w = imageData.width;
    color[0] = imageData.data[(y * w + x) * 4];
    color[1] = imageData.data[(y * w + x) * 4 + 1];
    color[2] = imageData.data[(y * w + x) * 4 + 2];
    color[3] = imageData.data[(y * w + x) * 4 + 3];
    return color;
  }
  //设置某个像素点的颜色
  function setPxColor(imageDate, x, y, color) {
    let w = imageDate.width;
    imageDate.data[(y * w + x) * 4] = color[0];
    imageDate.data[(y * w + x) * 4 + 1] = color[1];
    imageDate.data[(y * w + x) * 4 + 2] = color[2];
    imageDate.data[(y * w + x) * 4 + 3] = color[3];
  }
}
