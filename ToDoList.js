
const toDoTask = (title,toDo) =>{
    return {
        id: myToDos.length + 1,
        title: title,
        toDo: toDo
    };
};

myToDos = [];

var addToDo = (titleOfToDo,taskToDo) => {
    var createdToDo = toDoTask(titleOfToDo,taskToDo);
    myToDos.push(createdToDo);
};

// var deleteToDo = (id) => {
//     let y = 0;
//     myToDos.forEach(x => {
//         if(id === x.id){
//             myToDos.slice(y,1);
//         }
//         else{
//             y++;
//         }
//     })
// };

var deleteToDo = (id) =>{
    const indexOfToDo = myToDos.findIndex(x => x.id === id);
    myToDos.splice(indexOfToDo,1);
};

var viewToDo = () => {
    myToDos.forEach(x => {
        console.log(`-------------ID: ${x.id}-------------`);
        console.log(`TITLE: ${x.title}`);
        console.log(`${x.toDo}`);    
    });
};

addToDo("Work out","Go gym afternoon");
addToDo("Go home","Study");
addToDo("sleep","go to sleep at 20:00");

viewToDo();
deleteToDo(2);
viewToDo();






