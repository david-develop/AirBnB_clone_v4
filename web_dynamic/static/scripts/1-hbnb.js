const $ = window.$;

$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    const mydict = {};
    if ($(this).prop('checked') === true) {
      mydict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if ($(this).prop('checked') === false) {
      delete mydict[$(this).attr('data-id')];
    }
    const mylist = [];
    for (const a in mydict) {
      mylist.push(mydict[a]);
    }
    $('.amenities h4').text(mylist.join(', '));
  });
});
