function parseTemplate() {
    const arr = document.querySelectorAll('[data-field]')
    const obj = {
        title: 'Hello world',
        description: 'The first program',
    };
    for (let elem of arr) {
        let box = elem.getAttribute('data-field');
        if (box in obj) {
            elem.textContent = obj[box];
        } else {
            throw 'Error';
        }
    }
}
parseTemplate();