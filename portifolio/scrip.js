const projects = document.querySelectorAll('.project');

        projects.forEach(project => {
            project.addEventListener('click', () => {
                alert(`Você clicou no ${project.querySelector('h3').textContent}`);
              
            });
        });