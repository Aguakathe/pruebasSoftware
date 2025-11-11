Plan de Pruebas - Sitio Web Ginprosa S.A.S
📋 Descripción del proyecto
Este repositorio contiene el plan de pruebas automatizadas y manuales desarrollado para validar el sitio web corporativo de Ginprosa S.A.S (https://www.ginprosacol.com.co/preliminar/mockup/). El proyecto implementa pruebas funcionales, de interfaz y de navegación utilizando Katalon Studio y Cypress, cubriendo componentes críticos como formularios, navegación, visualización de proyectos y elementos interactivos.
Objetivos principales:

Validar la funcionalidad y estabilidad de los componentes principales del sitio
Comprobar la navegación fluida entre secciones
Detectar y documentar errores en formularios, enlaces y elementos de interfaz
Evaluar la compatibilidad en diferentes navegadores (Chrome, Firefox, Edge)
Analizar la experiencia del usuario desde una perspectiva técnica


🛠️ Herramientas y versiones utilizadas
Herramientas de automatización:

Katalon Studio v7.1.0 - v7.2.1
Cypress (versión por definir)

Navegadores soportados:

Google Chrome (última versión estable)
Mozilla Firefox
Microsoft Edge

Sistema operativo de pruebas:

Windows 10 (ambiente de desarrollo y ejecución)

Tecnologías del sitio bajo prueba:

HTML5, CSS3, JavaScript
Google Maps API (integración de mapas)
Bootstrap / Framework CSS responsivo

Control de versiones:

Git v2.x
GitHub (repositorio remoto)


💻 Requisitos previos
Antes de comenzar, asegúrate de tener instalado:
Para Katalon Studio:

Katalon Studio

Descarga desde: https://katalon.com/download
Versión recomendada: 7.1.0 o superior
Requiere Java JDK 8 o superior


Java JDK

Versión: JDK 8 o JDK 11
Descarga desde: https://www.oracle.com/java/technologies/downloads/
Configurar variable de entorno JAVA_HOME



Para Cypress:

Node.js

Versión: 14.x o superior
Descarga desde: https://nodejs.org/


npm o yarn

Incluido con Node.js



Requisitos generales:

Navegadores web actualizados

Google Chrome (última versión estable)
ChromeDriver (se incluye con Katalon)
Opcional: Firefox, Edge con sus respectivos drivers


Git

Para clonar el repositorio
Descarga desde: https://git-scm.com/downloads


Conexión a internet

Requerida para acceder al sitio web de pruebas
Requerida para carga de mapas de Google Maps




📥 Instrucciones de instalación paso a paso
Paso 1: Clonar el repositorio
bash# Clonar el repositorio desde GitHub
git clone https://github.com/tu-usuario/ginprosa-testing.git

# Navegar al directorio del proyecto
cd ginprosa-testing
```

### Paso 2: Instalación para Katalon Studio

#### 2.1 Instalar Java JDK (si no está instalado)

**Windows:**
1. Descargar JDK desde Oracle o adoptar OpenJDK
2. Ejecutar el instalador
3. Configurar variable de entorno:
```
   JAVA_HOME = C:\Program Files\Java\jdk-11.x.x
   PATH = %JAVA_HOME%\bin

Verificar instalación:

bash   java -version
2.2 Instalar Katalon Studio

Descargar Katalon Studio desde https://katalon.com/download
Descomprimir el archivo ZIP en una ubicación de tu preferencia
Ejecutar Katalon Studio.exe (Windows) o equivalente según SO
Crear una cuenta gratuita de Katalon (si es primera vez)

2.3 Abrir el proyecto en Katalon Studio

Abrir Katalon Studio
Seleccionar File > Open Project
Navegar hasta la carpeta clonada ginprosa-testing/Katalon
Seleccionar el archivo del proyecto (.prj)
Hacer clic en Open

2.4 Verificar configuración del proyecto

En Katalon Studio, ir a Project > Settings > Execution
Verificar que el navegador predeterminado sea Chrome
Ir a Project > Settings > Test Design > WebUI
Verificar tiempo de espera implícito (recomendado: 10-30 segundos)

2.5 Actualizar WebDriver (opcional)
Si experimentas problemas con los drivers:

Ir a Tools > Update WebDrivers
Seleccionar Chrome, Firefox, Edge
Hacer clic en Update

Paso 3: Instalación para Cypress
bash# Navegar al directorio de Cypress
cd Cypress

# Instalar dependencias
npm install

# Verificar instalación de Cypress
npx cypress verify

🚀 Instrucciones de ejecución de pruebas
Ejecución con Katalon Studio
Opción 1: Ejecutar un Test Suite completo

En el Test Explorer de Katalon, navegar a Test Suites
Seleccionar el suite deseado (ej: Formularios de Ginprosa)
Hacer clic derecho > Run
Seleccionar el navegador (recomendado: Chrome)
Observar la ejecución en tiempo real
Revisar el reporte en la pestaña Log Viewer y Reports

Test Suites disponibles:

Contacto Ginprosa - Pruebas de formulario de contacto y mapa
Formularios de Ginprosa - Validación de formularios de contacto y talento
Generalidades Ginprosa - Navegación y enlaces generales
Proyectos de Ginprosa - Visualización y filtrado de proyectos
Servicios de Ginprosa - Navegación y filtrado de servicios

Opción 2: Ejecutar un Test Case individual

En el Test Explorer, navegar a Test Cases
Seleccionar el caso específico (ej: Formulario de Contacto)
Hacer clic derecho > Run
Seleccionar navegador y observar ejecución

Opción 3: Ejecutar todos los Test Suites

En el Test Explorer, ir a Test Suites
Seleccionar la carpeta raíz de Test Suites
Hacer clic derecho > Run All
Confirmar configuración de ejecución

Ejecución con Cypress
Abrir Cypress Test Runner (modo interactivo)
bash# Navegar al directorio de Cypress
cd Cypress

# Abrir Cypress
npx cypress open

Seleccionar el tipo de prueba (E2E Testing)
Elegir el navegador
Seleccionar el spec file a ejecutar
Observar la ejecución en tiempo real

Ejecutar pruebas en modo headless (línea de comandos)
bash# Ejecutar todas las pruebas
npx cypress run

# Ejecutar un spec específico
npx cypress run --spec "cypress/e2e/formulario-contacto.cy.js"

# Ejecutar en un navegador específico
npx cypress run --browser chrome
```

---

## 📁 Estructura del proyecto
```
pruebas-software/
│
├── Katalon/                             # Proyecto de Katalon Studio
│   ├── Test Suites/                     # Test Suites organizados por funcionalidad
│   │   ├── Contacto Ginprosa/           # (2 test cases)
│   │   │   ├── Iconos de Contacto
│   │   │   └── Mapa
│   │   ├── Formularios de Ginprosa/     # (2 test cases)
│   │   │   ├── Formulario de Contacto
│   │   │   └── Formulario de Talento
│   │   ├── Generalidades Ginprosa/      # (2 test cases)
│   │   │   ├── Redes Sociales
│   │   │   └── NavBar
│   │   ├── Proyectos de Ginprosa/       # (2 test cases)
│   │   │   ├── Imagenes
│   │   │   └── Filtro
│   │   └── Servicios de Ginprosa/       # (2 test cases)
│   │       ├── Filtro
│   │       └── Redireccionamiento desde index
│   │
│   ├── Test Cases/                      # Casos de prueba individuales
│   ├── Object Repository/               # Repositorio de objetos UI
│   ├── Test Data/                       # Datos de prueba
│   ├── Reports/                         # Reportes de ejecución
│   └── Ginprosa.prj                     # Archivo de proyecto Katalon
│
├── Cypress/                             # Proyecto de Cypress
│   ├── e2e/                             # Pruebas end-to-end
│   ├── fixtures/                        # Datos de prueba
│   ├── support/                         # Comandos personalizados
│   └── cypress.config.js                # Configuración de Cypress
│
├── Documentacion/                       # Documentación del proyecto
│   ├── Plan_de_Pruebas.pdf              # Plan de pruebas completo
│   ├── Plantilla_Casos_Prueba.xlsx      # Plantilla de casos de prueba
│   ├── Matriz_Trazabilidad.xlsx         # Matriz HU vs Test Cases
│   └── Defectos/                        # Registro de defectos
│
├── .gitignore                           # Archivos ignorados por Git
└── README.md                            # Este archivo

👥 Autores

Stefanie Geraldine Gallo Becerra - Estudiante (Katalon Studio)
Steffanny Katherine Torres Conde - Estudiante (Cypress)
Francisco Javier Samaca Pineros - Docente

Institución: Fundación Universitaria Ucompensar
Materia: Pruebas de Software
Fecha: Octubre 2025

📄 Licencia
Este proyecto es de uso académico para la Fundación Universitaria Ucompensar.

📧 Contacto y soporte
Para preguntas o problemas relacionados con este proyecto:

Crear un issue en GitHub
Contactar a los autores a través de la plataforma académica

---

## Cypress (rama `cypress-geral`)

**Ubicación del proyecto:** `proyecto-testing/cypress`  
**Base de pruebas:** `https://www.ginprosacol.com.co/preliminar/mockup`

### Instalar y abrir
```bash
cd proyecto-testing
npm ci         # o: npm install
npx cypress open
