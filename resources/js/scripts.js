$(document).ready(
    function () {

        //sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset:'600px'
            }

        )
        //Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700); // thanh cuộn nhanh chậm tùy ý,số càng lớn chạy càng lâu
            event.preventDefault();
        });

        // mobile navigation
        $('.mobile-nav-icon').click(
           function(){
            $('.main-nav').slideToggle(200);  // chuyển display none .main-nav thành block 
           
            if($('.mobile-nav-icon').hasClass('fa-bars')){
                $('.mobile-nav-icon').addClass('fa fa-times');
                $('.mobile-nav-icon').removeClass('fa-bars')
            }else{
                $('.mobile-nav-icon').addClass('fa-bars');
                $('.mobile-nav-icon').removeClass('fa-times');
     
            }
        
        } 
        )

    }

)