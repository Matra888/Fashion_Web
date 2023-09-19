// Print button click event
document.getElementById("print-btn").addEventListener("click", function() {
    window.print();
  });

  // Save as PDF button click event
  document.getElementById("save-pdf-btn").addEventListener("click", function() {
    var filename = "winter_color_palette_result.pdf";
    var element = document.querySelector(".result-container");

    html2pdf().set({
      margin: [10, 10, 10, 10],
      filename: filename,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2, letterRendering: true }
    }).from(element).save();
  });
