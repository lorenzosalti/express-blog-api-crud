#  Express Blog - API CRUD

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