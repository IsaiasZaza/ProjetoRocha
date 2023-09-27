const button = document.getElementById('Agendamento');
const modal = document.querySelector('.modals')
button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal');
})
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
})

document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
    el.addEventListener('shown.bs.tab', () => {
        const target = el.getAttribute('data-bs-target')
        const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
        bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
    })
})