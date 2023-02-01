# Captura-masiva-de-datos-en-IoT-Smartcities.

Juan Carlos Moguel Solis

Web Scraping es la manera de recolectar datos públicos de una manera automática y organizada.

El proyecto utiliza Node js y npm para gestionar las dependencia así como express js y pug para las vistas.
Se utiliza la página de la película El Menu en IMDB para obtener una lista de 5 películas relacionadas a esta.
https://www.imdb.com/title/tt9764362/?ref_=hm_fanfav_tt_i_2_pd_fp1_wa

Tecnologías para Web Scrapping
* Puppeteer: es utilizado para automatización web y web scraping.
  Ejemplos de uso:
  * Extraer elementos de texto.
  * Interactuar con las páginas llenado forms, haciendo click a botones o buscando elementos en search bars. 
  * Descarga de imágenes de la web.
  
* Tutorial:
  1. Instalar Puppeteer:  
      `npm i puppeteer`
  2. Instalar Express:  
      `npm i express`    
  3. Llamar a la dependencia de puppeteer y express en app.js.
  4. Definir pug como la vista.
  5. En la carga de la página llamar a la función que hace el scrapping
  6. Declarar una nueva instancia de browser y definir la variable "pagina" , el cual será utilizado para la navegación en las páginas y el scrapping de elementos.
  7. Hacer que la página se dirija al URL deseado.
  8. Dentro de un for loop definir los elementos que se buscaran en la página, copiando el selector de los elementos que buscaremos y declarándolo como el elemento en el código. En este caso se puede iterar los elementos ya que se encuentran en una lista.
  9. Se repite lo mismo con el título de la película.
  10. Tanto los títulos de la película como de las películas relacionadas se envián a la vista para que se renderice y se muestre en la pantalla.
  
  
<img width="1512" alt="Screen Shot 2023-02-01 at 8 38 56 PM" src="https://user-images.githubusercontent.com/93965072/216145950-39d852a4-7434-4948-8f8f-1bce025b2d04.png">
