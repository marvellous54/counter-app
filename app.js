let counterAmountInputEl = document.getElementById("counter-amount-input-el");
let enterAmountBtnEl = document.getElementById("enter-amount-btn-el");
let counterContainerEl = document.getElementById("counter-container-el");
let inputContainerEl = document.getElementById("input-container-el");
let counterBtnsContainerEl; 

let counterAmount = 0;
let count = 0;
let record = "";

function generateCounters() {
    // getting amount of counters
    counterAmount = parseInt(counterAmountInputEl.value, 10);

    // creating a counter element
    let counterElement = 
        `
            <div class="counter-container-main">
                <div id="count-el" class="count-el">0</div>
                <div id="counter-btns-container-el"     class="counter-btns-container">
                    <button id="increment-btn-el" class="increment-btn-el">
                        <i class="fa-solid fa-plus plus-icon"></i>
                        <p>add</p>
                    </button>
                    <button id="decrement-btn-el" class="decrement-btn-el">
                        <i class="fa-solid fa-minus minus-icon"></i>
                        <p>subtract</p>
                    </button>
                    <button id="save-btn-el" class="save-btn-el">
                        <i class="fa-solid fa-sd-card save-icon"></i>
                        <p>save</p>
                    </button>
                </div>
                <div class="record-el" id="record-el">Record: </div>
            </div>
        `;

    // displaying the created counters onscreen
    for (let i = 0; i < counterAmount; i++) {
        counterContainerEl.innerHTML += counterElement
    }

    counterBtnsContainerEl = document.getElementById("counter-btns-container-el");

    inputContainerEl.style.display = "none"
    counterBtnsContainerEl.addEventListener("click", (e) => {
        settingTasks(e)
    })
}

function settingTasks(e) {
    let userTask = "";

    let tasks = {
        add: (countEl) => {
            count += 1;
            countEl.textContent = count
        },
        subtract: (countEl) => {
            if (count > 0) {
                count -= 1;
                countEl.textContent = count;
            }
        },
        save: (recordEl) => {
            record += " " + count + " -";
            recordEl.textContent = "Records: " + record;
        }
    }

    if (e.target.childElementCount === 0) {
        userTask = e.target.nextElementSibling.textContent;
        let countEl = e.target.parentElement.parentElement.parentElement.firstElementChild;
        let recordEl = e.target.parentElement.parentElement.nextElementSibling;
        console.log(1)
        if (userTask !== "save") {
            tasks[userTask](countEl);
        } else {
            tasks[userTask](recordEl);
        }
    } else if (e.target.lastElementChild.textContent) {
        userTask = e.target.lastElementChild.textContent;
        let countEl = e.target.parentElement.parentElement.firstElementChild;
        let recordEl = e.target.parentElement.nextElementSibling;
        console.log(2)
        if (userTask !== "save") {
            tasks[userTask](countEl);
        } else {
            tasks[userTask](recordEl);
        }
    }
}



enterAmountBtnEl.addEventListener("click", generateCounters)