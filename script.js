// Load html2pdf library dynamically (optional if already included in HTML)
if (!window.html2pdf) {
  const script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
  script.onload = () => console.log("html2pdf loaded");
  document.head.appendChild(script);
}

function downloadPageAsPDF() {
  const content = document.body; // Replace with specific container if needed
  const titleElement = document.querySelector("h1");
  const title = titleElement
    ? titleElement.innerText.trim().replace(/\s+/g, '_').replace(/[^\w\-]/g, '')
    : "Automotive_Training";

  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `${title}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['css', 'legacy'], avoid: ['img', 'tr', '.no-break'] }
  };

  html2pdf().set(opt).from(content).save();
}
