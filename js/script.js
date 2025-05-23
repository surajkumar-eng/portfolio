// document.addEventListener('DOMContentLoaded', () => {
//   // Hamburger toggle
//   const hamburger = document.querySelector('.hamburger');
//   const nav = document.querySelector('nav');

//   hamburger.addEventListener('click', () => {
//     nav.classList.toggle('active');
//   });

//   // Typing effect
//   const typingElement = document.getElementById('typing');
//   const words = ["Web Developer", "Developer", "Web Designer", "Youtuber", "Script Writer"];
//   let wordIndex = 0;
//   let letterIndex = 0;
//   let currentWord = words[wordIndex];
//   let isDeleting = false;

//   function type() {
//     if (isDeleting) {
//       letterIndex--;
//       typingElement.textContent = currentWord.substring(0, letterIndex);
//     } else {
//       letterIndex++;
//       typingElement.textContent = currentWord.substring(0, letterIndex);
//     }

//     let typeSpeed = 150;  // Normal speed

//     if (!isDeleting && letterIndex === currentWord.length) {
//       typeSpeed = 2000; // pause at end
//       isDeleting = true;
//     } else if (isDeleting && letterIndex === 0) {
//       isDeleting = false;
//       wordIndex = (wordIndex + 1) % words.length;
//       currentWord = words[wordIndex];
//       typeSpeed = 500;  // pause before typing next word
//     }

//     setTimeout(type, typeSpeed);
//   }

//   type();

//   // Star + Shooting Star Effect
//   const canvas = document.getElementById("stars");
//   const ctx = canvas.getContext("2d");
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   let stars = [];
//   let shootingStars = [];

//   for (let i = 0; i < 150; i++) {
//     stars.push({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       radius: Math.random() * 1.5,
//       speed: Math.random() * 0.3 + 0.1
//     });
//   }

//   function createShootingStar() {
//     shootingStars.push({
//       x: Math.random() * canvas.width,
//       y: 0,
//       length: Math.random() * 80 + 30,
//       speed: Math.random() * 10 + 6,
//       angle: Math.PI / 4,
//       opacity: 1
//     });
//   }

//   setInterval(createShootingStar, 3000); // every 3 seconds

//   function drawStars() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Normal stars
//     ctx.fillStyle = "#fff";
//     stars.forEach(star => {
//       ctx.beginPath();
//       ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//       ctx.fill();

//       star.y -= star.speed;
//       if (star.y < 0) {
//         star.y = canvas.height;
//         star.x = Math.random() * canvas.width;
//       }
//     });

//     // Shooting stars
//     shootingStars.forEach((s, index) => {
//       const dx = Math.cos(s.angle) * s.length;
//       const dy = Math.sin(s.angle) * s.length;

//       ctx.strokeStyle = `rgba(255,255,255,${s.opacity})`;
//       ctx.lineWidth = 2;
//       ctx.beginPath();
//       ctx.moveTo(s.x, s.y);
//       ctx.lineTo(s.x - dx, s.y - dy);
//       ctx.stroke();

//       s.x += s.speed;
//       s.y += s.speed;
//       s.opacity -= 0.01;

//       if (s.opacity <= 0) {
//         shootingStars.splice(index, 1);
//       }
//     });

//     requestAnimationFrame(drawStars);
//   }

//   drawStars();

//   // Resize canvas on window resize
//   window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//   });
// });



document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Typing Effect
    const typing = document.getElementById("typing");
    const roles = ["Graphic Designer", "UI/UX Designer", "Freelancer", "Web Developer", "Video Editor", "Content Creator"];
    let i = 0, j = 0, current = "", isDeleting = false;

    function typeEffect() {
        if (i >= roles.length) i = 0;
        let fullText = roles[i];

        if (isDeleting) {
            current = fullText.substring(0, --j);
        } else {
            current = fullText.substring(0, ++j);
        }

        typing.innerHTML = current;

        if (!isDeleting && j === fullText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i++;
            setTimeout(typeEffect, 300);
        } else {
            setTimeout(typeEffect, isDeleting ? 60 : 120);
        }
    }

    typeEffect();
});

// 🌌 Stars with Slow Twinkle & Gentle Floating + Shooting Stars from all directions
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const starColors = ["#ffffff", "#add8e6", "#fffacd"]; // white, light blue, soft yellow
let stars = [];
let shootingStars = [];

const MAX_STARS = 70; // Kam stars

for (let i = 0; i < MAX_STARS; i++) {
    stars.push({
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        baseRadius: Math.random() * 1 + 0.5,
        angle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.002 + 0.0005, // aur slow twinkle
        color: starColors[Math.floor(Math.random() * starColors.length)]
    });
}

function createShootingStar() {
    // Randomly pick one of 4 directions: down-right, down-left, up-right, up-left
    const directions = [
        { x: 0, y: 0, angle: Math.PI / 4 },         // top-left to bottom-right
        { x: canvas.width, y: 0, angle: (3 * Math.PI) / 4 }, // top-right to bottom-left
        { x: 0, y: canvas.height, angle: -Math.PI / 4 },    // bottom-left to top-right
        { x: canvas.width, y: canvas.height, angle: (-3 * Math.PI) / 4 } // bottom-right to top-left
    ];
    const dir = directions[Math.floor(Math.random() * directions.length)];

    shootingStars.push({
        x: dir.x,
        y: dir.y,
        length: Math.random() * 80 + 30,
        speed: Math.random() * 3 + 2, // slow speed for natural feel
        angle: dir.angle,
        opacity: 1
    });
}

setInterval(createShootingStar, 7000); // shooting star every 7 seconds approx

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.angle += star.twinkleSpeed;

        // Twinkle radius oscillation very subtle
        const radius = star.baseRadius + Math.sin(star.angle * 2) * 0.15;
        // Gentle slow floating motion
        const offsetX = Math.sin(star.angle * 0.5) * 0.2;
        const offsetY = Math.cos(star.angle * 0.5) * 0.2;

        ctx.beginPath();
        ctx.arc(star.baseX + offsetX, star.baseY + offsetY, radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
    });

    shootingStars.forEach((s, index) => {
        const dx = Math.cos(s.angle) * s.length;
        const dy = Math.sin(s.angle) * s.length;

        ctx.strokeStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - dx, s.y - dy);
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.005;

        if (s.opacity <= 0) {
            shootingStars.splice(index, 1);
        }
    });

    requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
});

window.addEventListener('load', () => {
  const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach(progress => {
    const barSpan = progress.querySelector('.bar span');
    const targetPercent = progress.getAttribute('data-percent');

    // Animate width from 0 to targetPercent
    setTimeout(() => {
      barSpan.style.width = targetPercent + '%';
    }, 100); // thoda delay taaki transition ka effect dikhe
  });
});




function showCategory(categoryId, event) {
  const categories = document.querySelectorAll(".project-gallery.category");
  const buttons = document.querySelectorAll(".filter-buttons button");

  // Hide all categories
  categories.forEach(cat => cat.classList.remove("active"));

  // Show selected category
  const selected = document.getElementById(categoryId);
  if (selected) selected.classList.add("active");

  // Update active button
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

// Show 'all' by default on first load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("all").classList.add("active");
});
const slider = document.getElementById('slider');
const cards = slider.querySelectorAll('.testimonial-card');
const dots = document.getElementById('dots').querySelectorAll('.dot');

function setActiveCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  const card = cards[index];
  const sliderRect = slider.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  const scrollLeft = slider.scrollLeft + (cardRect.left + cardRect.width / 2) - (sliderRect.left + sliderRect.width / 2);
  slider.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });
}

// Initial active card at center (index 2)
setActiveCard(2);

// Dot click
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    setActiveCard(index);
  });
});

// Card click
cards.forEach(card => {
  card.addEventListener('click', () => {
    const index = parseInt(card.getAttribute('data-index'));
    setActiveCard(index);
  });
});
// clients


// Duplicate content once to make infinite scroll seamless

function swapLogos() {
  const top = document.querySelectorAll("#rowTop .client-box");
  const bottom = document.querySelectorAll("#rowBottom .client-box");

  if (top.length === 0 || bottom.length === 0) return;

  const randIndex = Math.floor(Math.random() * Math.min(top.length, bottom.length));

  const topLogo = top[randIndex].querySelector("img");
  const bottomLogo = bottom[randIndex].querySelector("img");

  // Add fade class before swapping
  // topLogo.classList.add("fade");
  // bottomLogo.classList.add("fade");

  setTimeout(() => {
    const tempSrc = topLogo.src;
    const tempAlt = topLogo.alt;

    topLogo.src = bottomLogo.src;
    topLogo.alt = bottomLogo.alt;

    bottomLogo.src = tempSrc;
    bottomLogo.alt = tempAlt;

    // Remove fade class after swap
    topLogo.classList.remove("fade");
    bottomLogo.classList.remove("fade");
  }, 3000); // Match timeout with CSS transition time
}

// setInterval(swapLogos, 10000);



//skilll




window.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    const span = bar.querySelector("span");
    span.style.width = percent;
  });
});
