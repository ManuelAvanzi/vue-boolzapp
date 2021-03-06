new Vue ({
    el:"#app",
    data:{

        //indice 
        activeIndex: 0,

        //search from input
        inputText: '',
        //messaggio vuoto del utente
        myMessage: '',
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Estevan',
                avatar: '_4',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Scusa ma chi sei ?',
                        status: 'received'
                    }
                ],
            },
        ]
        
        
    },
    methods: {
        //cambio persona e chat 
        selectedChat: function (index) {
          this.activeIndex = index;
          console.log(`ho selezionato ${this.activeIndex}`);
        },
        //invio messaggio e mi rispondo dopo un secondo 
        sendMessage: function () {
          console.log(`invio messaggio`)


          let activeContact = this.contacts[this.activeIndex];
          console.log(activeContact)

          activeContact.messages.push(
                {
                 
                  text: this.myMessage,
                  status: 'sent',
               });
      
         this.myMessage = '';
        setTimeout(function() {  
        activeContact.messages.push({
         
          text: 'ok',
          status: 'received'
        });
        }, 1000)
     },
     //cerco una persona tra i contatti 
     searchUser:function(){

     }
    },

});