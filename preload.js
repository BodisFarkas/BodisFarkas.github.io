//called from index to preload hero and first images on concert and still pages
function heroPreload() {
    const imagesToPreload = [
                            "./img/still/hero.jpeg",
                            "./img/concert/hero.jpeg",
                            "./img/concert/3.jpeg",
                            "./img/concert/2.jpeg",
                            "./img/concert/1.jpeg",
                            "./img/concert/5.jpeg",
                            "./img/still/1.jpeg",
                            "./img/still/2.jpeg",
                            "./img/still/3.jpeg",];
    const preloadedImages = [];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
        preloadedImages.push(img);
    });
}

//called from as the concert page is loaded to preload the high resolution pictures
function concertHighResPreload() {
    const imagesToPreload = [
                            "./img/concert-high-res/1.jpg",
                            "./img/concert-high-res/2.jpg",
                            "./img/concert-high-res/3.jpg",
                            "./img/concert-high-res/4.jpg",
                            "./img/concert-high-res/5.jpg",
                            "./img/concert-high-res/6.jpg",
                            "./img/concert-high-res/7.jpg",
                            "./img/concert-high-res/8.jpg",
                            "./img/concert-high-res/9.jpg",
                            "./img/concert-high-res/10.jpg",
                            "./img/concert-high-res/11.jpg",
                            "./img/concert-high-res/12.jpg",
                            "./img/concert-high-res/13.jpg",
                            "./img/concert-high-res/14.jpg",
                            "./img/concert-high-res/15.jpg",
                            "./img/concert-high-res/16.jpg",
                            "./img/concert-high-res/17.jpg",
                            "./img/concert-high-res/18.jpg",
                            "./img/concert-high-res/19.jpg",
                            "./img/concert-high-res/20.jpg",
                            "./img/concert-high-res/21.jpg",
                            "./img/concert-high-res/22.jpg",
                            "./img/concert-high-res/23.jpg",
                            "./img/concert-high-res/24.jpg",
                            "./img/concert-high-res/25.jpg",
                            "./img/concert-high-res/26.jpg",
                            "./img/concert-high-res/26.jpg",
                            "./img/concert-high-res/27.jpg",
                            "./img/concert-high-res/28.jpg",
                            "./img/concert-high-res/29.jpg",
                            "./img/concert-high-res/30.jpg",
                            "./img/concert-high-res/31.jpg",
                            "./img/concert-high-res/32.jpg",
                            "./img/concert-high-res/33.jpg",
                            "./img/concert-high-res/34.jpg",
                            "./img/concert-high-res/35.jpg",
                            "./img/concert-high-res/36.jpg",
                            "./img/concert-high-res/37.jpg",
                            "./img/concert-high-res/38.jpg",
                            "./img/concert-high-res/39.jpg",
                            "./img/concert-high-res/40.jpg",
                            "./img/concert-high-res/41.jpg",
                            "./img/concert-high-res/42.jpg",
                            "./img/concert-high-res/43.jpg",
                            "./img/concert-high-res/44.png",
                            "./img/concert-high-res/45.jpg",
                            "./img/concert-high-res/46.jpg",
                            "./img/concert-high-res/47.jpg",
                            "./img/concert-high-res/48.jpg",
                            "./img/concert-high-res/49.jpg",
                            "./img/concert-high-res/50.jpg",
                            "./img/concert-high-res/51.jpg",
                            "./img/concert-high-res/52.jpg",
                            "./img/concert-high-res/53.jpg",
                            "./img/concert-high-res/54.jpg",
                            "./img/concert-high-res/55.jpg",
                            "./img/concert-high-res/56.jpg",
                            "./img/concert-high-res/hero.jpg",
                            ];
    const preloadedImages = [];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
        preloadedImages.push(img);
    });
}

//called from as the still page is loaded to preload the high resolution pictures
function stillHighResPreload() {
    const imagesToPreload = [
                            "./img/still-high-res/1.jpg",
                            "./img/still-high-res/2.jpg",
                            "./img/still-high-res/3.jpg",
                            "./img/still-high-res/4.jpg",
                            "./img/still-high-res/5.jpeg",
                            "./img/still-high-res/6.jpg",
                            "./img/still-high-res/7.jpg",
                            "./img/still-high-res/8.jpg",
                            "./img/still-high-res/9.jpg",
                            "./img/still-high-res/10.jpg",
                            "./img/still-high-res/11.jpg",
                            "./img/still-high-res/12.jpeg",
                            "./img/still-high-res/13.jpeg",
                            "./img/still-high-res/14.jpeg",
                            "./img/still-high-res/15.jpg",
                            "./img/still-high-res/16.jpg",
                            "./img/still-high-res/17.jpeg",
                            "./img/still-high-res/18.jpg",
                            "./img/still-high-res/19.jpeg",
                            "./img/still-high-res/20.jpeg",
                            "./img/still-high-res/21.jpeg",
                            "./img/still-high-res/22.jpeg",
                            "./img/still-high-res/23.jpg",
                            "./img/still-high-res/24.jpg",
                            "./img/still-high-res/25.jpg",
                            "./img/still-high-res/26.jpg",
                            "./img/still-high-res/27.jpg",
                            "./img/still-high-res/28.jpg",
                            "./img/still-high-res/29.jpg",
                            "./img/still-high-res/30.jpg",
                            "./img/still-high-res/31.jpg",
                            "./img/still-high-res/32.jpg",
                            "./img/still-high-res/33.jpg",
                            "./img/still-high-res/34.jpg",
                            "./img/still-high-res/35.jpg",
                            "./img/still-high-res/36.jpg",
                            "./img/still-high-res/37.jpg",
                            "./img/still-high-res/38.jpg",
                            "./img/still-high-res/39.jpg",
                            "./img/still-high-res/40.jpg",
                            "./img/still-high-res/41.jpg",
                            "./img/still-high-res/42.jpg",
                            "./img/still-high-res/43.jpg",
                            "./img/still-high-res/44.jpeg",
                            "./img/still-high-res/45.jpg",
                            "./img/still-high-res/46.jpg",
                            "./img/still-high-res/47.jpg",
                            "./img/still-high-res/48.jpg",
                            "./img/still-high-res/49.jpg",
                            "./img/still-high-res/50.jpg",
                            "./img/still-high-res/51.jpg",
                            "./img/still-high-res/52.jpg",
                            "./img/still-high-res/53.jpg",
                            "./img/still-high-res/54.jpg",
                            "./img/still-high-res/55.jpg",
                            "./img/still-high-res/56.jpg",
                            "./img/still-high-res/57.jpg",
                            "./img/still-high-res/58.jpg",
                            "./img/still-high-res/59.jpg",
                            "./img/still-high-res/60.jpg",
                            "./img/still-high-res/61.jpg",
                            "./img/still-high-res/62.jpg",
                            "./img/still-high-res/63.jpg",
                            "./img/still-high-res/hero.jpg",];
    const preloadedImages = [];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
        preloadedImages.push(img);
    });
}
