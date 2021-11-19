const priceSlider = document.querySelector('.pricing__slider');
const timeframeSlider = document.querySelector('.pricing__timeframe-slider');
const payment = document.querySelector('.payment');
const pageViews = document.querySelector('.page-views');

const getViewsAndPrice = price => {
    let pageViews;
    let newPrice;

    switch (price) {
        case 1:
            pageViews = '10k';
            newPrice = 8;
            break;
        case 2:
            pageViews = '50k';
            newPrice = 12;
            break;
        case 3:
            pageViews = '100k';
            newPrice = 16;
            break;
        case 4:
            pageViews = '500k';
            newPrice = 24;
            break;
        case 5:
            pageViews = '1M';
            newPrice = 36;
            break;
    
        default:
            pageViews = '100K';
            newPrice = 16;
            break;
    }

    return [pageViews, newPrice];
};

const fillBackground = e => {
    const min = e.target.min;
    const max = e.target.max;
    const value = e.target.value;

    e.target.style.backgroundSize = `${(value - min) * 100 / (max - min)}% 100%`;
};


priceSlider.addEventListener('input', e => {
    const outcome = getViewsAndPrice(parseInt(priceSlider.value));    
    
    if (parseInt(timeframeSlider.value) === 1) 
        outcome[1] -= (outcome[1] * .25);
    
    pageViews.textContent = `${outcome[0]} pageviews`;
    payment.value = `$${outcome[1]}.00`;
    
    fillBackground(e);
});

timeframeSlider.addEventListener('input', e => {
    if (parseInt(timeframeSlider.value) === 1) {
        const words = payment.value.split('$');
        let originalPrice = words[1];
        
        const discountedPrice = originalPrice - (originalPrice * .25);
        
        payment.value = `$${discountedPrice}.00`
    }
    else  {
        const outcome = getViewsAndPrice(parseInt(priceSlider.value));

        payment.value = `$${outcome[1]}.00`;
    }

    fillBackground(e);    
});
