const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        squares.forEach(s => {
            if (s !== square) {
                s.style.backgroundColor = '#6F4E37'; 
            }
        });
    });

    square.addEventListener('mouseout', () => {
        squares.forEach(s => {
            s.style.backgroundColor = '#E6E6FA'; 
        });
    });
});
