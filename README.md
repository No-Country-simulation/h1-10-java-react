


# Aplicación Web Justina.io (Donación de órganos humanos )

Contenido
 1. [Vista general del proyecto](#vista-general)
 2. [Conceptos clave](#conceptos-clave)
 3. [Requerimientos principales](#requerimientos-principales)
 4. [Arquitectura](#arquitectura)
 5. [Funcionalidades clave](#funcionalidades-clave)
 6. [Seguridad](#seguridad)
 7. [Stack Tecnológico](#stack-tecnológico)
 8. [Producto mínimo viable](#producto-mínimo-viable) 
 9. [Incepción y gamificación](#incepción-y-gamificación)
 10. [Despliegue del backend](#despliegue-del-backend) 

## Vista general del proyecto
La donación de órganos humanos es un calvario para las personas que desean ablación o implante de órganos humanos. El caso que conmovió a toda una nación es "**[Justina](https://ipnoticias.ar/actualidad/18772-la-otra-parte-de-la-historia-de-justina-el-padre-de-la-chica-que-con-su-corazon)**". Si la niña Justina, en paz descance,  quien perdió la vida por no encontrar una donador. De ahí que este proyecto sea una pieza que promueva de manera eficaz la donación de órganos. Tal como la misma niña decia "ayudemos papá".  Iniciativas como "**multiplicate x 7**" promovidas por el papá de la niña; don **Ezequiel Lo Cane** han permeado hasta esta instancia para colaborar mediante *hackaton* para prototipar una aplicación web con la promoción, gestión y control de los procesos de ablación e implante de órganos humanos. 

## Conceptos clave
|Concepto| Descripción |
|--|--|
| MVP |Producto Mínimo Viable |
| Ley Justina  | 27.447 La normativa regula las actividades relacionadas con la obtención y utilización de órganos, tejidos y células de origen humano en Argentina.  |
| IA | Inteligencia Artificial |
|Arquitectura Monolítica | Desarrollo software en el que todos los componentes de un sistema son interdependientes debido a los mecanismos de intercambio de datos dentro del sistema.| 
|ONG| Organización No Gubernamental |
| [INCUCAI](https://www.argentina.gob.ar/salud/incucai) | Instituto Nacional Central Único Coordinador de Ablación e Implante |
| Ablación | Extirpación de cualquier parte del cuerpo |



## Requerimientos principales
Para el presente proyecto y con base en los requerimientos del cliente, se concretaron los siguientes requerimientos clave:

 - Facilitar el registro y navegación del usuario en la aplicación;
 - Proteger los datos confidenciales de receptores, donadores y profesionales de la salud;
 - Soporte omni-canal;
 - Entrada de datos ligera o mínima;
 - Manejo seguro de los datos;
 - Transcripción de voz a texto controlada por IA; y
 - Arquitectura escalable

## Arquitectura
En relación con el modelo de arquitectura propuesto para la aplicación web "**Justina.io**" se desarrolló con base en un proceso escalable por un periodo determinado.  Esto es, de 1 a 3 años con el fin de dar pasos firmes para madurar el proyecto y consolidar su posición en el mercado internacional, consistente en las **[siguientes fases](https://mm.tt/app/map/3341210197?t=Ll2nUmmf7O)**:

 1. Inserción en el mercado;  
 2. Posicionamiento; y  
 3. Crecimiento sostenible

Para la **fase uno**, la arquitectura propuesta es una aplicación [monolítica-desacoplada](https://drive.google.com/file/d/19pIOHKlxUAo1A_8tfcUMSmLNFEkZUCUG/view?usp=drive_link). El principal objetivo es **acelerar el lanzamiento basados en un presupuesto financiero limitado** para poner a prueba la aplicación sin perjudicar la liquides y recursos de los inversionistas o quienes pretendan la propiedad de la misma. 
Es notable mencionar, en esta fase los costos son por demás, aliados para poner a prueba la aplicación.

La **fase dos** consiste en desacoplar la arquitectura monolítica al 100% para diversificar la operación en los diferentes dispositivos y repositorios necesarios para la oferta de servicios: Aumentar la seguridad, calidad y accesibilidad para la población objetivo. En esta fase es el paso a una **arquitectura desacoplada** . Lista para **ofertar API's** información y estadística valiosa para el sector médico profesional y ONG's del sector de ablación e implante de órganos humanos.
En términos financieros, esta arquitectura, incrementa la tercerización de servicios en la nube.

En la tercera fase (**[arquitectura micro-servicios](https://drive.google.com/file/d/1MKYMaVLzf3rfcFh3chaAts62WcZ1GF03/view?usp=sharing)**) el estado del arte en relación con las mejores prácticas y tendencias tecnológicas para impactar en las áreas sustanciales de las partes interesadas, a saber:
seguridad, desempeño,  usabilidad, trasabilidad o monitoreo, CI/CD y el ROI. Es necesario que se tomen en cuenta aspectos como la carga de usuarios y accesos a la plataforma "**Justina.io**"
Por último destacar que este MVP se inició con una arquitectura tipo fase dos, pero se deja en el tintero la propuesta de escalamiento del presente proyecto.


## Funcionalidades clave

 - Registro de usuarios; Administración de roles; 
 - Funcionalidades de consulta;
 - Seguimiento, agenda y control de medicamentos;
 - Comunicación omni canal;
 - Análisis de datos; y
 - Reportes.

## Seguridad
En el contexto inherente a la transparencia, rendición de cuentas y confidencialidad de los datos en poder de las instituciones gubernamentales y privadas. Es un eje central del la aplicación web "Justina.io", salvaguardar la secrecia de los datos de los diversos usuarios de la aplicación. De ahí que se toman todas la previsiones humanas y tecnológicas encapsuladas en la propia aplicación para generar confianza y cumplimiento a las normas establecidas en la matería de datos personales de la República Argentina.
Para dar cabal cumplimiento se instrumentó un librería estándar [RFC 7519](https://tools.ietf.org/html/rfc7519) probada como una de las mejores para la seguridad, acceso y autorización de cada  usuario registrado en la aplicación. 
Además, las consultas a expedientes, pacientes, donadores, receptores u ONG's, son mediante la consulta mínima de datos para salvaguardar los datos personales.

## Stack Tecnológico
Con base en los requerimientos del cliente y la propuesta tecnológica particularmente la arquitectura y el stack: El equipo propone desde la investigación inductiva -- estudio de caso -- la implementación evolutiva escalable con base en el desempeño de la aplicación y la carga de usuarios, y aceptabilidad en el mercado.

En consecuencia, la tecnológica es óptima para el desarrollo del proyecto. Cumple con los requerimientos de performance, seguridad, comunidad de desarrollo, soporte para superar las expectativas del cliente. Por lo anterior, se realizó un **[análisis comparativo](https://docs.google.com/spreadsheets/d/1P7H1w_B6U11fsHzqV2bJ-_w-1aCzGzr-/edit?usp=drive_link&rtpof=true&sd=true)** del lenguaje y framework respectivo.

Equipo de desarrollo

| Nombre | Posición  |   Contacto   |
|--|--|--|
| <img src="https://raw.github.com/robertrengel/s15-21-t-python-react/main/images/argentinaflag.png" width="20" height="15"> Diego Gonzalez Riveira|Team leader | <a href="https://github.com/ushiwushi"><img src="https://camo.githubusercontent.com/e8608a6316b9d88ea49559b15837c90b1c14fb172ca6743b50150cd54f208e26/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"  alt="Developer GitHub"> <a href="https://www.linkedin.com/in/diego-gonzalez-riveira/" target="_top"><img src="https://camo.githubusercontent.com/29ba59dbf61686238096822c7de916a9b41c40bf362b70e7f2c609551ce8f656/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"  alt="Developer Linkedin"> 
|<img src="https://raw.githubusercontent.com/robertrengel/s15-21-t-python-react/main/images/mexicoflag.png" width="20" height="15"> René Silva Carrillo | Project manager  |<a href="https://github.com/rene3255" target="_top"><img src="https://camo.githubusercontent.com/e8608a6316b9d88ea49559b15837c90b1c14fb172ca6743b50150cd54f208e26/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"  alt="Developer GitHub"> <a href="https://www.linkedin.com/in/vmc555/" target="_top"><img src="https://camo.githubusercontent.com/29ba59dbf61686238096822c7de916a9b41c40bf362b70e7f2c609551ce8f656/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"  alt="Developer Linkedin">   
<img src="https://raw.github.com/robertrengel/s15-21-t-python-react/main/images/colombiaflag.png" width="20" heigth="15"> Gonzalo Villegas Quiros |Backend|<a href="https://github.com/Govil-web"><img src="https://camo.githubusercontent.com/e8608a6316b9d88ea49559b15837c90b1c14fb172ca6743b50150cd54f208e26/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"><a href="https://www.linkedin.com/in/govil-web/" target="_top"> <img src="https://camo.githubusercontent.com/29ba59dbf61686238096822c7de916a9b41c40bf362b70e7f2c609551ce8f656/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"  alt="Developer Linkedin">
| <img src="https://raw.github.com/robertrengel/s15-21-t-python-react/main/images/argentinaflag.png" width="20" height="15"> Nicolás | Backend | <a href="https://github.com/nicolemos" target="_top"><img src="https://camo.githubusercontent.com/e8608a6316b9d88ea49559b15837c90b1c14fb172ca6743b50150cd54f208e26/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"  alt="Developer GitHub"> <a href="https://www.linkedin.com/in/nicolas-lemos/" target="_top"><img src="https://camo.githubusercontent.com/29ba59dbf61686238096822c7de916a9b41c40bf362b70e7f2c609551ce8f656/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"  alt="Developer Linkedin">
| <img src="https://raw.github.com/robertrengel/s15-21-t-python-react/main/images/argentinaflag.png" width="20" height="15"> Cintia Jimena Martínez| Frontend | <a href="https://github.com/KatuGT" target="_top"><img src="https://camo.githubusercontent.com/e8608a6316b9d88ea49559b15837c90b1c14fb172ca6743b50150cd54f208e26/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"  alt="Developer GitHub"> <a href="https://www.linkedin.com/in/cintiajimenamartinez/" target="_top"><img src="https://camo.githubusercontent.com/29ba59dbf61686238096822c7de916a9b41c40bf362b70e7f2c609551ce8f656/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"  alt="Developer Linkedin">
| <img src="https://raw.github.com/robertrengel/s15-21-t-python-react/main/images/argentinaflag.png" width="20" height="15"> David mamani | Frontend | <a href="https://github.com/davidmedev222" target="_top"><img src="https://camo.githubusercontent.com/e8608a6316b9d88ea49559b15837c90b1c14fb172ca6743b50150cd54f208e26/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"  alt="Developer GitHub"> <a href="https://linkedin.com/in/davidmedev" target="_top"><img src="https://camo.githubusercontent.com/29ba59dbf61686238096822c7de916a9b41c40bf362b70e7f2c609551ce8f656/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"  alt="Developer Linkedin">   
|<img src="https://raw.githubusercontent.com/madebybowtie/FlagKit/master/Assets/PNG/BO@2x.png" width="20" height="15" > Yhordi Choque Espinoza | Frontend | <a href="https://github.com/YhordiC" target="_top"><img src="https://camo.githubusercontent.com/e8608a6316b9d88ea49559b15837c90b1c14fb172ca6743b50150cd54f208e26/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"  alt="Developer GitHub"> <a href="https://www.linkedin.com/in/yhordi-code/" target="_top"><img src="https://camo.githubusercontent.com/29ba59dbf61686238096822c7de916a9b41c40bf362b70e7f2c609551ce8f656/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"  alt="Developer Linkedin"> 

## Frontend
| ![enter image description here](https://camo.githubusercontent.com/898277a8698ac5dc197cccfe1944ed1f5c63ce5d16cc3f587050d4114a0d633d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3630646166613f7374796c653d666f722d7468652d6261646765266c6f676f3d5265616374266c6f676f436f6c6f723d7768697465)  | ![enter image description here](https://camo.githubusercontent.com/27128c5d52bcd6d44fb87a914ef89a9ec6724bec3f9d2b2cf595dd12b3b98767/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5461696c77696e645f6373732d3162616462613f7374796c653d666f722d7468652d6261646765266c6f676f3d5461696c77696e64637373266c6f676f436f6c6f723d7768697465) |
|--|--|

## Backend

| <img src="https://user-images.githubusercontent.com/25181517/117201470-f6d56780-adec-11eb-8f7c-e70e376cfd07.png" width="60" height="60"> | <img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" width="60" height="60"> 	|<img src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" width="60" height="60">
|--|--|--|

## Producto Mínimo Viable

 Tablero de avances (Monitoreo y control) El mecanismo para seguimiento y control sobre los avances del proyecto se propone implementar las cuatro disciplinas de la ejecución dentro del [**marco operativo de la agilidad**](https://agilemanifesto.org/):

 1. Enforcarse en lo sustancialmente importente del proyecto; 
 2. Establacer índices predictivos y de resultados;
 3. Establecer un **[tablero de avances](https://renescre.atlassian.net/jira/software/projects/H1JR/boards/3)**;
 4. Establecer un mecanismo de rendición de cuentas.

**Respositorio (desarrollo de software)**

**Producción Justina.io**

| Stack de desarrollo | Acción  | Enlace
|--|--|--|
| Backend | Deployment | https://govil-web.github.io/backend_justina_deploy/
| Backend | Documentación | https://backend-justina-deploy.onrender.com/swagger-ui/index.html
| Frontend | Deployment | https://justina-git-frontend-katu93s-projects.vercel.app/

## Incepción y gamificación
Realizar un proyecto implica herramientas tecnológicas y un en quipo de personas comprometidas para lograrlo. La incepción implica  generar confianza, liderazgo humilde, políticas y normas de trabajo adaptables a los equipo multiculturales como es el caso las personas que integran este equipo.
De ahí que se tomen medidas ludicas integradoras basadas en el profesionalismo y marcos de trabajo que generen un equilibrio profesional y emocional en cada uno de los integrantes.
Para esto se utilizaron la herramientas:
| Plataforma | Enlace  |
|--|--|
| Miro | https://miro.com/app/dashboard/ |
| MindMinster | https://www.mindmeister.com/app/folders/2715836 |

## Despliegue del backend
- **Estructura base**
  ![image](https://github.com/No-Country-simulation/h1-10-java-react/edit/main/README.md#:~:text=estructura_backend.-,jpg,-frontend)
