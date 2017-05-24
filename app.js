$(document).ready(function(){
  var color = 'white';
  var colors = 'red blue green yellow white';
  $('#white').on('click',function(){
    color = 'white';
  });
  $('#red').on('click',function(){
    color = 'red';
  });
  $('#blue').on('click',function(){
    color = 'blue';
  });
  $('#yellow').on('click',function(){
    color = 'yellow';
  });
  $('#green').on('click',function(){
    color = 'green';
  });
  $('.box').on('mousedown',function(){
    $('.box').on('mouseenter',function(){
      $(this).addClass(color);
    })
  });

  $('.box').on('mouseup',function(){
    $('.box').off('mouseenter');
  })
  
  $('.box').on('dblclick',function(){
    $(this).removeClass(colors);
  });
  $('#reset').on('click',function(){//selcting the #id of the ID where we want the change to happened
    $('.box').removeClass(colors);
  })

})
