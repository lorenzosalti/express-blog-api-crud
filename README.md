#  Express Blog - API CRUD

---

## Giorno 1

### Milestone 1

Creare un controller per i post, in una cartella ***controllers***. <br>
All’interno della cartella, preparare tutte le funzioni necessarie e copiare in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi). <br>
Importare, nel file delle rotte, le funzioni dichiarate nel controller e associarle alle varie rotte, come visto in classe. <br>
Testare su postman se chiamando gli endpoint si ricevono le stesse risposte di prima. <br>
Se tutto funziona, passare alla prossima milestone.

### Milestone 2

Creare una cartella ***data*** con un file che contenga ed esporti l’array di posts in allegato.  Importare questo file in cima al controller. <br>

Implementare le logiche CRUD:
- Index dovrà restituire la lista dei post in formato JSON.
- Show dovrà restituire un singolo post in formato JSON.
- Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (*console.log*) la lista aggiornata, e rispondere con uno stato *204* e nessun contenuto.

### Bonus

- Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag.
- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato *404* e un messaggio d’errore, sempre in formato JSON.

---

## Giorno 2

### Milestone 1

Preparare una nuova chiamata verso la rotta store su Postman.

- Impostare il verbo e l’endpoint corretti
- Selezionare il tab body e scegliamo il formato raw e JSON
- Inserire come corpo della request un oggetto che rappresenti un nuovo post.

Nota: se si vuole avere delle immagini, inventarle pure. <br>
Nota: non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.

### Milestone 2

Impostare il body-parser per far sì che la app riesca a decifrare il request body.
Poi, all’interno della rotta Store, stampare nel terminale i dati in arrivo, grazie a un ***console.log***.

### Milestone 3

Implementare quindi la logica per aggiungere un nuovo post al blog, e preparare la risposta adeguata. <br>
Testarlo con postman.

### Milestone 4

Ripetere il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le risorse.

### Bonus

- Quelli del giorno 1, se non già fatti
- In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.