$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre y Apellido==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba su Nombre y Apellido</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }


             // Validado Telefono / Celular ==============================
        if( $('#phone').val() == '' ){
            errores += '<p>Ingrese su Telefono / Celular</p>';
            $('#phone').css("border-bottom-color", "#F14B4B")
        } else{
            $('#phone').css("border-bottom-color", "#d1d1d1")
        }




        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese su Gmail</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba Su Mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
