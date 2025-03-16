# 🎉 Amigo Secreto

## 📌 Descripción
Este proyecto es una aplicación web simple para organizar un "Amigo Secreto". Permite agregar nombres de amigos a una lista y seleccionar aleatoriamente un ganador.

## 🚀 Características
- Agregar amigos a una lista.
- Mostrar la lista en pantalla.
- Seleccionar un amigo aleatoriamente.
- Interfaz amigable y accesible.

## 📂 Estructura del Proyecto
```
📁 amigo-secreto
│── 📄 index.html     # Estructura principal de la página
│── 📄 style.css      # Estilos de la aplicación
│── 📄 app.js        # Lógica del juego
│── 📁 assets       # Imágenes y recursos
```

## 🛠️ Instalación y Ejecución
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/Giovanni-Boris/challenge-secret-game.git
   ```
2. **Accede a la carpeta del proyecto**:
   ```bash
   cd amigo-secreto
   ```
3. **Abre `index.html` en tu navegador** o usa un servidor local:
   ```bash
   # Si tienes Python instalado:
   python -m http.server
   ```
   Luego, abre `index.html` en tu navegador o con la extensión live server.

## 📜 Dependencias
Este proyecto no usa frameworks ni librerías externas. Solo requiere un navegador moderno.

## 🛠️ Posibles Problemas y Soluciones
### 1️⃣ No se actualiza la lista de amigos
🔹 **Solución**: Asegúrate de que `addFriendToScreen()` se llama después de agregar un amigo.

### 2️⃣ No se selecciona un amigo al sortear
🔹 **Solución**: Verifica que la lista de amigos no esté vacía antes de ejecutar `sortearAmigo()`.

## 🏆 Contribuciones
¡Toda contribución es bienvenida! Si deseas mejorar el código, por favor abre un **pull request** o reporta un problema en **issues**.

## 📄 Licencia
Este proyecto está bajo la licencia **MIT**.

