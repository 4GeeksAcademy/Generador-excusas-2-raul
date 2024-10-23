window.onload = function() {
  let first = "Lo siento, ";
  let adj = [
    "dos cabezas ",
    "nuclear ",
    "enojado ",
    "solitario ",
    "loco ",
    "brillante ",
    "maloliente ",
    "lento ",
    "viejo "
  ];
  let noun = [
    "jogger ",
    "mapache ",
    "perro ",
    "comerciante ",
    "conductor ",
    "comediante ",
    "piña "
  ];
  let action = [
    "se llevó mi ",
    "me gritó ",
    "pateó mi ",
    "robó mi ",
    "quemó mi ",
    "mordió mi ",
    "golpeó mi "
  ];
  let possetion = [
    "dedo del pie ",
    "coche ",
    "reloj ",
    "zapato ",
    "cartera ",
    "camisa ",
    "llaves ",
    "computadora ",
    "teléfono ",
    "sándwich "
  ];
  let where = [
    "en la calle",
    "en mi casa",
    "en mi entrada",
    "frente a la oficina",
    "cerca del centro comercial",
    "cerca del baño",
    "en la estación de autobuses"
  ];

  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  document.querySelector("#excuse").innerHTML =
    first +
    adj[rdm1] +
    noun[rdm2] +
    action[rdm3] +
    possetion[rdm4] +
    where[rdm5];
};
