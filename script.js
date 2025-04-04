function generateImage() {
    const text = document.getElementById('textInput').value;
    if (!text) {
        alert('कृपया टेक्स्ट डालें!');
        return;
    }

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Set font and measure text
    ctx.font = '100px Arial';
    const metrics = ctx.measureText(text);
    const width = metrics.width + 40; // Extra space
    const height = 120; // Font size + padding

    // Set canvas size
    canvas.width = width;
    canvas.height = height;
    canvas.style.display = 'block';

    // Fill background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    // Draw text
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'top';
    ctx.fillText(text, 20, 10);

    // Convert canvas to image and create download link
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = url;
        downloadLink.style.display = 'block';
        downloadLink.click();
        URL.revokeObjectURL(url); // Clean up
    });
}
