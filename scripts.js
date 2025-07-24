function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

function toggleExpandableText() {
    const expandableContent = document.getElementById('expandable-content');
    expandableContent.classList.toggle('active');
    const button = document.querySelector('.read-more-btn');
    button.textContent = expandableContent.classList.contains('active') ? 'Read Less' : 'Read More';
}

<!-- PDF Script for download -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<script>
  function downloadPageAsPDF() {
    const content = document.body; // You can change this to a specific container like document.getElementById('main-content')
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
</script>
