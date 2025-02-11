function searchItems() {
    const search = document.getElementById('search').value.toLowerCase();
    const item = document.querySelectorAll('#list-items li');

    item.forEach(function(items) {
        const textItems= items.textContent.toLowerCase()

        if(textItems.includes(search)) {
            items.classList.remove('hidden');
        } else {
            items.classList.add('hidden');
        }
    });
}