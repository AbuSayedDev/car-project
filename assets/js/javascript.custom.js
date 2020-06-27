   
//searchFilterBar_Item_list
    $('.close').click(function(){
        $('.tab-content').find('.tab-pane').removeClass('active');
    });


    // price_range_progress
    $(document).ready(function(){
        $("#priceSlider").slider({
            value:3499,
            values:[0, 3499],
            min:20,
            max:3499,
            range: true,
            slide:function(event, ui){
                $("#amount").html("TK. "+ui.value);
            }
        });
        $("#amount").html("TK. "+$("#priceSlider").slider("value"));
    });      
    // price_range_progress
    $(document).ready(function(){
        $("#priceSlider3").slider({
            value:3499,
            values:[0, 3499],
            min:20,
            max:3499,
            range: true,
            slide:function(event, ui){
                $("#amount3").html("TK. "+ui.value);
            }
        });
        $("#amount3").html("TK. "+$("#priceSlider3").slider("value"));
    });   
    // price_range_progress4
    $(document).ready(function(){
        $("#priceSlider4").slider({
            value:3499,
            values:[0, 3499],
            min:20,
            max:3499,
            range: true,
            slide:function(event, ui){
                $("#amount4").html("TK. "+ui.value);
            }
        });
        $("#amount4").html("TK. "+$("#priceSlider4").slider("value"));
    });
    // price_range_progress5
    $(document).ready(function(){
        $("#priceSlider5").slider({
            value:3499,
            values:[0, 3499],
            min:20,
            max:3499,
            range: true,
            slide:function(event, ui){
                $("#amount5").html("TK. "+ui.value);
            }
        });
        $("#amount5").html("TK. "+$("#priceSlider5").slider("value"));
    });


// header search bar
    showOptions = function (){
    $('.option').show();
    }
    hideOptions = function (){
    $('.option').hide();
    }
    searchAddress = function(text){
    $('#insertText').val(text);
    $('.option').hide();
    }

  //datepicker
    $(document).ready(function () {
        $('input[id$=tbDate]').datepicker({});
    });
  //form_location_hide
    $(document).ready(function(){
        $("#exampleInputSearch1").click(function(){
            $(".form_location_hide").fadeToggle();
        });
    });
  