$(document).ready(function(){
  $('input[type="checkbox"]').click(function(){
    let mydict = {}
    if($(this).prop("checked") == true){
      mydict[$(this).attr('data-id')] = $(this).attr('data-name');
    }
    else if($(this).prop("checked") == false){
      delete mydict[$(this).attr('data-id')];
    }
    let mylist = []
      for (let a in mydict){
         mylist.push(mydict[a]);
    }
    $('.amenities h4').text(mylist.join(', '));
  });

  const apiUrl = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(apiUrl, function (resp) {
    if (resp.status == 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  })
});
