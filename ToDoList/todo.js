let input = document.querySelector('.enteredlist');
let addlist = document.querySelector('.addlist');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if (input.value.trim() !== '') {
        addlist.classList.add('active');
    } else {
        addlist.classList.remove('active');
    }
});

addlist.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        let newitem = document.createElement('div');
        newitem.classList.add('item');
        newitem.innerHTML = `
            <p>${input.value}</p>
            <div class="itembtn">
            <i class="fa-sharp fa-solid fa-square-check"></i>
                <i class="fa-sharp fa-solid fa-trash"></i>
            </div>
        `;
        tasks.appendChild(newitem);
        input.value = '';
    } else {
        alert("Please enter a task");
    }
});

tasks.addEventListener('click',(e)=> {
    if (e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove();
    }
});
tasks.addEventListener('click',(e)=> {
    if (e.target.classList.contains('fa-square-check')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
});