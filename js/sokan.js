var header = $(".second-header").height();
$(.course-img).css('margin-top' , header+'px');



$(document).ready(function(){    
    $('.list-inline-item').on('click',function(){
        $('.detailsOfAuthor strong').empty();
        $('.detailsOfAuthor strong').append("<strong class='text-success'>seyed m.reza bazre</strong>");
    });
    
        $('.li-1').click(function () {
            $('.li-0').removeClass("active");
            $('.li-1').addClass("active");
        });
        $('.li-2').click(function () {
            $('.li-1').removeClass("active");
            $('.li-2').addClass("active");
        });
        $('.li-3').click(function () {
            $('.li-2').removeClass("active");
            $('.li-3').addClass("active");
        });
        $('.li-4').click(function () {
            $('.li-3').removeClass("active");
            $('.li-4').addClass("active");
        });
});
