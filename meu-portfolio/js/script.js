function irProjetos(){

  document
    .getElementById("projetos")
    .scrollIntoView({
      behavior:"smooth"
    });
}

Swal.fire({

    title: 'Bem-vindo 🚀',
    text: 'Digite seu nome:',

    input: 'text',
    inputPlaceholder: 'Seu nome aqui',

    background: '#050505',
    color: '#ffffff',

    confirmButtonText: 'Entrar',

    customClass: {
    confirmButton: 'btn-neon'
    },

    buttonsStyling: false,

    backdrop: `
    rgba(0,0,0,0.85)
     `,

    allowOutsideClick: false

    }).then((result) => {

        let nome = result.value;

        if(nome && nome.trim() !== "") {

            Swal.fire({

              title: `Olá, ${nome}! 🚀`,
              text: 'Seja bem-vindo ao meu portfólio',

              icon: 'success',

              background: '#050505',
              color: '#ffffff',

              customClass: {
                confirmButton: 'btn-neon'
              },

               buttonsStyling: false

              });

       } else {
           Swal.fire({
             title: 'Bem-vindo 🚀',
             text: 'Aproveite o site',
             background: '#050505',
             color: '#ffffff',

             customClass: {
                confirmButton: 'btn-neon'
              },

              buttonsStyling: false

           });

           }

        });