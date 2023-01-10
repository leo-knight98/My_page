class Project {
    img = ["img/Ohia.png", "img/Dragons_den.png"]
    name = ["Ohia", "Dragon's Den"]
    date = ["December 2021", "January 2023"]
    tagline = ["Get to the flag, using each character only one time. They all have different abilities and you must combine them.", "Invest your way back into your world by funding people's projects and reaching 1.000.000 gold coins!"]
    link = ["https://ryuggha.itch.io/ohia", "https://leo-knight98.itch.io/dragons-den"]

    showProjects() {
        let prj = '';

        for(let i = 0; i < this.img.length; i++) {
            prj += '<div class="project"><img class="prj_img" src="' + this.img[i] + '"><div class="prj_text"><h3>'+ this.name[i] +'</h3><p>' + this.date[i] + '<p> ' + this.tagline[i] + '<br><button><a href="' + this.link[i] + '" target="_blank" rel="noopener noreferrer"">View project</a></button></div></div>';
        }

        return prj;
    }
}


window.onload = function() {
    let project = new Project()
    let projectContainer = document.getElementById('projectContainer');
    projectContainer.innerHTML = project.showProjects();
    let form = document.getElementById('contactForm');
    form.addEventListener('submit', function() {

        sendEmail();
    })    
}

function sendEmail(email) {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "8229986d6015a0",
        Password : "630eeb06d6373c",
        To : 'recipient@example.com',
        From : email,
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
    }