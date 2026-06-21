const projects = {
  grogu: {
    eyebrow: "Launched Product",
    title: "Pick-Me-Up Grogu",
    subtitle: "Star Wars: The Mandalorian & Grogu",
    launch: "Recently launched",
    collaboration: "Launched by Mattel",
    hero: "assets/pick-me-up-grogu.jpg",
    heroAlt: "Pick-Me-Up Grogu plush product image",
    description:
      "A 10-inch feature plush launched by Mattel for Star Wars: The Mandalorian & Grogu. The toy creates a simple character reveal moment: lifting Grogu’s arms opens his eyes, turning a familiar interaction into a repeatable feature.",
    links: [
      {
        label: "View on Target",
        url: "https://www.target.com/p/star-wars-the-mandalorian-38-grogu-movie-pick-me-up-grogu-character-plush-rondel-design-vinyl-head/-/A-94769072"
      },
      {
        label: "View on Harrods",
        url: "https://www.harrods.com/en-gb/p/star-wars-star-wars-the-mandalorian-and-grogu-pick-me-up-grogu-000000000007944346"
      }
    ],
    gallery: [
      {
        src: "assets/pick-me-up-grogu.jpg",
        alt: "Pick-Me-Up Grogu product image",
        caption: "Product view"
      },
      {
        src: "assets/grogu-retail-image.jpg",
        alt: "Pick-Me-Up Grogu in retail packaging",
        caption: "Retail packaging"
      },
      {
        src: "assets/grogu-feature-moment.jpg",
        alt: "Pick-Me-Up Grogu feature moment with arms lifted and eyes open",
        caption: "Feature moment"
      }
    ]
  },
  batman: {
    eyebrow: "Launched Product",
    title: "DC Crime Crusher Batman",
    subtitle: "DC Universe",
    launch: "Launched by Mattel",
    collaboration: "Mattel DC action figure",
    hero: "assets/batman-primary.jpg",
    heroAlt: "DC Crime Crusher Batman action figure with weapon accessories",
    description:
      "A 12-inch Mattel DC feature figure with a crouched punching attack, 25+ phrases and sounds, 16 points of articulation, and four weapon accessories. Pressing the figure down at the waist activates the dynamic punching move, and the included weapons attach to accentuate the action.",
    links: [
      {
        label: "View on Mattel",
        url: "https://shop.mattel.com/products/dc-crime-crusher-batman-action-figure-jmd53"
      },
      {
        label: "View on Amazon",
        url: "https://www.amazon.com/Mattel-12-Inch-Crusher-Phrases-Articulation/dp/B0G4MWZVVW/"
      }
    ],
    gallery: [
      {
        src: "assets/batman-primary.jpg",
        alt: "DC Crime Crusher Batman action figure with accessories",
        caption: "Product view"
      },
      {
        src: "https://images.mattel.net/images/c_scale%2Cf_auto%2Cw_360/shop-us-prod/files/f78b20d63862f5f39f27ddf083e0c353132f5ec1/.jpg",
        alt: "DC Crime Crusher Batman retail package",
        caption: "Retail packaging"
      },
      {
        src: "https://images.mattel.net/images/c_scale%2Cf_auto%2Cw_360/shop-us-prod/files/59737b7be9183ba45f9feb1b66580081a65d324c/.jpg",
        alt: "DC Crime Crusher Batman punching feature",
        caption: "Crouched punching action"
      },
      {
        src: "https://images.mattel.net/images/c_scale%2Cf_auto%2Cw_360/shop-us-prod/files/e3c791eeb5a704da4a3b8b01c8c4e36d1cf12848/.jpg",
        alt: "DC Crime Crusher Batman with action accessory",
        caption: "Weapon action"
      },
      {
        src: "https://images.mattel.net/images/c_scale%2Cf_auto%2Cw_360/shop-us-prod/files/7cec8cb6eec6b26cb10bf88d0b753955b062c58d/.jpg",
        alt: "DC Crime Crusher Batman lifestyle play image",
        caption: "Lifestyle play"
      },
      {
        src: "https://images.mattel.net/images/c_scale%2Cf_auto%2Cw_360/shop-us-prod/files/821f936184df76d0606713867b5b447186ccb237/.jpg",
        alt: "DC Crime Crusher Batman shield pose",
        caption: "Shield pose"
      }
    ]
  }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalDescription = document.getElementById("modalDescription");
const modalHeroImage = document.getElementById("modalHeroImage");
const modalActions = document.getElementById("modalActions");
const modalGallery = document.getElementById("modalGallery");
const inlineDetail = document.getElementById("mobileProjectDetail");
const inlineContent = document.getElementById("mobileProjectContent");
let lastFocusedElement = null;

function isMobileProjectView() {
  return window.matchMedia("(max-width: 760px)").matches;
}

function buildActions(project, className = "modal-button") {
  return project.links
    .map((link) => `<a class="${className}" href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`)
    .join("");
}

function buildGallery(project) {
  return project.gallery
    .map((item) => `
      <figure>
        <img src="${item.src}" alt="${item.alt || ""}">
        <figcaption>${item.caption || ""}</figcaption>
      </figure>
    `)
    .join("");
}

function openProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  if (isMobileProjectView()) {
    openInlineProject(project);
  } else {
    openProjectModal(project);
  }
}

function openProjectModal(project) {
  lastFocusedElement = document.activeElement;

  modalEyebrow.textContent = project.eyebrow;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalHeroImage.src = project.hero;
  modalHeroImage.alt = project.heroAlt || project.title;
  modalActions.innerHTML = buildActions(project);
  modalGallery.innerHTML = buildGallery(project);

  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const closeButton = modal.querySelector(".modal-close");
  if (closeButton) closeButton.focus();
}

function openInlineProject(project) {
  if (!inlineDetail || !inlineContent) {
    openProjectModal(project);
    return;
  }

  inlineContent.innerHTML = `
    <p class="inline-eyebrow">${project.eyebrow}</p>
    <h2>${project.title}</h2>
    ${project.subtitle ? `<p class="inline-subtitle">${project.subtitle}</p>` : ""}
    <div class="inline-meta">
      ${project.launch ? `<span>${project.launch}</span>` : ""}
      ${project.collaboration ? `<span>${project.collaboration}</span>` : ""}
    </div>
    <p class="inline-description">${project.description}</p>
    <div class="inline-actions">${buildActions(project, "inline-button")}</div>
    <div class="inline-gallery">${buildGallery(project)}</div>
  `;

  inlineDetail.setAttribute("aria-hidden", "false");
  inlineDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeInlineProject() {
  if (!inlineDetail || !inlineContent) return;
  inlineDetail.setAttribute("aria-hidden", "true");
  inlineContent.innerHTML = "";
}

function closeProject() {
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => openProject(card.dataset.project));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
});

document.querySelectorAll("[data-close-modal]").forEach((control) => {
  control.addEventListener("click", closeProject);
});

document.querySelectorAll("[data-close-inline]").forEach((control) => {
  control.addEventListener("click", closeInlineProject);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (modal && modal.getAttribute("aria-hidden") === "false") closeProject();
    if (inlineDetail && inlineDetail.getAttribute("aria-hidden") === "false") closeInlineProject();
  }
});

window.addEventListener("resize", () => {
  if (!isMobileProjectView()) {
    closeInlineProject();
  }
});
