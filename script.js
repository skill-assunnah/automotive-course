// Load html2pdf library if not already present
if (!window.html2pdf) {
  const script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
  script.onload = () => console.log("html2pdf loaded");
  document.head.appendChild(script);
}

function downloadPageAsPDF() {
  const content = document.getElementById('main-content');
  if (!content) {
    alert("Main content not found!");
    return;
  }

  const header = document.createElement('div');
  header.innerHTML = `<h2 style="text-align:center; font-family: Arial; font-size: 18px; margin-bottom: 10px;">Professional Automotive Technician Training</h2>`;

  const footer = document.createElement('div');
  footer.innerHTML = `<p style="text-align:center; font-family: Arial; font-size: 12px;">As Sunnah Skill Development Institute</p>`;

  const clone = content.cloneNode(true);

  const container = document.createElement('div');
  container.appendChild(header);
  container.appendChild(clone);
  container.appendChild(footer);

  const opt = {
    margin: [0.7, 0.5, 0.7, 0.5],
    filename: 'Professional_Automotive_Technician_Training.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: {
      unit: 'in',
      format: 'a4',
      orientation: 'portrait',
      putOnlyUsedFonts: true,
    },
    pagebreak: { mode: ['css', 'legacy'], avoid: ['.no-break'] },
  };

  html2pdf().set(opt).from(container).toPdf().get('pdf').then(function (pdf) {
    const pageCount = pdf.internal.getNumberOfPages();
    const pageSize = pdf.internal.pageSize;
    const pageHeight = pageSize.height;

    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(10);
      pdf.setTextColor(120);
      pdf.text(`Page ${i} of ${pageCount}`, pageSize.width - 1, pageHeight - 0.3);
    }
  }).save();
}
