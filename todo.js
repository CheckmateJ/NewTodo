let unique = []
document.querySelector('.add').addEventListener('click', function (e) {
    e.preventDefault()
    let addNewCategory = document.querySelector('.category').value
    let addNewTask = document.querySelector('.task').value
    const task = [addNewCategory, addNewTask]
    // const displayTask = document.querySelector('.display').innerHTML = addNewTask.map(el=> el)
    // console.log(addNewTask)
    // unique = [... new Set(addNewTask)]
    // const saveLocal = localStorage.setItem('Task', addNewTask)
    // const getLocal = localStorage.getItem('Task')
    // console.log(saveLocal)
    // console.log('that is from local storage ' + getLocal)
    // document.querySelector('.display').innerHTML = getLocal

    console.log(task)
})
