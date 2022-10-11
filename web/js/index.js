window.addEventListener('DOMContentLoaded', (event) => {
  init();
});

function init(){
  let default_message = '';
  default_message += 'For [[text-enterprise-name-receiver]].\n';
  default_message += 'Address on [[text-enterprise-address-receiver]].\n';
  default_message += '\n';
  default_message += 'Nice to meet you [[text-name-receiver]].\n';
  default_message += '\n';
  default_message += 'Hello I am @Imom and I am a software develoment and this is a example for my application "Sender - Imom" I hope you like :)\n';
  default_message += 'See you later!\n';
  default_message += '\n';
  default_message += 'Sincerely Iván Ornelas.';
  
  $("#message_body").val(default_message);
}