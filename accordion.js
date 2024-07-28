// script.js
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.accordion-button');

    //アコーディオンをクリックした時の動作
$('.accordion-button').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".accordion-content");//直後のアコーディオンを行うエリアを取得し
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
