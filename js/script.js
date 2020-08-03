// Var

  var name  = prompt("Qual è il tuo nome?");
  var surname = prompt("Qual è il tuo cognome?");
  var color = prompt("qual è il tuo colore preferito?")
  var number = 19;
  // var number = Math.floor((Math.random() * 100) + 1);
  // var password = name + surname + color + number;  For random number
  var password = name + surname + color + number.toString();

// Password

  document.getElementById('pw').innerHTML = password;
