let chores = ['Unload/Load the Dishwaser','Sweep The Kitchen',
            'Unload/Load the Washer/Dryer',
            'Clean Your Room',
            'Clean Up Your Brothers Toys'
            ]
function choreSelection() {
    // iterate over list of chores. Provide a random chore everytime function is called.
    let randChore = chores[Math.floor(Math.random() * chores.length)]; //iterates over array of chores
    console.log(randChore); // displays random choice of chore

    document.getElementById("emmasChore").innerHTML = randChore;
};

function choreAmount() {
    let randAmount = Math.floor(Math.random() * 5) + 5;

    document.getElementById("choreAmount").innerHTML = randAmount;
}
