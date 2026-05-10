
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    async function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            
            if (response.ok) {
                formStatus.style.display = 'block';
                formStatus.className = 'alert alert-success mt-3';
                formStatus.innerHTML = '✅ Bedankt! Je bericht is succesvol verzonden.';
                form.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            formStatus.style.display = 'block';
            formStatus.className = 'alert alert-danger mt-3';
            formStatus.innerHTML = '❌ Er is een fout opgetreden. Probeer het later opnieuw.';
        }
    }
    
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
