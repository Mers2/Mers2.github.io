// Function to implement autocomplete for current location and destination
let availableNodes = [
  'Pejabat HEA',
  'Pejabat HEP',
  'Pejabat Bendahari',
  'Perpustakaan(Aras 1)',
  'Pejabat Pentadbiran',
  'Bilik Mesyuarat',
  'Blok A',
  'Blok B',
  'Blok C',
  'Blok D',
  'Blok E',
  'Surau UiTM',
  'Cafe',
  'Kiosk',
  'Pondok Polis Bantuan',
  'Pondok Polis Bantuan 2',
  'Pejabat Kolej',
  'Kolej Kerawang',
  'MASMED',
  'Blok Kasa',
  'Blok Sutera',
  'Dewan Lestari',
  'Dataran Lestari',
  
  'Bilik Pensyarah 1',
  'Bilik Pensyarah 2',
  'Bilik Pensyarah 3',
  'Pejabat Ketua Pusat Pengajian',
  'MK E1(Aras 1)',
  'MK E2(Aras 1)',
  'MK E3(Aras 1)',
  'Bilik Pensyarah 5(Aras 1)',

  'Bilik Pensyarah 6(Aras 2)',
  'Bilik Pensyarah 7(Aras 2)',
  'Bilik Pensyarah 8(Aras 2)',
  'Bilik Pensyarah 9(Aras 2)',
  'Bilik Pensyarah 10(Aras 2)',
  'Bilik Pensyarah 11(Aras 2)',
  'Bilik Pensyarah 12(Aras 2)',

  'Kabin 1',
  'Kabin 2',
  'Kabin 3',    
  'Kabin 4',

  'Bilik Seminar 2(Aras 1)',
  'Bilik Seminar 1',

  'Smart Classroom',
  'Big Data Lab',

  'A3-1(Aras 2)',
  'A3-2(Aras 2)',
  'A3-3(Aras 2)',
  'A3-4(Aras 2)',

  'MK B1(Aras 1)',
  'MK B2(Aras 1)',
  'MK B3(Aras 1)',
  'MK B4(Aras 1)',

  'B3-1(Aras 2)',
  'B3-2(Aras 2)',
  'B3-3(Aras 2)',
  'B3-4(Aras 2)',
  'B3-5(Aras 2)',

  'C1-1',
  'C1-2',
  'C1-3',
  'C1-4',
  'C1-5',

  'MK C1(Aras 1)',
  'MK C2(Aras 1)',
  'MK C3(Aras 1)',
  'Bilik Pensyarah Blok C(Aras 1)',

  'C3-1(Aras 2)',
  'C3-2(Aras 2)',
  'C3-3(Aras 2)',
  'C3-4(Aras 2)',
  'C3-5(Aras 2)',

  'MK D1(Aras 2)',
  'MK D2(Aras 2)',
  'MK D3(Aras 2)',


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
