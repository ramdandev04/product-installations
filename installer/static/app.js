const $ = (value) => document.getElementById(value)
const btn = $('mybtn')

var isClick = false
const progressct = $('progress-ct')
const progresstxt = $('progress-text')
const btntxt = $('btntxt')
const btnload = $('spinners')

const percent = (value) => {
    let prog = $('progressbar')
    prog.style.width = `${value}%`
}

const handleClick = (e) => {
    e.preventDefault()
    if(!isClick) {
        isClick = true
        progressct.classList.remove('hide')
        btntxt.classList.add('hide')
        btnload.classList.remove('hide')
        let start = fetch('install', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: 'prepare'})
        })
        start.then(response => response.json())
        .then(res => {
            if(res.code == 200) {
                percent(10)
                progresstxt.innerHTML = res.message
                preparelic()
            }
        })
    }
}

const preparelic = () => {
    let start = fetch('install', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: 'license'})
    })
    start.then(response => response.json())
    .then(res => {
        progresstxt.innerHTML = res.message
        clicklcs()
    })
}

const clicklcs = () => {
    let lcs = fetch('install', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: 'lcs'})
    });
    lcs.then(ress => ress.json())
    .then(res => {
        if(res.code == 200) {
            progresstxt.innerHTML = res.message
            percent(25)
            setTimeout(() => {
                clickagain()
            }, 2000)
        }
    })
}

const clickagain = () => {
    progresstxt.innerHTML = 'Updating enviroment'
    let start = fetch('install', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: 'update'})
    })
    start.then(response => response.json())
    .then(res => {
        if(res.code == 200) {
            percent(30)
            progresstxt.innerHTML = res.message
            clicknext()
        }
    })
}

const clicknext = () => {
    progresstxt.innerHTML = 'Bundling the application'
    let start = fetch('install', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: 'bundle'})
    })
    start.then(response => response.json())
    .then(res => {
        if(res.code == 200) {
            percent(45)
            progresstxt.innerHTML = res.message
            finishme()
        }
    })
}

const finishme = () => {
    fetch('finish', {
        method: 'GET'
    })
}

btn.addEventListener('click', handleClick)