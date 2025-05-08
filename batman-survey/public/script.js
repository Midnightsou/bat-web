document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('survey-form');
    
    surveyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(surveyForm);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        fetch('/api/survey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you for your response!');
                surveyForm.reset();
            } else {
                alert('There was an error submitting your response. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your response. Please try again.');
        });
    });
});