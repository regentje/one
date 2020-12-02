const nestedList = ["Item", ["Item2", ["Item3"]]];

function nested(subject, goal) {
    if (!goal) {
        goal = document.querySelector('body');
    }
    if (Array.isArray(subject)) {
        const ul = document.createElement('ul');
        goal.append(ul);
        subject.forEach(elem => nested(elem, ul));
    } else if (typeof subject === "string") {
        const li = document.createElement('li');
        li.textContent = subject;
        goal.append(li);
    }
}
nested(nestedList);