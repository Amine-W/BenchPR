document.getElementById('maxCalculator').addEventListener('submit', function(e) {
    e.preventDefault();

    var weight = document.getElementById('weight').value;
    var reps = document.getElementById('reps').value;
    var max = calculateMax(weight, reps);
    animateResult(0, max, 1000); 
});

function calculateMax(weight, reps) {
    return (reps > 1) ? weight * (1 + (reps / 30)) : weight; 
}

function animateResult(start, end, duration) {
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const nextValue = Math.min(start + (end - start) * (elapsedTime / duration), end);
        
        document.querySelector('.result-display').innerHTML = `${nextValue.toFixed(2)} kg`;

        if (nextValue < end) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}
