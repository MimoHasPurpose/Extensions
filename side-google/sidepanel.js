document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      chrome.tabs.create({ url: searchUrl })
        .catch(err => console.error("Error opening search tab:", err));
    } else {
      alert("Please enter a search query");
    }
  });