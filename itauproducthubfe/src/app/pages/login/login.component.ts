import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private router: Router) {}
  email: string = '';
  password: string = '';
  onSubmit() {
    if (this.email === 'admin@itau.com' && this.password === 'admin') {
      // Sucesso na autenticação, redirecionar para a página principal
      this.router.navigate(['/home']);
    } else {
      // Falha na autenticação, exibir mensagem de erro
      alert('Credenciais inválidas');
    }
  }
}