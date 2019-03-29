$(function() {
    //轮播图
    var startX, endX;
    var carousel = $(".carousel");
    var carousel_inner = $(".carousel-inner")[0];
    // console.log($(".carousel-inner"));

    carousel_inner.addEventListener("touchstart", function(e) {
        startX = e.targetTouches[0].clientX;
    })
    carousel_inner.addEventListener("touchend", function(e) {
        endX = e.changedTouches[0].clientX;
        if (endX - startX > 0) {
            //上一张
            carousel.carousel('prev');
        } else if (endX - startX < 0) {
            //下一张
            carousel.carousel('next');
        }
    })

    //宝北 提示框
    $('[data-toggle="tooltip"]').tooltip();

    /* 计算产品块导航的原始宽度 */
    var ul = $(".wjs_product .nav-tabs");
    var lis = ul.find("li");
    var totalWidth = 0;
    lis.each(function(index, value) {
        totalWidth = totalWidth + $(value).innerWidth();
        /* query中获取宽度的方法的说明：
         * width():它只能得到当前元素的内容的宽度
         * innerWidth():它能获取当前元素的内容的宽度+padding
         * outerWidth():获取当前元素的内容的宽度+padding+border
         * outerWidth(true):获取元素的内容的宽度+padding+border+margin*/
    });
    ul.width(totalWidth);
    /* 使用iscroll插件实现导航条的滑动操作 */
    var myScroll = new IScroll('.tabs_parent', {
        scrollX: true,
        scrollY: false
    })
})