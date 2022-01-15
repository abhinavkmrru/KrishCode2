var data = {    // 0      1        2        3
    tasklist : [
        {
            parent: true,
            id: 1,
            taskname: "Eat breakfast",
            description: "Take food, eat all of it, put the plates and glass in sink",
            completed: true,
            subtasklist: [
                {
                    child: true,
                    id: 1,
                    taskname: "Take food",
                    description: "Pick all type of dishes available.",
                    completed: true,
                },
                {
                    child: true,
                    id: 2,
                    taskname: "Finish the food",
                    description: "Don't forget to drink milk.",
                    completed: false,
                },
                {
                    child: true,
                    id: 3,
                    taskname: "Clean",
                    description: "Put plates and glass in sink.",
                    completed: true,
                }
            ]
        },
        {
            parent: true,
            id: 2,
            taskname: "Go School",
            description: "Go to bus stop, get into the bus, go to your class room",
            completed: false,
            subtasklist: [
                {
                    child: true,
                    id: 1,
                    taskname: "Go to bus stop",
                    description: "reach 10 min before the arrival of the bus.",
                    completed: true
                },
                {
                    child: true,
                    id: 2,
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
    btn_complete: document.getElementById("btn_complete"),
    btn_edit: document.getElementById("btn_edit"),
    btn_delete: document.getElementById("btn_delete")
}

var parentid = null;
var childid = null;

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

    e_a.onclick = function(){
        populate_content_dom(task);
        if(task.subtasklist){
            populate_subtasklist_dom(task.subtasklist);
            populate_nav_header(task);
        }
    }

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

    if(task.parent){
        parentid = task.id;
        childid = null;
    }else{
        childid = task.id;
    }
    /*
        For Understanding

        parentid = 0 ,childid = undefined , which means parent is selected
        parentid = 0 ,childid = 0 , which means child is selected 

        parentid and childid are way to find perticular task inside the data element
    */

    if(task.completed){
        dom.btn_complete.innerHTML = "UnComplete"
    }else{
        dom.btn_complete.innerHTML = "Complete"
    }
    dom.btn_complete.onclick = function(){
        complete_task(task);
        populate_tasklist_dom();
        populate_content_dom(task);
        if(task.child){
            var pos_p=null;
            for(let i=0;i<data.tasklist.length;i++){
                if(parentid==data.tasklist[i].id){
                    pos_p=i;
                    break; // break out of the for loop
                }
            }
            populate_subtasklist_dom(data.tasklist[pos_p].subtasklist);
        }
    }
}

function populate_nav_header(task){
    dom.navheader_dom.innerHTML = task.taskname;
}

// Start button functionalities
function complete_task(task){
    task.completed = !task.completed;
}
// End button functionalities

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
