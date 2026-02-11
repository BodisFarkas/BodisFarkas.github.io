const params = new URLSearchParams(window.location.search);
    const imgSrc = params.get('img');
    if (imgSrc) {
      document.getElementById('productImage').src = decodeURIComponent(imgSrc);
    }