document.getElementById('maxCalculator').addEventListener('submit', function(e) {
    e.preventDefault();

    var weight = document.getElementById('weight').value;
    var reps = document.getElementById('reps').value;
    var max = calculateMax(weight, reps);

    document.getElementById('result').innerHTML = `Votre max estimé est: ${max} kg`;
});

function calculateMax(weight, reps) {
    return weight * (1 + (reps / 30)); 
}
