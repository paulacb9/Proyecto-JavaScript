$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }

    // Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el '+moment().format('dddd')+' dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque scelerisque quam, sed mollis velit fermentum vitae. Pellentesque massa nisi, convallis in odio sit amet, vehicula ullamcorper odio. Aliquam id sodales ligula. Cras eu accumsan erat, eget accumsan neque. Fusce ipsum velit, lacinia at magna vel, feugiat bibendum enim. Nulla efficitur diam sed ullamcorper porttitor. Nunc ut lectus sapien. Mauris a pellentesque velit, nec faucibus mi. In hac habitasse platea dictumst. Maecenas eget felis ut nulla lobortis ultricies sit amet vitae orci. Nulla rutrum pellentesque enim sed dignissim. Vestibulum a quam non arcu volutpat consequat ac sit amet lorem. Maecenas sit amet vestibulum metus. Curabitur rutrum et massa sed lobortis. Aliquam rhoncus blandit est, et semper sem congue sed. Morbi non lectus eu urna faucibus tempor. Ut lobortis ipsum purus. "
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el '+moment().format('dddd')+' dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque scelerisque quam, sed mollis velit fermentum vitae. Pellentesque massa nisi, convallis in odio sit amet, vehicula ullamcorper odio. Aliquam id sodales ligula. Cras eu accumsan erat, eget accumsan neque. Fusce ipsum velit, lacinia at magna vel, feugiat bibendum enim. Nulla efficitur diam sed ullamcorper porttitor. Nunc ut lectus sapien. Mauris a pellentesque velit, nec faucibus mi. In hac habitasse platea dictumst. Maecenas eget felis ut nulla lobortis ultricies sit amet vitae orci. Nulla rutrum pellentesque enim sed dignissim. Vestibulum a quam non arcu volutpat consequat ac sit amet lorem. Maecenas sit amet vestibulum metus. Curabitur rutrum et massa sed lobortis. Aliquam rhoncus blandit est, et semper sem congue sed. Morbi non lectus eu urna faucibus tempor. Ut lobortis ipsum purus. "
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el '+moment().format('dddd')+' dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque scelerisque quam, sed mollis velit fermentum vitae. Pellentesque massa nisi, convallis in odio sit amet, vehicula ullamcorper odio. Aliquam id sodales ligula. Cras eu accumsan erat, eget accumsan neque. Fusce ipsum velit, lacinia at magna vel, feugiat bibendum enim. Nulla efficitur diam sed ullamcorper porttitor. Nunc ut lectus sapien. Mauris a pellentesque velit, nec faucibus mi. In hac habitasse platea dictumst. Maecenas eget felis ut nulla lobortis ultricies sit amet vitae orci. Nulla rutrum pellentesque enim sed dignissim. Vestibulum a quam non arcu volutpat consequat ac sit amet lorem. Maecenas sit amet vestibulum metus. Curabitur rutrum et massa sed lobortis. Aliquam rhoncus blandit est, et semper sem congue sed. Morbi non lectus eu urna faucibus tempor. Ut lobortis ipsum purus. "
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el '+moment().format('dddd')+' dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque scelerisque quam, sed mollis velit fermentum vitae. Pellentesque massa nisi, convallis in odio sit amet, vehicula ullamcorper odio. Aliquam id sodales ligula. Cras eu accumsan erat, eget accumsan neque. Fusce ipsum velit, lacinia at magna vel, feugiat bibendum enim. Nulla efficitur diam sed ullamcorper porttitor. Nunc ut lectus sapien. Mauris a pellentesque velit, nec faucibus mi. In hac habitasse platea dictumst. Maecenas eget felis ut nulla lobortis ultricies sit amet vitae orci. Nulla rutrum pellentesque enim sed dignissim. Vestibulum a quam non arcu volutpat consequat ac sit amet lorem. Maecenas sit amet vestibulum metus. Curabitur rutrum et massa sed lobortis. Aliquam rhoncus blandit est, et semper sem congue sed. Morbi non lectus eu urna faucibus tempor. Ut lobortis ipsum purus. "
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el '+moment().format('dddd')+' dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque scelerisque quam, sed mollis velit fermentum vitae. Pellentesque massa nisi, convallis in odio sit amet, vehicula ullamcorper odio. Aliquam id sodales ligula. Cras eu accumsan erat, eget accumsan neque. Fusce ipsum velit, lacinia at magna vel, feugiat bibendum enim. Nulla efficitur diam sed ullamcorper porttitor. Nunc ut lectus sapien. Mauris a pellentesque velit, nec faucibus mi. In hac habitasse platea dictumst. Maecenas eget felis ut nulla lobortis ultricies sit amet vitae orci. Nulla rutrum pellentesque enim sed dignissim. Vestibulum a quam non arcu volutpat consequat ac sit amet lorem. Maecenas sit amet vestibulum metus. Curabitur rutrum et massa sed lobortis. Aliquam rhoncus blandit est, et semper sem congue sed. Morbi non lectus eu urna faucibus tempor. Ut lobortis ipsum purus. "
            }
        ];
    
        posts.forEach((item, index) => {
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer más</a>
            </article>
            `;

            $("#posts").append(post);
        });
    }

    // Selector de tema
    var theme = $('#theme');

    $('#to-green').click(function(){
        theme.attr("href", "css/green.css");
    });

    $('#to-blue').click(function(){
        theme.attr("href", "css/blue.css");
    });

    $('#to-red').click(function(){
        theme.attr("href", "css/red.css");
    });

    // Scroll arriba de la web
    $('.subir, .subir-top').click(function(){

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        console.log("subindo");

        return false;
    });

    // Login falso
    $('#login').submit(function(){
        var form_name = $('#form_name').val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $('#about p');
        
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+" </strong>");
        about_parrafo.append("<a href='#' id='logout'> Cerrar sesion</a>");

        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }

    // Validacion
    if(window.location.href.indexOf('contacto') > -1){
        
        $("form input[name='date']").datepicker({
            dateFormat: "dd/mm/yy"
        });

        $.validate();
    }

});