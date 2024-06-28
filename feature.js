// Function to implement autocomplete for current location and destination
let availableNodes = [
    'Blok A',
    'Blok B',
    'Blok C',
    'Blok D',
    'Blok E',
    'Surau UiTM',
    'Gate Blok E',
    'Cafe'
  ];
  
  function setupAutocomplete(inputId, resultBoxId) {
    const inputBox = document.getElementById(inputId);
    const resultsBox = document.getElementById(resultBoxId);
  
    inputBox.onkeyup = function () {
      let result = [];
      let input = inputBox.value;
      if (input.length) {
        result = availableNodes.filter((keyword) => {
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
      }
      displayResults(result, resultsBox, inputBox);
      if (!result.length) {
        resultsBox.innerHTML = '';
        resultsBox.style.display = 'none';
      }
    };
  
    // Hide the result box when clicking outside of it
    document.addEventListener('click', function (event) {
      if (!resultsBox.contains(event.target) && event.target !== inputBox) {
        resultsBox.style.display = 'none';
      }
    });
  }
  
  function displayResults(result, resultsBox, inputBox) {
    const content = result.map((list) => {
      return "<li onclick='selectInput(this, \"" + inputBox.id + "\", \"" + resultsBox.id + "\")'>" + list + "</li>";
    }).join('');
    resultsBox.innerHTML = "<ul>" + content + "</ul>";
    resultsBox.style.display = 'block';
  }
  
  function selectInput(list, inputBoxId, resultsBoxId) {
    const inputBox = document.getElementById(inputBoxId);
    const resultsBox = document.getElementById(resultsBoxId);
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
    resultsBox.style.display = 'none';
  }
  
  // Initialize autocomplete for both input boxes
  setupAutocomplete('start', 'start-results');
  setupAutocomplete('end', 'end-results');
  