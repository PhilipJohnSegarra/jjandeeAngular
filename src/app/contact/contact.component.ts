import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    emailjs.init('2xP70RUSkSVt7cCYZ');
  }

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm('service_pv15i2i', 'template_vwnlre4', e.target as HTMLFormElement)
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email. Please try again.');
      });
  }
}
