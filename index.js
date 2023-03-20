function sendMail() {
    let fromEmail = document.getElementById('email').value
    let fromName = document.getElementById('name').value
    let fromNumber = document.getElementById('number').value
    let fromCity = document.getElementById('city').value
    let fromSubject = document.getElementById('subject').value
    let fromMessage = document.getElementById('message').value

    const params = { fromEmail, fromName, fromNumber, fromCity, fromSubject, fromMessage }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    if (validateEmail(fromEmail)) {
        sendEmail()
        console.log("Geldig email-adres")
    } else {
        //emailadres is ongeldig

        console.log("ongeldig email-adres")
        console.log()
        alert("Controleer of de invoer van je email adres juist is.")

    }



    function sendEmail() {
        const serviceID = 'service_cf9lyxd'
        const templateID = 'template_69kq5f8'
        console.log(params)

        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById('email').value = ''
                document.getElementById('name').value = ''
                document.getElementById('number').value = ''

                document.getElementById('city').value = ''
                document.getElementById('message').value = ''
                console.log(res)
                alert('Bedankt voor je bericht. We gaan direct aan de slag voor een reactie.')
            }
            )
            .catch(error => console.log(error))
    }
}














