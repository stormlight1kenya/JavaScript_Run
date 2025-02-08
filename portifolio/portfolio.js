//receivemail
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'emmauel.sikuku@gmail.com',
    pass: 'e$g76H7!1'
  }
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'your-email@example.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.send({ message: 'Email sent successfully' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});





//contact form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
    const { name, email, message } = Object.fromEntries(formData);

    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
        
        // Handle form submission logic here
        alert('Message sent!');
        
        // Reset form fields
        form.reset();
    });
});


