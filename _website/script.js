function createTalkEntry(title, link, description, tags, date, isLastTalk) {
  const listItem = document.createElement("li");
  listItem.className = "talk";

  if (!isLastTalk) {
    listItem.classList.add(".talk-bottom-border");
  }

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
    tagsElement.textContent = "Tags: " + (tags.join(", ") || "No tags");
    listItem.appendChild(tagsElement);
  }

  return listItem;
}

const generateTalks = (talks) => {
  const talkList = document.getElementById("talkList");
  talks.forEach(function (talk, index) {
    const isLastTalk = index === talks.length - 1;
    const listItem = createTalkEntry(
      talk.title,
      talk.link,
      talk.description,
      talk.tags,
      talk.date,
      isLastTalk
    );
    talkList.appendChild(listItem);
  });
};

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");
}

// const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// if (prefersDark) {
//   toggleTheme();
// }
