document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        const fill = bar.querySelector('.progress-fill');
        
        // Set the width of the progress fill based on the percentage
        fill.style.width = `${100}%`;

        
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('#pb2');

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        const fill = bar.querySelector('#progress-fill2');
        
        // Set the width of the progress fill based on the percentage
        fill.style.width = `${90}%`;

        
    });
});

