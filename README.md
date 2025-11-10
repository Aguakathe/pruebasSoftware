Plan de Pruebas - Sitio Web Ginprosa S.A.S

Descripción del proyecto:
Este repositorio contiene el plan de pruebas automatizadas y manuales desarrollado para validar el sitio web corporativo de Ginprosa S.A.S (https://www.ginprosacol.com.co/preliminar/mockup/). El proyecto implementa pruebas funcionales, de interfaz y de navegación utilizando Katalon Studio, cubriendo componentes críticos como formularios, navegación, visualización de proyectos y elementos interactivos.

Herramientas y versiones utilizadas:
Katalon Studio v7.1.0 - v7.2.1
Cypress

Navegadores soportados:
Google Chrome 
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


Requisitos previos
Antes de comenzar, asegúrate de tener instalado:

Katalon Studio
Descarga desde: https://katalon.com/download
Versión recomendada: 7.1.0 o superior
Requiere Java JDK 8 o superior

Java JDK
Versión: JDK 8 o JDK 11
Descarga desde: https://www.oracle.com/java/technologies/downloads/
Configurar variable de entorno JAVA_HOME

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


Instrucciones de instalación paso a paso
Paso 1: Clonar el repositorio
bash# Clonar el repositorio desde GitHub
git clone https://github.com/tu-usuario/ginprosa-testing.git

# Navegar al directorio del proyecto
cd ginprosa-testing


Paso 2: Instalar Java JDK (si no está instalado)

Windows:
1. Descargar JDK desde Oracle o adoptar OpenJDK
2. Ejecutar el instalador
3. Configurar variable de entorno:

JAVA_HOME = C:\Program Files\Java\jdk-11.x.x
PATH = %JAVA_HOME%\bin

Verificar instalación:
bash   java -version


Paso 3: Instalar Katalon Studio
Descargar Katalon Studio desde https://katalon.com/download
Descomprimir el archivo ZIP en una ubicación de tu preferencia
Ejecutar Katalon Studio.exe (Windows) o equivalente según SO
Crear una cuenta gratuita de Katalon (si es primera vez)


Paso 4: Abrir el proyecto en Katalon Studio
Abrir Katalon Studio
Seleccionar File > Open Project
Navegar hasta la carpeta clonada ginprosa-testing
Seleccionar el archivo del proyecto (.prj)
Hacer clic en Open


Paso 5: Verificar configuración del proyecto
En Katalon Studio, ir a Project > Settings > Execution
Verificar que el navegador predeterminado sea Chrome
Ir a Project > Settings > Test Design > WebUI
Verificar tiempo de espera implícito (recomendado: 10-30 segundos)

Paso 6: Actualizar WebDriver (opcional)

Si experimentas problemas con los drivers:
Ir a Tools > Update WebDrivers
Seleccionar Chrome, Firefox, Edge
Hacer clic en Update


Instrucciones de ejecución de pruebas

Opción 1: Ejecutar un Test Suite completo
1. En el Test Explorer de Katalon, navegar a Test Suites
2. Seleccionar el suite deseado (ej: Formularios de Ginprosa)
3. Hacer clic derecho > Run
4. Seleccionar el navegador (recomendado: Chrome)
5. Observar la ejecución en tiempo real
6. Revisar el reporte en la pestaña Log Viewer y Reports

Test Suites disponibles:
Contacto Ginprosa - Pruebas de formulario de contacto y mapa
Formularios de Ginprosa - Validación de formularios de contacto y talento
Generalidades Ginprosa - Navegación y enlaces generales
Proyectos de Ginprosa - Visualización y filtrado de proyectos
Servicios de Ginprosa - Navegación y filtrado de servicios

Opción 2: Ejecutar un Test Case individual
1. En el Test Explorer, navegar a Test Cases
2. Seleccionar el caso específico (ej: KAT-001 - Formulario de Contacto)
3. Hacer clic derecho > Run
4. Seleccionar navegador y observar ejecución

Opción 3: Ejecutar todos los Test Suites
1. En el Test Explorer, ir a Test Suites
2. Seleccionar la carpeta raíz de Test Suites
3. Hacer clic derecho > Run All
4. Confirmar configuración de ejecución

Estructura del proyecto:
📁 Estructura del proyecto




