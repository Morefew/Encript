# Encriptador de Texto

> Un encriptador de texto simple que permite encriptar y desencriptar texto según un conjunto de reglas específicas.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [API](#api)
- [Eventos](#eventos)
- [Agradecimientos](#agradecimientos)
- [Licencia](#licencia)

## Introducción

Este proyecto es un encriptador de texto simple que permite a los usuarios encriptar y desencriptar texto según un conjunto de reglas específicas. El propósito de este proyecto es proporcionar una herramienta útil para la encriptación y desencriptación de texto de manera sencilla y rápida.

## Características

- Encriptación y desencriptación de texto según un conjunto de reglas específicas.
- Interfaz de usuario intuitiva y fácil de usar.
- Copiar el texto encriptado o desencriptado al portapapeles con un solo clic.
- Mensaje de error cuando no se encuentra ningún mensaje.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.

## Uso

1. Ingresa el texto que deseas encriptar o desencriptar en el área de texto proporcionada.
2. Haz clic en el botón "Encriptar" para encriptar el texto o en el botón "Desencriptar" para desencriptar el texto.
3. El texto encriptado o desencriptado se mostrará en el área de salida.
4. Haz clic en el botón "Copiar" para copiar el texto encriptado o desencriptado al portapapeles.

## API

- `encrypt(text)`: Encripta un texto dado según un conjunto de reglas específicas.
  - Parámetros:
    - `text`: El texto a encriptar. Por defecto es una cadena vacía.
  - Retorna: El texto encriptado.
- `decrypt(text)`: Desencripta un texto dado según un conjunto de reglas específicas.
  - Parámetros:
    - `text`: El texto a desencriptar. Por defecto es una cadena vacía.
  - Retorna: El texto desencriptado.

## Eventos

- `encrypt-btn:click`: Se dispara cuando se hace clic en el botón "Encriptar".
- `decrypt-btn:click`: Se dispara cuando se hace clic en el botón "Desencriptar".
- `copy-btn:click`: Se dispara cuando se hace clic en el botón "Copiar".

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
