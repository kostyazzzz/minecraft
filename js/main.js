$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    prevArrow: `
    <button class="slick-arrow slick-prev">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="slick-arrow__icon" d="M38.8 5.6L33.2 0L9.20001 24L33.2 48L38.8 42.4L20.4 24L38.8 5.6Z" />
</svg>

    </button>
    `,
    nextArrow: `
    <button class="slick-arrow slick-next">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="slick-arrow__icon" d="M9.19998 42.4L14.8 48L38.8 24L14.8 -1.69873e-06L9.19998 5.6L27.6 24L9.19998 42.4Z" />
</svg>

    </button>
    `,
  });