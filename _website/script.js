function createTalkEntry(title, link, description, tags, date) {
  const listItem = document.createElement("li");
  listItem.className = "talk";

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const linkElement = document.createElement("a");
  linkElement.href = link;
  linkElement.target = "_blank";
  linkElement.rel = "noopener noreferrer";
  linkElement.textContent = "View slides";

  listItem.appendChild(titleElement);
  listItem.appendChild(linkElement);

  if (description) {
    const descriptionElement = document.createElement("p");
    descriptionElement.className = "description";
    descriptionElement.textContent = description || "";
    listItem.appendChild(descriptionElement);
  }
  if (date) {
    const dateElement = document.createElement("p");
    dateElement.className = "tags";
    dateElement.textContent = "Date: " + (date || "");
    listItem.appendChild(dateElement);
  }
  if (tags?.length) {
    const tagsElement = document.createElement("p");
    tagsElement.className = "tags";
    tagsElement.textContent = "Tags: " + (tags || "No tags");
    listItem.appendChild(tagsElement);
  }

  return listItem;
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDark) {
  toggleTheme();
}
