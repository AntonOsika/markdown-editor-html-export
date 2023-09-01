const markdownInput = document.getElementById('markdown-input');
const livePreview = document.getElementById('live-preview');
const exportedHtml = document.getElementById('exported-html');
const exportButton = document.getElementById('export-button');

markdownInput.addEventListener('input', () => {
  livePreview.innerHTML = marked(markdownInput.value);
});

exportButton.addEventListener('click', () => {
  exportedHtml.textContent = marked(markdownInput.value);
});
