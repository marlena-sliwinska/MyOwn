export const completition = function (tasks) {
    const totalTasksQuantity = tasks.length
    let doneTasksQuantity = 0;
    tasks.forEach(task => {
        if (task.isDone) doneTasksQuantity += 1
    });
    const completition = {
        doneTasksQuantity,
        totalTasksQuantity
    }
    return completition
}