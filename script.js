let flashcards = [];
let currentIndex = 0;

// Add flashcard
document.getElementById('addCardBtn').addEventListener('click', () => {
    const content = document.getElementById('cardContent').value;

    if (content.trim()) {
        flashcards.push(content);
        document.getElementById('cardContent').value = '';
        alert('Flashcard added!');
    } else {
        alert('Please enter content for the flashcard.');
    }
});

// Show the next flashcard
document.getElementById('nextCardBtn').addEventListener('click', () => {
    if (flashcards.length === 0) {
        alert('No flashcards available. Please add some!');
        return;
    }

    currentIndex = (currentIndex + 1) % flashcards.length;
    document.getElementById('cardText').textContent = flashcards[currentIndex];
});
