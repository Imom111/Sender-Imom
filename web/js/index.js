let arrExample = [
  {
    "id" : 1,
    "email" : "ivan@gmail.com",
    "name" : "Ivan",
    "enterprise" : "IMOM-JS",
    "address" : "León Guanajuato"
  },
  {
    "id" : 2,
    "email" : "moi@gmail.com",
    "name" : "Moi",
    "enterprise" : "MOI-JS",
    "address" : "Silao Guanajuato"
  },
  {
    "id" : 3,
    "email" : "ornelas@gmail.com",
    "name" : "Ornelas",
    "enterprise" : "Orn-JS",
    "address" : "Guanajuato Guanajuato"
  },
  {
    "id" : 4,
    "email" : "meza@gmail.com",
    "name" : "Meza",
    "enterprise" : "Mez-JS",
    "address" : "DF"
  }
];

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

function load_receivers(){
  let content = "";
  for (let i = 0; i < arrExample.length; i++) {
    content += '<tr>';
    content += '<td>' + arrExample[i].email + '</td>';
    content += '<td>' + arrExample[i].name + '</td>';
    content += '<td><a type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#edit_data_receiver_modal">Edit</a></td>';
    content += '<td><a type="button" class="btn btn-danger text-white">Delete</a></td>';
    content += '</tr>';
  }
  $("#tbody_receiver").html();
}
