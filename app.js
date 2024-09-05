/**
 * Encripta un texto dado según un conjunto de reglas específicas.
 * @param {string} text - El texto a encriptar. Por defecto es una cadena vacía.
 * @returns {string} El texto encriptado.
 */
function encrypt(text = "") {
  let y = text.toLowerCase();

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

/**
 * Desencripta un texto dado según un conjunto de reglas específicas.
 * @param {string} text - El texto a desencriptar. Por defecto es una cadena vacía.
 * @returns {string} El texto desencriptado.
 */
function decrypt(text = "") {
  let y = text.toLowerCase();

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

/**
 * Crea un mensaje vacío en la interfaz de usuario cuando no se encuentra ningún mensaje.
 */
function createEmptyMessage() {
  const outputFrame = document.querySelector(".output-box");
  const outputFrameBtn = outputFrame.firstElementChild;
  const emptyMessage = document.createElement("div");
  const emptyText = document.createElement("p");
  const emptyInstruction = document.createElement("p");
  let errorImage;

  emptyMessage.className = "emptyMessage";
  emptyText.textContent = "Ningún mensaje fue encontrado";
  emptyText.className = "emptyText";
  emptyInstruction.textContent =
    "Ingresa el texto que desees encriptar o desencriptar.";
  emptyInstruction.className = "emptyInstruction";

  emptyMessage.appendChild(emptyText);
  emptyMessage.appendChild(emptyInstruction);

  function checkScreenSize() {
    if (window.innerWidth >= 768) {
      if (!errorImage) {
        errorImage = document.createElement("img");
        errorImage.src = "imgs/Muñeco.png";
        errorImage.className = "errorImage";
        emptyMessage.insertBefore(errorImage, emptyText);
      }
    } else {
      if (errorImage) {
        emptyMessage.removeChild(errorImage);
        errorImage = null;
      }
    }
  }

  checkScreenSize();

  window.addEventListener("resize", checkScreenSize);

  outputFrame.insertBefore(emptyMessage, outputFrameBtn);
}

createEmptyMessage();

/**
 * Maneja la salida del texto encriptado o desencriptado en la interfaz de usuario.
 * @param {string} outputText - El texto de salida a mostrar en la interfaz de usuario.
 */
function handleOutputTextarea(outputText) {
  const outputFrame = document.querySelector(".output-box");
  let outputFrameFirstChild = outputFrame.firstElementChild;
  let textArea;

  if (
    outputFrameFirstChild &&
    outputFrameFirstChild.className === "emptyMessage"
  ) {
    textArea = document.createElement("textarea");
    textArea.rows = 20;
    textArea.className = "output-text";
    textArea.disabled = true;
    outputFrame.replaceChild(textArea, outputFrameFirstChild);
  } else {
    textArea = outputFrame.querySelector(".output-text");
  }

  if (textArea) {
    textArea.value = outputText;
  }
}

document.getElementById("encrypt-btn").addEventListener("click", function () {
  const inputText = document.getElementById("input-text").value;
  const encryptedText = encrypt(inputText);
  handleOutputTextarea(encryptedText);
});

document.getElementById("decrypt-btn").addEventListener("click", function () {
  const inputText = document.getElementById("input-text").value;
  const decryptedText = decrypt(inputText);
  handleOutputTextarea(decryptedText);
});

document.getElementById("copy-btn").addEventListener("click", function () {
  const copyContent = document.querySelector(".output-text");
  try {
    navigator.clipboard.writeText(copyContent.value);
    copyContent.value = "";
    copyContent.remove();
    createEmptyMessage();
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
});
