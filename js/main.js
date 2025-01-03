class Project {
    img = ["img/Ohia.png", "img/Dragons_den.png", "img/Tracker.png", "img/La_Magalla.png", "img/finance.png"]
    name = ["Ohia", "Dragon's Den", "To do manager", "La Magalla", "My finance"]
    date = ["December 2021", "January 2023", "January 2023", "February 2024", "December 2024"]
    tagline = ["Get to the flag, using each character only one time. They all have different abilities and you must combine them.", "Invest your way back into your world by funding people's projects and reaching 1.000.000 gold coins!", "Manage your tasks, setting up their due dates, and use color coding to show their importance.", "Landing page for a local producer of fruit and vegetables, with all the necessary information.", "Web application to manage your own finances, spending habits and saving goals. Keep that information all in one place"]
    link = ["https://ryuggha.itch.io/ohia", "https://leo-knight98.itch.io/dragons-den", "https://github.com/leo-knight98/To-do-list", "https://lamagalla.cat", "https://my-finance-red.vercel.app"]

    showProjects() {
        let prj = '';
        for(let i = this.img.length - 1; i >= 0; i--) {
            prj += '<div class="project"><img class="prj_img" src="' + this.img[i] + '"><div class="prj_text"><h3>'+ this.name[i] +'</h3><p>' + this.date[i] + '<p> ' + this.tagline[i] + '<br><button><a href="' + this.link[i] + '" target="_blank" rel="noopener noreferrer"">View project</a></button></div></div>';
        }

        return prj;
    }
}

window.onload = function() {
    let project = new Project()
    let projectContainer = document.getElementById('projectContainer');
    projectContainer.innerHTML = project.showProjects();
}