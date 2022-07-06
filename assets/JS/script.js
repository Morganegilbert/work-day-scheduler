var currentDayEl = document.getElementById("#current-day");
var containerEl = document.getElementsByClassName("container");

// For current time //
var currentDayEl = "require('moment')";
moment().format("dddd, MMMM Do");
let currentDayEl = moment();


// Submit button script
$('button[type=submit]').button({icons: {primary: 'ui-icon-disk'}}).click(function(event){
    event.preventDefault();
});
// var auditTask = function(taskEL);

// if (moment().isAfter(time)) {
//     $(taskEL).addClass("past");
// }
// if (moment().isBefore(time)) {
//     $(taskEL).addClass("future");
// }

// tasks.toDo.push({
//     text: taskText,
//     date: taskDate
//   });
  
//   saveTasks();

// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

// var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));}