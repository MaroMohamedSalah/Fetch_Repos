// selection 
let userName = document.querySelector('.container .enterDataSection input');
let getBtn = document.querySelector('.container .enterDataSection label button');
let result = document.querySelector('.container .result');
let reposSpans = document.createElement('div');
let eror = document.getElementById('eror');
userName.oninput = () =>{

}

getBtn.onclick = () =>{
    getRepos();
}

function getRepos(){
    if(userName.value === ''){
        window.alert("username can't be empty" );
    }else{
    fetch(`https://api.github.com/users/${userName.value}/repos`)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data)
        result.innerHTML = '';
        result.innerHTML = `<h4 style="color: black;">Repos:</h4>`
        for(let i=0 ; i<data.length ; i++){
            // add repo name 
            let repo = document.createElement('span');
            let colect = document.createElement('div');
            colect.className = 'colect';
            repo.append(data[i].name);
            colect.appendChild(repo);
            // add stars 
            let stars = document.createElement('span');
            stars.className = 'stars'
            stars.innerHTML = `stars: <span>${data[i].stargazers_count}</span> `;
            colect.appendChild(stars)
            // add link
            let url = document.createElement('a');
            let urlText = document.createTextNode("Visit");
            url.appendChild(urlText);
            // add href
            url.href = `https://github.com/${userName.value}/${data[i].name}`
            url.setAttribute('target', '_blank');
            colect.appendChild(url);
            result.appendChild(colect)
        }
    } );
    }
}