$(function(){

	/** 
	 * 共通パーツ
	 * スマホメニュー
	 */
	navigation();

	/** 
	 * 共通パーツ
	 * スムーススクロール
	 */
	// smoothscroll();
});

const navigation = () => {
	const head = $('.js-header'),
	menu = $('.js-header-menu');

	menu.on('click',function(){
		head.toggleClass('active');
	});
}

const smoothscroll = () => {
	$('a[href^="#"]').click(function(){
		const speed = 500,
		href= $(this).attr("href"),
		target = $(href == "#" || href == "" ? 'html' : href),
		position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
			return false;
	});
}

const swiper = new Swiper(".swiper", {
  loop: true, // ループ
  speed: 1500, // 少しゆっくり(デフォルトは300)
  slidesPerView: 1, // 一度に表示する枚数
  spaceBetween: 90, // スライド間の距離
  centeredSlides: true, // アクティブなスライドを中央にする
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    751: {
      slidesPerView: 1.5, 
      spaceBetween: 90, 
      centeredSlides: true,     
    }
  },
  autoplay: {
    // 自動再生
    delay: 1000, // 1秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





