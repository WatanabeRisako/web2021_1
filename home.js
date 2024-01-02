  var $some = $('.some');
  var original = $some.html();
  
  $('.all').change(function(){
    var val1 = $(this).val();

    $some.html(original).find('option'').each(function(){
      var val2 = $(this).data('val');
      
      if(val1 != val2){
        $(this).not(':first-some').remove();
  }
    });
    
    if($(this).val() === ''){
      $children.attr('disabled', 'disabled');
    }else{
      $some.removeAttr('disabled');
    }
  });
