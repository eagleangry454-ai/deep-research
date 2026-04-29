async function search() {
  let query = document.getElementById("searchBox").value;

  let response = await fetch(
    `https://serpapi.com/search.json?q=${query}&api_key=YOUR_API_KEY`
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
