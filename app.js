function encriptar(cadena = "") {
  let y = cadena.toLowerCase();

  if (y) {
    if (y.includes("e")) {
      y = y.replaceAll("e", "enter");
    }
    if (y.includes("i")) {
      y = y.replaceAll("i", "imes");
    }
    if (y.includes("a")) {
      y = y.replaceAll("a", "ai");
    }
    if (y.includes("o")) {
      y = y.replaceAll("o", "ober");
    }
    if (y.includes("u")) {
      y = y.replaceAll("u", "ufat");
    }
  }

  return y;
}

function desencriptar(cadena = "") {
  let y = cadena.toLowerCase();

  if (y) {
    if (y.includes("enter")) {
      y = y.replaceAll("enter", "e");
    }
    if (y.includes("imes")) {
      y = y.replaceAll("imes", "i");
    }
    if (y.includes("ai")) {
      y = y.replaceAll("ai", "a");
    }
    if (y.includes("ober")) {
      y = y.replaceAll("ober", "o");
    }
    if (y.includes("ufat")) {
      y = y.replaceAll("ufat", "u");
    }
  }
  return y;
}

// Agregar eventos a los botones
document.getElementById("encrypt-btn").addEventListener("click", function () {
  // Obtener el texto del textarea de entrada
  const inputText = document.getElementById("input-text").value;

  // Encriptar el texto
  const encryptedText = encriptar(inputText);

  // Mostrar el texto encriptado en el textarea de salida
  document.getElementById("output-text").value = encryptedText;
});

document.getElementById("decrypt-btn").addEventListener("click", function () {
  // Obtener el texto del textarea de entrada
  const inputText = document.getElementById("input-text").value;

  // Desencriptar el texto
  const decryptedText = desencriptar(inputText);

  // Mostrar el texto desencriptado en el textarea de salida
  document.getElementById("output-text").value = decryptedText;
});

let text = document.getElementById("output-text").innerHTML;

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
