const ACCESS_KEY = "olDO39xeR0N22KYIHnOsD-LjEBLCIEUWgVONgqsbulQ";

async function getRandomImage() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
    );
    const data = await response.json();

    const image = data.urls.regular;
    const photographer = data.user.name;

    document.getElementById("image").src = image;
    document.getElementById("photographer").textContent = photographer;
  } catch (error) {
    console.log("Ошибка:", error);
  }
}

function likeImage() {
  const countElement = document.getElementById("count");
  const count = parseInt(countElement.textContent);

  countElement.textContent = count + 1;
}

window.onload = function () {
  getRandomImage();
};

document.getElementById("likeButton").addEventListener("click", likeImage);


