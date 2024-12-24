document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        // 添加更多图片路径
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = '图片展示';
        gallery.appendChild(img);
    });
});
