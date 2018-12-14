var counter = 1;

var page = window.location.href;


document.getElementById('menu-open').addEventListener('click', function(){
	document.getElementById('right-nav').style.width = "300px";
	document.getElementById('content').style.marginLeft = "-300px";
	document.getElementById('content').style.marginRight = "300px";

});
document.getElementById('menu-close').addEventListener('click', function(){
	document.getElementById('right-nav').style.width = "0px";
	document.getElementById('content').style.marginLeft = "0px";
	document.getElementById('content').style.marginRight = "0px";

});

var box = $('#information');
var child = $('.child');
$(box).hover(function () {
	child.removeClass('hidden');
}, function(){
  $(child).hover(function () {
    child.removeClass('hidden');
  }, function(){
    child.addClass('hidden');
  });
});
$(box).hover(function () {
  child.removeClass('hidden');
}, function(){
  child.addClass('hidden');
});


if(page.substring(page.lastIndexOf('/')+1) == 'index.html'){
  $(document).ready(function() {
    
    var $slider = $(".slider"),
        $slideBGs = $(".slide-bg "),
        curSlide = 0,
        numOfSlides = $(".slide").length-1,
        animating = false,
        animTime = 500;
    
    function changeSlides(instant) {
      if (!instant) {
        animating = true;
        $slider.addClass("animating");
        $(".slide").removeClass("active");
        $(".slide-"+curSlide).addClass("active");
        setTimeout(function() {
          animating = false;
        }, animTime);
      }
      $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    }

    function navigateLeft() {
      if (animating) return;
      if (curSlide > 0) curSlide--;
      changeSlides();
    }

    function navigateRight() {
      if (animating) return;
      if (curSlide < numOfSlides) curSlide++;
      changeSlides();
    }
    $(document).on("click", ".slider-control", function() {
      if ($(this).hasClass("left")) {
        navigateLeft();
      } else {
        navigateRight();
      }
    });

    $(document).on("click", ".left-button", function() {
        navigateLeft();
    });
    $(document).on("mouseenter", ".left-button", function() {
        $(".slider-control.left").addClass("hover");
    });
     $(document).on("mouseleave", ".left-button", function() {
        $(".slider-control.left").removeClass("hover");
    });

     $(document).on("click", ".right-button", function() {
        navigateRight();
    });
    $(document).on("mouseenter", ".right-button", function() {
        $(".slider-control.right").addClass("hover");
    });
     $(document).on("mouseleave", ".right-button", function() {
        $(".slider-control.right").removeClass("hover");
    });
  });
}

else if(page.substring(page.lastIndexOf('/')+1) == 'promotions.html'){
// PROMOTIONSSSSSS
  $('.button').click(function(){
    var button = $('.button');
    var buttonId = $(this).attr('id');
    console.log(buttonId);
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
    $('.modal').animate({ scrollTop: 0 }, 'fast');
  });

  $('.promo').click(function(){
    var button = $('.button');
    var buttonId = $('.button').attr('id');
    console.log(buttonId);  
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
    $('.modal').animate({ scrollTop: 0 }, 'fast');
  });

  $('.modal-overlay').click(function(){
    $('.modal').animate({ scrollTop: 0 }, 'instant');
    $("#modal-container").addClass('out');
    $('body').removeClass('modal-active');
  });
}


else if(page.substring(page.lastIndexOf('/')+1) == 'register.html'){
  document.getElementById('register-newsletter').addEventListener('click', function(){
    var name = document.getElementById('txtName');
    var phone = document.getElementById('txtPhone');
    var nationality = document.getElementById('optionNationality');
    var genderM = document.getElementById('radioMale');
    var genderF = document.getElementById('radioFemale');
    var gender;
    var address = document.getElementById('txtAddress');
    var subscription = document.getElementById('checkboxSubscribe');

    if(name.value != "" && phone.value != "" && nationality.options[nationality.selectedIndex].text != "Nationality" && (genderM || genderF) && address.value != "" && subscription.value){
      name.style.borderColor = '';
      phone.style.borderColor = '';
      nationality.style.borderColor = '';
      genderM.style.outline = '';
      genderF.style.outline = '';
      address.style.border = '';
      subscription.style.outline = '';
      alert(
        'Name: ' + name.value + "\n" +
        'Phone: ' + phone.value + "\n" +
        'Nationality: ' + nationality.options[nationality.selectedIndex].text + "\n" +
        'Gender: ' + gender + "\n" +
        'Subscription: ' + subscription.value + "\n"
        );
      window.location = 'index.html';
    }else {

      console.log('gagal');
      name.style.borderColor = 'red';
      phone.style.borderColor = 'red';
      nationality.style.borderColor = 'red';
      genderM.style.outline = '1px solid red';
      genderF.style.outline = '1px solid red';
      address.style.border = '1px solid red';
      subscription.style.outline = '1px solid red';

      if(name.value != ""){
        name.style.borderColor = '';
        console.log('nama berhasil');
      }
      if(phone.value != ""){
        phone.style.borderColor = '';
        console.log('phone berhasil');
      }
      if(nationality.options[nationality.selectedIndex].text != "Nationality"){
        nationality.style.borderColor = '';
        console.log('nationality berhasil');
      }
      if(genderM.value || genderF.value){
        console.log('gender berhasil');
        if(genderM) gender = "Male";
        else if(genderF)gender = "Female";
        genderM.style.outline = '';
        genderF.style.outline = '';
      }
      if(address.value){
        address.style.border = '';
        console.log('subs berhasil');
      }

      if(subscription.value){
        subscription.style.outline = '';
        console.log('subs berhasil');
      }

    }
  })
}