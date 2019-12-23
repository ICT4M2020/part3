$(document).ready(function() {
  $('#RegisterBilling').hide();
  $('#bank_list').hide();
  $('#migs').click(function(){
            $('#RegisterBilling').show();
            $('#bank_list').hide();
            });

if (($('#migs').attr('checked')) && (!$('#address').val())) {
  alert('Please Enter Billing Address.'); return false; }
  $('#fpx').click(function(){
      $('#RegisterBilling').hide();
      $('#address').val('');
      $('#bank_list').show();
    });
});
