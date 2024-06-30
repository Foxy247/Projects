function searchDictionary() {
  const word = document.getElementById("searchInput").value;
  fetch(`https://api.dictionary.com/api/v3/references/learners/json/${word}`)
    .then((response) => response.json())
    .then((data) => {
      const definitionElement = document.getElementById("definition");
      if (data && data.length > 0 && data[0].shortdef) {
        const definition = data[0].shortdef.join(", ");
        definitionElement.innerHTML = `<p><strong>${word}:</strong> ${definition}</p>`;
      } else {
        definitionElement.innerHTML = `<p>Definition not found for "${word}"</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
