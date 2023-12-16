// Acordeon
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')

        if(isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
});

// API
async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/Viviane-Maria/js-developer-portfolio/main/data/profile.json";
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

// Main
function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const level = document.getElementById('profile.level')
    level.innerText = profileData.level

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}


function updateGames(profileData){
    const games = document.getElementById('profile.games')
    games.innerHTML = profileData.games.map(game => {
        return `
        <li>
        <img src="${game.img}">
        <a href="${game.url}" target="_blank">${game.name}</a>
        </li>
        `
    }).join('')
}

function updateVideos(profileData){
    const videos = document.getElementById('profile.videos')
    videos.innerHTML = profileData.videos.map(video => {
        return `
        <li>
        <img src="${video.img}">
        <a href="${video.url}" target="_blank">${video.name}</a>
        </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateGames(profileData)
    updateVideos(profileData)
})()