# Captura-masiva-de-datos-en-IoT-Smartcities.

Web Scraping es la manera de recolectar datos publicos de una manera automatica y organizada.

El proyecto utiliza Node js y npm para gestionar las dependencia asi como express js y pug para las vistas.
Se utiliza la pagina de la pelicula El Menu en IMDB para obtener una lista de 5 peliculas relacionadas a esta.
https://www.imdb.com/title/tt9764362/?ref_=hm_fanfav_tt_i_2_pd_fp1_wa

Tecnologias para Web Scrapping
* Puppeteer: es utilizado para automatización web y web scraping.
  Ejemplos de uso:
  * Extraer elementos de texto.
  * Interactuar con las paginas llenado forms, haciendo click a botones o buscando elementos en search bars. 
  * Descarga de imagenes de la web.
  
* Tutorial:
  1. Instalar Puppeteer:  
      `npm i puppeteer`
  2. Instalar Express:  
      `npm i express`    
  3. Llamar a la dependencia de puppeteer y express en app.js.
  4. Definir pug como la vista.
  5. En la carga de la pagina llamar a la función que hace el scrapping
  6. Declarar una nueva instancia de browser y definir la variable "pagina" , el cual sera utlizado para la navegación en las paginas y el scrapping de elementos.
  7. Hacer que la pagina se dirija al URL deseado.
  8. Dentro de un for loop definir los elementos que se buscaran en la pagina, copiando el selector de los elementos que buscaremos y declarandolo como el elemento en el codigo.En este caso se puede iterar los elementos ya que se encuentran en una lista.
  9. Se repite lo mismo con el titulo de la pelicula.
  10. Tanto los titulos de la pelicula como de las peliculas relacionadas se envian a la vista para que se renderize y se muestre en la pantalla.
  
  
