document.addEventListener("DOMContentLoaded", function() {
    const qqContact = document.getElementById("qq-contact");
    const wechatContact = document.getElementById("wechat-contact");
    const wechatQrcode = document.getElementById("wechat-qrcode");

    qqContact.addEventListener("click", function() {
        alert("添加QQ好友功能尚未实现。请手动添加。");
        // 你可以在这里添加实际的QQ添加逻辑，例如打开QQ添加好友的URL
    });

    wechatContact.addEventListener("click", function() {
        if (wechatQrcode.style.display === "block") {
            wechatQrcode.style.display = "none";
        } else {
            wechatQrcode.style.display = "block";
        }
    });

    // 点击页面其他地方隐藏二维码
    document.addEventListener("click", function(event) {
        if (!wechatContact.contains(event.target)) {
            wechatQrcode.style.display = "none";
        }
    });
});
