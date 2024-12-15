document.addEventListener("DOMContentLoaded", function() {
    const imageGrid = document.querySelector('.image-grid');
    const defaultImage = 'images/default.jpg';

    for (let i = 1; i <= 400; i++) { // 从1开始，到400结束
        const img = document.createElement('img');
        img.src = defaultImage;
        img.alt = `图片${i}`; // 添加描述
        imageGrid.appendChild(img);
    }
});
