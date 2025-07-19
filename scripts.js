document.addEventListener('DOMContentLoaded', () => {
    const sections = [
        { id: 'header', file: 'header.html' },
        { id: 'overview', file: 'overview.html' },
        { id: 'basic', file: 'basic.html' },
        { id: 'intermediate', file: 'intermediate.html' },
        { id: 'advanced', file: 'advanced.html' },
        { id: 'final', file: 'final.html' },
        { id: 'footer', file: 'footer.html' }
    ];

    sections.forEach(section => {
        fetch(section.file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${section.file}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(section.id).innerHTML = data;
            })
            .catch(error => {
                console.error(error);
                document.getElementById(section.id).innerHTML = `<p style="color: #ff0000; text-align: center;">Error loading ${section.file}</p>`;
            });
    });
});

<<<<<<< HEAD
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

=======
>>>>>>> ffa8a5ac60b779047401c45d8f6ae979992debd1
function toggleContent(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling;
    content.classList.toggle('active');
    button.classList.toggle('active');
<<<<<<< HEAD
}
=======
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('active');
    menuToggle.classList.toggle('active');
    overlay.classList.toggle('active');
}

var gk_isXlsx = false;
var gk_xlsxFileLookup = {};
var gk_fileData = {};

function filledCell(cell) {
    return cell !== '' && cell != null;
}

function loadFileData(filename) {
    if (gk_isXlsx && gk_xlsxFileLookup[filename]) {
        try {
            var workbook = XLSX.read(gk_fileData[filename], { type: 'base64' });
            var firstSheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[firstSheetName];
            var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: false, defval: '' });
            var filteredData = jsonData.filter(row => row.some(filledCell));
            var headerRowIndex = filteredData.findIndex((row, index) =>
                filteredData[index + 1] ? row.filter(filledCell).length >= filteredData[index + 1].filter(filledCell).length : false
            );
            if (headerRowIndex === -1 || headerRowIndex > 25) {
                headerRowIndex = 0;
            }
            var csv = XLSX.utils.aoa_to_sheet(filteredData.slice(headerRowIndex));
            csv = XLSX.utils.sheet_to_csv(csv, { header: 1 });
            return csv;
        } catch (e) {
            console.error(e);
            return "";
        }
    }
    return gk_fileData[filename] || "";
}

function handleFile(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            gk_isXlsx = true;
            gk_xlsxFileLookup[file.name] = true;
            gk_fileData[file.name] = e.target.result.split(',')[1]; // Extract base64 data
            const csv = loadFileData(file.name);
            document.getElementById('fileOutput').textContent = csv;
        };
        reader.readAsDataURL(file);
    }
}
>>>>>>> ffa8a5ac60b779047401c45d8f6ae979992debd1
