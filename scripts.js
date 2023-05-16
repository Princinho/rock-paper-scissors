alert('test')

const btnCloseRules = document.getElementById('btn-close-rules')
const rulesDiv = document.getElementById('rules')
function hideRules() {
    rulesDiv.classList.add('hidden-content')
    console.log('hidden')
}
btnCloseRules.addEventListener('click',()=>hideRules())