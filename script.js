document.addEventListener("DOMContentLoaded", function () {
    const circle = document.getElementById('mode-toggle');
    circle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

    const profileLink = document.querySelector('a[href="#profile"]');
    const contactLink = document.querySelector('a[href="#project"]');
    const profileSection = document.getElementById('profile');
    const contactSection = document.getElementById('project');

    profileLink.addEventListener('click', function (event) {
        event.preventDefault();
        profileSection.style.display = 'block';
        contactSection.style.display = 'none';
    });

    contactLink.addEventListener('click', function (event) {
        event.preventDefault();
        contactSection.style.display = 'block';
        profileSection.style.display = 'none';
    });

    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            links.forEach(link => {
                const text = link.querySelector('h1').innerText;
                link.querySelector('h1').innerText = text.replace('[', '').replace(']', '');
            });

            const h1 = e.currentTarget.querySelector('h1');
            const text = h1.innerText;
            if (text[0] !== '[') {
                h1.innerText = `[${text}]`;
            }

            links.forEach(link => {
                link.classList.remove('selected');
            });
            e.currentTarget.classList.add('selected');
        });
    });
});

let mouseX = 0;
let mouseY = 0;
let cursor = document.querySelector('.custom-cursor');

function updateCursor() {
  const dx = mouseX - cursor.offsetLeft - 12;
  const dy = mouseY - cursor.offsetTop - 12;

  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist > 1) {
    cursor.style.left = cursor.offsetLeft + dx / 8 + 'px';
    cursor.style.top = cursor.offsetTop + dy / 8 + 'px';
  }

  requestAnimationFrame(updateCursor);
}

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

updateCursor();