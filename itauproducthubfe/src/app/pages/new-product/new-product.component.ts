import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      summary: ['', Validators.required],
      description: ['', Validators.required],
      family: ['', Validators.required],
      target: ['', Validators.required],
      state: ['', Validators.required],
      activeUsers: [0, Validators.required],
      documentation: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value as Product).subscribe({
        next: (product) => {
          this.toastr.success('Produto adicionado com sucesso!', 'Sucesso');
          this.productForm.reset();
        },
        error: (error) => {
          let errorMessage = error.error.message || 'Ocorreu um erro desconhecido. Por favor, tente novamente.';
        this.toastr.error(`Falha ao adicionar produto! ${errorMessage}`, 'Erro');
        }
      });
    } else {
      this.toastr.warning('Por favor, preencha todos os campos requeridos.', 'Atenção');
    }
  }

  //TODO Alerta com opções para registrar outro produto ou voltar para lista
  showSuccessToast() {
    const message = `<div>Produto adicionado com sucesso!</div><button class="btn btn-primary" onclick="window.location.reload()">Adicionar Outro</button><button class="btn btn-secondary" onclick="window.location='/home'">Voltar à Lista</button>`;
    this.toastr.success(message, 'Sucesso', {
      enableHtml: true,
      closeButton: true,
      timeOut: 10000,
      tapToDismiss: false
    });
  }
}
