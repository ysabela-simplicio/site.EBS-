const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const sections = [...document.querySelectorAll("main section[id]")];

const setActiveLink = () => {
  const scrollPoint = window.scrollY + 130;
  let current = sections[0]?.id;

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPoint) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const workCards = [...document.querySelectorAll("[data-category]")];

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    workCards.forEach((card) => {
      const shouldShow = filter === "todos" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const calculator = document.querySelector("[data-calculator]");

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const calculateEstimate = () => {
  if (!calculator) return;

  const area = Number(calculator.querySelector("[data-area]").value || 0);
  const serviceValue = Number(calculator.querySelector("[data-service]").value || 0);
  const finishMultiplier = Number(calculator.querySelector("[data-finish]").value || 1);
  const estimate = calculator.querySelector("[data-estimate]");
  const total = Math.max(area * serviceValue * finishMultiplier, 0);

  estimate.textContent = currency.format(total);
};

if (calculator) {
  calculator.addEventListener("input", calculateEstimate);
  calculateEstimate();
}

const contactForm = document.querySelector("[data-contact-form]");
const formMessage = document.querySelector("[data-form-message]");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formMessage.textContent = "Preencha os campos obrigatorios para continuar.";
      return;
    }

    const formData = new FormData(contactForm);
    const name = formData.get("nome");
    const project = formData.get("projeto");

    formMessage.textContent = `Obrigado, ${name}. Recebemos sua solicitacao de ${project} e retornaremos em breve.`;
    contactForm.reset();
  });
}
