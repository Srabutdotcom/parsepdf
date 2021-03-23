const pdfjs = require("pdfjs-dist");

pdfjs.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.js";
const parsepdf = require('./library/parsepdf.js');

function loadPdf(pdfUrl,pageNum){
	// Asynchronous download of PDF
	let loadingTask = await pdfjs.getDocument(pdfUrl);
	loadingTask.promise.then(function(pdf) {
		pdf.getPage(pageNum).then(function(page) {
			page.getTextContent().then(parsepdf);
		})
	}, function (reason) {
    // PDF loading error
		console.error(reason);
	});
}

module.exports = loadPdf;