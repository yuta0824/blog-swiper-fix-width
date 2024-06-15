const swiper = new Swiper(".swiper", {
  loop: true,
  width: 200,
  spaceBetween: 40,
  speed: 1000,
  autoplay: {
    delay: 1000,
  },

  virtual: {
    enabled: true, // バーチャルスライドを有効にします。
    addSlidesAfter: 5, // 事前レンダリングする枚数。スライドの枚数が入ります。
  },
});
