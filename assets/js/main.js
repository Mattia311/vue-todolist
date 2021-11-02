/*stampare in pagina un item per ogni elemento contenuto in un array ogni item ha una "x" associata: 
cliccando su di essa, l'item viene rimosso dalla lista 
predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, 
il testo digitato viene aggiunto alla lista*/


/*La nostra todo list avrá alcune tasks di default predefinite
 L'utente puó inserire nuove tasks
 Cliccando sulla "X" l'utente puó cancellare una task
 Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
 ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)*/

 

 
 
 
const app = new Vue ({
    el: '#app',
    data: {
        img: 'https://www.boolean.careers/images/misc/logo.png',

        newTask: "",
        
        tasks: [
 
            'fare i compiti',
            'fare la spesa',
            'fare il bucato',
          
        ],
        trashed: [],
        errore: false
    },
    methods: {
        remove (i,task) {
           this.tasks.splice(i,1)
           this.trashed.push(task)
        },
        
        add () {
            console.log('aggiungi');
            if(this.newTask != '' && this.newTask.length > 10){
                this.tasks.push(this.newTask)
                this.errore = false
            } else {
                this.errore = true
                
            }
            
            this.newTask = ''
            
        },
        
        addAgain (){
            console.log('rimetti');
            this.tasks.push(this.trashed)

        },

        completed() {
            if(tasks.length > 6) {
                alert('ciao')
        
            }

        }
    }
})
