var data = {    // 0      1        2        3
    tasklist : [
        {
            taskname: "Eat breakfast",
            description: "Take food, eat all of it, put the plates and glass in sink",
            completed: true,
            subtasklist: [
                {
                    taskname: "Take food",
                    description: "Pick all type of dishes available.",
                    completed: true,
                },
                {
                    taskname: "Finish the food",
                    description: "Don't forget to drink milk.",
                    completed: false,
                },
                {
                    taskname: "Clean",
                    description: "Put plates and glass in sink.",
                    completed: true,
                }
            ]
        },
        {
            taskname: "Go School",
            description: "Go to bus stop, get into the bus, go to your class room",
            completed: false,
            subtasklist: [
                {
                    taskname: "Go to bus stop",
                    description: "reach 10 min before the arrival of the bus.",
                    completed: true
                },
                {
                    taskname: "Go to class room",
                    description: "Do not ....",
                    completed: true
                }
            ]
        },
    ]
}

// var tasklist_dom = document.getElementById("tasklist_dom");
// same can be achieve as
var dom = {
    tasklist_dom: document.getElementById("tasklist_dom"),
    navheader_dom: document.getElementById("navheader_dom"),
    subtasklist_dom: document.getElementById("subtasklist_dom"),
    taskheader_dom: document.getElementById("taskheader_dom"),
    taskdescription_dom: document.getElementById("taskdescription_dom"),
}


//############ for understanding the dom manipulation
/*
var e_li = document.createElement("li");            // <li></li>
var e_a = document.createElement("a");              // <a></a>
e_a.href="#";                                       // <a href="#"></a>
e_a.innerHTML=data.tasklist[0].taskname;            // <a href="#">Eat breakfast</a>
e_li.appendChild(e_a);                              // <li><a href="#">Eat breakfast</a></li>

dom.tasklist_dom.appendChild(data.tasklist[0]);
dom.navheader_dom.innerHTML = data.tasklist[0].taskname;
*/
//########### for understanding the dom manipulation
                    
function createTaskLi(task){        // task is an object
    var e_li = document.createElement("li");            
    var e_a = document.createElement("a");              
    e_a.href="#";                                       
    e_a.innerHTML=task.taskname;
    if(task.completed){
        var strike = document.createElement("s");
        strike.appendChild(e_a);
        e_li.appendChild(strike);   // <li><s> <a href="#">Eat breakfast</a> </s></li> 
    }else{
        e_li.appendChild(e_a);      // <li><a href="#">Eat breakfast</a></li> 
    }       
    return e_li;
}

function populate_tasklist_dom(){
    dom.tasklist_dom.innerHTML = "";

    for(var i=0;i<data.tasklist.length;i++){
        var taskLi = createTaskLi(data.tasklist[i]);
        dom.tasklist_dom.appendChild(taskLi);
    }
}

function populate_subtasklist_dom(subtasklist){     // subtasklist is an array of subtask object
    dom.subtasklist_dom.innerHTML = "";
    for(var i=0;i<subtasklist.length;i++){
        var subtaskLi = createTaskLi(subtasklist[i]);
        dom.subtasklist_dom.appendChild(subtaskLi);
    }
}

function populate_content_dom(task){
    dom.taskheader_dom.innerHTML = task.taskname;
    dom.taskdescription_dom.innerHTML = task.description;
}

function populate_nav_header(task){
    dom.navheader_dom.innerHTML = task.taskname;
}


populate_tasklist_dom();
populate_subtasklist_dom(data.tasklist[0].subtasklist);
populate_content_dom(data.tasklist[0]);
populate_nav_header(data.tasklist[0]);











function showDialog(){
    var dialog_container = document.getElementById("dialog_container");
    dialog_container.classList.remove("display_none");
    dialog_container.innerHTML = "";

    var dialog = createDialogBox(
        "Header Add Task",      // header
        "Enter Task Name dy",   // label1txt
        "Description dy",       // label2txt
        "Save dy",              // footerbtntxt
        function(){             // footerbtn_functionality
            alert("Saved Successfully");
        }
    );

    dialog_container.appendChild(dialog);
}


function showDialog1(){
    var dialog_container = document.getElementById("dialog_container");
    dialog_container.classList.remove("display_none");
    dialog_container.innerHTML = "";

    var dialog = createDialogBox(
        "Header Add Sub Task",      // header
        "Enter Sub Task Name dy",   // label1txt
        "Description dy",           // label2txt
        "Save Subtask dy",          // footerbtntxt
        function(){                 // footerbtn_functionality
            alert("Saved Sub Task Successfully");
        }
    );

    dialog_container.appendChild(dialog);
}
