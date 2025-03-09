document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.querySelector('.terminal-content');
    const output = document.querySelector('.terminal-output');
    const input = document.querySelector('.terminal-input');
    const prompt = document.querySelector('.terminal-prompt');

    // Информация о пользователе
    const userInfo = {
        name: "Ваше Имя",
        title: "Веб-разработчик",
        about: "Я увлеченный веб-разработчик с опытом создания современных и отзывчивых веб-приложений.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
        experience: [
            {
                company: "Компания А",
                position: "Старший разработчик",
                period: "2020 - настоящее время",
                description: "Разработка и поддержка веб-приложений."
            },
            {
                company: "Компания Б",
                position: "Веб-разработчик",
                period: "2018 - 2020",
                description: "Создание пользовательских интерфейсов и интеграция API."
            }
        ],
        education: [
            {
                institution: "Университет XYZ",
                degree: "Бакалавр компьютерных наук",
                year: "2014 - 2018"
            }
        ],
        projects: [
            {
                name: "Проект 1",
                description: "Веб-приложение для управления задачами с использованием React и Node.js.",
                link: "https://github.com/username/project1"
            },
            {
                name: "Проект 2",
                description: "Адаптивный веб-сайт для местного бизнеса.",
                link: "https://github.com/username/project2"
            }
        ],
        contact: {
            email: "your.email@example.com",
            github: "github.com/username",
            linkedin: "linkedin.com/in/username"
        }
    };

    // Доступные команды
    const commands = {
        help: function() {
            return `
                <p>Доступные команды:</p>
                <p><span class="command">about</span> - Обо мне</p>
                <p><span class="command">skills</span> - Мои навыки</p>
                <p><span class="command">experience</span> - Опыт работы</p>
                <p><span class="command">education</span> - Образование</p>
                <p><span class="command">projects</span> - Проекты</p>
                <p><span class="command">contact</span> - Контактная информация</p>
                <p><span class="command">clear</span> - Очистить терминал</p>
            `;
        },
        about: function() {
            return `
                <p><span class="info">Имя:</span> ${userInfo.name}</p>
                <p><span class="info">Должность:</span> ${userInfo.title}</p>
                <p><span class="info">О себе:</span> ${userInfo.about}</p>
            `;
        },
        skills: function() {
            return `
                <p><span class="info">Навыки:</span></p>
                <ul>
                    ${userInfo.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            `;
        },
        experience: function() {
            return `
                <p><span class="info">Опыт работы:</span></p>
                ${userInfo.experience.map(exp => `
                    <p><span class="success">${exp.company}</span> - ${exp.position} (${exp.period})</p>
                    <p>${exp.description}</p>
                `).join('<br>')}
            `;
        },
        education: function() {
            return `
                <p><span class="info">Образование:</span></p>
                ${userInfo.education.map(edu => `
                    <p><span class="success">${edu.institution}</span> - ${edu.degree} (${edu.year})</p>
                `).join('<br>')}
            `;
        },
        projects: function() {
            return `
                <p><span class="info">Проекты:</span></p>
                ${userInfo.projects.map(project => `
                    <p><span class="success">${project.name}</span> - ${project.description}</p>
                    <p>Ссылка: <a href="${project.link}" target="_blank">${project.link}</a></p>
                `).join('<br>')}
            `;
        },
        contact: function() {
            return `
                <p><span class="info">Контактная информация:</span></p>
                <p>Email: ${userInfo.contact.email}</p>
                <p>GitHub: <a href="https://${userInfo.contact.github}" target="_blank">${userInfo.contact.github}</a></p>
                <p>LinkedIn: <a href="https://${userInfo.contact.linkedin}" target="_blank">${userInfo.contact.linkedin}</a></p>
            `;
        },
        clear: function() {
            output.innerHTML = '';
            return '';
        }
    };

    // Обработка ввода
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            
            // Добавляем введенную команду в вывод
            output.innerHTML += `<p><span class="terminal-prompt">${prompt.textContent}</span> ${command}</p>`;
            
            // Обрабатываем команду
            if (commands[command]) {
                output.innerHTML += commands[command]();
            } else if (command !== '') {
                output.innerHTML += `<p class="error">Команда не найдена: ${command}. Введите 'help' для списка команд.</p>`;
            }
            
            // Очищаем поле ввода и прокручиваем вниз
            input.value = '';
            terminal.scrollTop = terminal.scrollHeight;
        }
    });

    // Фокус на поле ввода при клике в любом месте терминала
    terminal.addEventListener('click', function() {
        input.focus();
    });

    // Начальный фокус
    input.focus();
});