async function search() {
  let query = document.getElementById("searchBox").value;

  let response = await fetch(
    `https://serpapi.com/search.json?q=${query}&api_key=4ba20149b93da80f59bdd6ba6394fca12169ec0d194f911a0090ab7f8bec3866
  );

  let data = await response.json();

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  data.organic_results.forEach(item => {
    resultsDiv.innerHTML += `
      <p>
        <a href="${item.link}" target="_blank">
          ${item.title}
        </a>
      </p>
    `;
  });
}
