// inizializzo Vue e aggiungo l'array al suo interno
const app = new Vue ({

    el: '#app',

    data: {

        images: [
            {
                url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
                title: 'Svezia',
                description: 'Svezia ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
        
            {
                url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Perù',
                description: 'Perù ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
        
            {
                url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
                title: 'Chile',
                description: 'Chile ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },

            {
                url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Argentina',
                description: 'Argentina ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },

            {
                url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
                title: 'Colombia',
                description: 'Colombia ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
        ],

        currentImage: 0 // imposto una variabile che funga da indicatore \ reference per l'immagine mostrata

    },

    // aggiungo funzioni (che vanno inserite in 'methods', allo stesso livello di 'data') che incrementano o decrementano la variabile
    methods: {

        // funzione per andare indietro, con ciclo infinito
        previous: function() {
            if (this.currentImage == 0) {
                this.currentImage = this.images.length-1;
            } else {
                this.currentImage--;
            }
        },

        // funzione per andare avanti; con sintassi abbreviata e ciclo infinito
        next() {
            if (this.currentImage == this.images.length-1) {
                this.currentImage = 0;
            } else {
                this.currentImage++;
            }
        },

        // Bonus_2: creo funzione autoplay per andare avanti in automatico ogni secondo
        autoplay() {
           intervalId = setInterval(this.next,1000); // uso una variabile globalissima per poter fermare il setInterval da un'altra funzione
        },

        // Bonus_3: creo funzione per resettare il setInterval
        resetInterval() {
           clearInterval(intervalId);
        },

        // Bonus_4: prime prove...
        moveWithKeyboardArrows() {
            window.addEventListener("keydown", function(event) {
                console.log(event);
                console.log(event.key);
                if (event.key == 'ArrowLeft') {
                    console.log('freccia sinistra'); // debug
                } else if (event.key == 'ArrowRight') {
                    console.log('freccia destra'); // debug
                }
            });
        }

    },

    // quando Vue ha appena trasformato gli elementi nel DOM, recupero il gancio (hook) 'mounted' e richiamo 'autoplay'
    mounted: function() {
        this.autoplay();
        this.moveWithKeyboardArrows();
    }

})

// uso .this per riferirmi all'oggetto su cui sto compiendo l'azione (in questo caso è l'oggetto Vue).
// senza fare uso di .this non funzionerebbe questo codice.