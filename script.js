function generarContraseña(
  longitud,
  mayusculas,
  minusculas,
  numeros,
  simbolos
) {
  const mayusculasStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculasStr = "abcdefghijklmnopqrstuvwxyz";
  const numerosStr = "0123456789";
  const simbolosStr = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  let caracteresDisponibles = "";

  if (mayusculas) caracteresDisponibles += mayusculasStr;
  if (minusculas) caracteresDisponibles += minusculasStr;
  if (numeros) caracteresDisponibles += numerosStr;
  if (simbolos) caracteresDisponibles += simbolosStr;

  if (caracteresDisponibles === "")
    return "Debe seleccionar al menos una opción";

  let contraseña = "";
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(
      Math.random() * caracteresDisponibles.length
    );
    contraseña += caracteresDisponibles[indiceAleatorio];
  }

  return contraseña;
}

document.getElementById("generar").addEventListener("click", function () {
  const longitud = document.getElementById("longitud").value;
  const mayusculas = document.getElementById("mayusculas").checked;
  const minusculas = document.getElementById("minusculas").checked;
  const numeros = document.getElementById("numeros").checked;
  const simbolos = document.getElementById("simbolos").checked;

  const contraseñaGenerada = generarContraseña(
    longitud,
    mayusculas,
    minusculas,
    numeros,
    simbolos
  );

  document.getElementById("contraseña").value = contraseñaGenerada;
});

document
  .getElementById("toggle-dark-mode")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    this.textContent = isDarkMode ? "Modo Claro" : "Modo Oscuro";
  });
