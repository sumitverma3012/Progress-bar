const progressBar = document.getElementsByClassName('progress-bar')[0];
const interval = setInterval(() => {
    const bar = getComputedStyle(progressBar);
    const width = parseFloat(bar.getPropertyValue('--width')) || 0;
    if(width > 100) {
        clearInterval(interval);
    }
    progressBar.style.setProperty('--width', width + .1);
}, 5) 