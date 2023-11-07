const users = [
    {
        name: "Sidney",
        subject: "Replenishment Request",
        requester: "Warehouse User",
        status: "Open",
        priority: "High"
    },
    {
        name: "Corina",
        subject: "New Client Onboard",
        requester: "Corina",
        status: "Open",
        priority: "Medium"
    },
    {
        name: "Patti",
        subject: "Phone not working",
        requester: "Patti",
        status: "Overdue",
        priority: "Low"
    },
    {
        name: "David",
        subject: "Delete Temp Badge",
        requester: "David",
        status: "Open",
        priority: "Medium"
    }
    
];

//First Row
const usersSubject = ["Replen Request", "New Client Onboard", "LTL Order"];
window.onload = function() {
    document.getElementById("data-sub").innerHTML = usersSubject[1];
    
    const usersNames = ["SSmith", "DSimcho", "PCross"];
        document.getElementById("data-request").innerHTML += usersNames[0];

    const usersStatus = ["Open", "Closed", "Pending"];
        document.getElementById("data-stat").innerHTML += usersStatus[2];

    const usersPriority = ["Low", "Medium", "High", "Urgent"];
        document.getElementById("data-priority").innerHTML += usersPriority[1];

    
    //Second Row
    const usersSubjectOne = ["Replen Request", "New Client Onboard", "LTL Order"];
        document.getElementById("data-sub-one").innerHTML = usersSubjectOne[2];
    
    const usersRequestOne = ["SSmith", "DSimcho", "PCross"];
        document.getElementById("data-request-one").innerHTML = usersRequestOne[1];
    
    const usersStatOne = ["Open", "Closed", "Pending"];
        document.getElementById("data-stat-one").innerHTML = usersStatOne[0];
    
    const usersPriorityOne = ["Low", "Medium", "High", "Urgent"];
        document.getElementById("data-priority-one").innerHTML = usersPriorityOne[0];

    //Third Row
    const usersSubjectTwo = ["Replen Request", "New Client Onboard", "LTL Order"];
        document.getElementById("data-sub-two").innerHTML = usersSubjectTwo[1];

    const usersRequestTwo = ["SSmith", "DSimcho", "PCross"];
        document.getElementById("data-request-two").innerHTML = usersRequestTwo[2];

    const usersStatTwo = ["Open", "Closed", "Pending"];
        document.getElementById("data-stat-two").innerHTML = usersStatTwo[2];

    const usersPriorityTwo = ["Low", "Medium", "High", "Urgent"];
        document.getElementById("data-priority-two").innerHTML = usersPriorityTwo[3]; 
        
    //Fourth Row    
    const usersSubjectThree = ["Replen Request", "New Client Onboard", "LTL Order"];
        document.getElementById("data-sub-three").innerHTML = usersSubjectThree[0];

    const usersRequestThree = ["SSmith", "DSimcho", "PCross"];
        document.getElementById("data-request-three").innerHTML = usersRequestThree[1];

    const usersStatThree = ["Open", "Closed", "Pending"];
        document.getElementById("data-stat-three").innerHTML = usersStatThree[1];

    const usersPriorityThree = ["Low", "Medium", "High", "Urgent"];
        document.getElementById("data-priority-three").innerHTML = usersPriorityThree[3];        
    }; 


let counter = 0;
for (const obj of users) {
    if (obj.priority === 'Medium') counter++;
}



