
const tasks = [
    { description: "Write report", completed: false, priority: 2 },
    { description: "Send email", completed: true, priority: 3 },
    { description: "Prepare presentation", completed: false, priority: 1 },
];

const pendingTaskWithShorted = tasks
    .filter(task => !task.completed)
    .sort((a, b) => a.priority - b.priority );

console.log(pendingTaskWithShorted)