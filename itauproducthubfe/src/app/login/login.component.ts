import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {

    if (this.email === 'admin@itau.com' && this.password === 'admin') {
      // Sucesso na autenticação, redirecionar para a página principal
      this.router.navigate(['/', 'home']);
    } else {
      // Falha na autenticação, exibir mensagem de erro
      alert('Credenciais inválidas');
    }
  }
}