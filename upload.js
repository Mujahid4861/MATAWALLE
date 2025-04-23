document.getElementById("uploadForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const fileInput = document.getElementById("pdfFile");
    const file = fileInput.files[0];
  
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const dataURL = event.target.result;
        const fileName = c:\Users\MATAWALLE\Desktop\MATAWALLE\CODIND\IBBU-portal\pdfs\CSC_113.pdf.pdf;
  
        // Store in localStorage
        let pdfs = JSON.parse(localStorage.getItem("pdfLibrary")) || [];
        pdfs.push({ name: fileName, url: dataURL });
        localStorage.setItem("pdfLibrary", JSON.stringify(pdfs));
  
        alert("PDF uploaded successfully!");
        location.reload();
      };
  
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid PDF file.");
    }
  });
  
  // Show PDFs
  window.onload = function() {
    const pdfs = JSON.parse(localStorage.getItem("pdfLibrary")) || [];
    const list = document.getElementById("pdfList");
  
    pdfs.forEach(pdf => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="pdf.url" target="_blank">{pdf.name}</a>`;
      list.appendChild(li);
    });
  };
  
  