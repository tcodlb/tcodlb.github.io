function ok(corp){
Email.send({
    SecureToken : "6de74191-9d4d-4f52-8673-e4907bf24f08",
    To : 'tocodelab@gmail.com',
    From : "tocodelab@gmail.com",
    Subject : "FormCont",
    Body : "contato: " + corp
}).then(
  message => alert(message)
);
}