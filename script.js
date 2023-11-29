document.getElementById('maxCalculator').addEventListener('submit', function(e) {
    e.preventDefault();

    var weight = document.getElementById('weight').value;
    var max = calculateMax(weight);

    document.getElementById('result').innerHTML = `Votre max estimé pour 1RM est: ${max.toFixed(2)} kg`;
});

function calculateMax(weight) {
    return weight * 1.3; // Multiplier le poids soulevé 10 fois par 1.3
}