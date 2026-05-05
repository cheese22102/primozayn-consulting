const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

const html = fs.readFileSync('c:\\Users\\ayoub\\Desktop\\projet\\index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

const expRows=Array.from(document.querySelectorAll('#expertise [data-reveal]')).filter(el=>el.querySelector('h3'));
console.log('expRows count:', expRows.length);
expRows.forEach((row, i) => {
    const textDiv=Array.from(row.children).find(c=>c.querySelector('h3'));
    console.log('row', i, 'has textDiv:', !!textDiv);
    if (textDiv) {
        const badge=textDiv.querySelector('span[style*="background:var(--c-secondary-container)"]');
        const h=textDiv.querySelector('h3');
        const p=textDiv.querySelector('p.t-body-lg');
        console.log('row', i, 'badge:', !!badge, 'h3:', !!h, 'p:', !!p);
    }
});

// Also check the service card link
const card2 = document.querySelectorAll('#services article')[1];
const a2 = card2.querySelector('a[data-modal]');
console.log('card2 a:', !!a2);
if (a2) {
    const textNode = Array.from(a2.childNodes).find(n=>n.nodeType===3&&n.textContent.trim());
    console.log('card2 a textNode:', !!textNode, textNode ? textNode.textContent : '');
}
