export const responsiveTables = () => {
    const tablesEls = document.querySelectorAll('.region-content table');
    for (const item of Array.from(tablesEls)) {
        const tableWrapperEl = document.createElement('div');
        tableWrapperEl.classList.add('c-responsive-table-wrapper');
        item.parentNode.insertBefore(tableWrapperEl, item);
        tableWrapperEl.appendChild(item);
    }
}
