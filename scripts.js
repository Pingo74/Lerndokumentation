const pdfs = Array.from({ length: 50 }, (_, i) => ({
    title: `Arbeit ${i + 1}`,
    img: 'placeholder.png', // Placeholder image source
    pdf: `pdfs/report${i + 1}.pdf` // PDF file link
}));
