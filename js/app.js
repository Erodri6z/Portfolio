const topBar = document.getElementById('tabs')
const info = document.getElementById('info')
const skill = document.getElementById('skill')
const project = document.getElementById('project')
const contact = document.getElementById('contact')
const modeBtn = document.querySelector('#light-dark')
const about = document.getElementById('name')
const title = document.getElementById('title')
const resume = document.getElementById('id')
const contactLink = document.getElementById('contacts')
const list = document.getElementById('skill-list')
const body = document.querySelector('body')


info.addEventListener('click',function(){
    modeBtn.scrollIntoView({behavior:"smooth"})
})
skill.addEventListener('click',function(){
      resume.scrollIntoView({behavior:"smooth"})
    })
    project.addEventListener('click',function(){
        list.scrollIntoView({behavior:"smooth"})
    })
    contact.addEventListener('click',function(){
        contactLink.scrollIntoView({behavior:"smooth"})
    })
    modeBtn.addEventListener('click',toggleLightDark)
    
    
function checkDarkPref(){
    if(window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== 'dark'
    ){
        toggleLightDark()
    }
}
function toggleLightDark(){
    body.className = body.className === "dark" ? "" : "dark"
}

import { projectData } from "./project-data.js"

const myStuff = document.getElementById('my-stuff')

let projectMarkup = projectData.map(projectData =>
    ` 
        <div>
            <a href="${projectData.deployment}">
                <img id="ttt" src="${projectData.image}" alt="${projectData.title}">
            </a>
            <div>
                <p>${projectData.description}</p>
            </div>
        </div>
`
).join('')

myStuff.innerHTML = projectMarkup

