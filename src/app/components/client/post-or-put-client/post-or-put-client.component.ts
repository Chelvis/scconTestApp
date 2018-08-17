import { AppComponent } from '../../../app.component';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientsService } from '../../../services/clients/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoutingSegments } from '../../../models/routing-segments';

@Component({
  selector: 'app-post-or-put-client',
  templateUrl: './post-or-put-client.component.html'
})
export class PostOrPutClientComponent implements OnInit {

  title: string;

  form: FormGroup;
  addressForm: FormGroup;
  formControls: any;
  addressFormControls: any;
  clientId: number;

  routingSegments = RoutingSegments;

  notFound = false;
  newClient = false;

  validCep: boolean;

  namePattern = /[A-Z].*\s[A-Z].*/;

  constructor(
    private appComponent: AppComponent,
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    // Constrói o FormGroup com os campos padrões para clientes
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(13)])],
      active: [true, Validators.required],
      date: [new Date, Validators.required]
    });

    // Constrói o FormGroup com os campos padrões para endereço
    this.addressForm = this.formBuilder.group({
      cep: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
      logradouro: ['', Validators.required],
      numero: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
    });

    // Assiste trocas de parâmetros de requisição na url
    this.activatedRoute.queryParams.subscribe(query => {

      // Verifica id nos parâmetros e define se é um cadastro ou atualização
      if (query.id) {

        this.appComponent.setLoading(true);
        this.clientId = query.id;

        // Requisita serviço GET para receber o cliente
        this.clientsService.getById(parseInt(query.id, 10)).subscribe((data: Client) => {
          this.form.patchValue(data);
          this.addressForm.patchValue(data.address);
          this.appComponent.setLoading(false);
        }, error => {
          if (error.status === 404) {
            this.notFound = true;
          }
          console.log(error);
          this.appComponent.setLoading(false);
        });

        this.title = 'Editar dados do cliente';

      } else {
        this.newClient = true;
        this.title = 'Cadastrar cliente';
      }
      this.appComponent.setTitle(this.title);
    });

    this.formControls = this.form.controls;
    this.addressFormControls = this.addressForm.controls;

  }

  // Método de envio do formulário
  submit() {

    // Verifica se os dados do cliente, endereço e CEP são todos válidos
    if (this.form.invalid || this.addressForm.invalid || !this.validCep) {
      return;
    }

    this.appComponent.setLoading(true);

    // Verifica se é um novo cliente (newClient) ou atualização
    if (this.newClient) {
      // Se for novo, requisita o cadastro do cliente via serviço PUT
      this.clientsService.post(this.form.value, this.addressForm.value).subscribe((data: Client) => {
        alert('Cliente inserido com sucesso!');
        this.appComponent.setLoading(false);
      }, error => console.log(error));
    } else if (confirm('Deseja mesmo alterar os dados do cliente?')) {
      // Se for atualização, requisita alterações via PATCH
      this.clientsService.patch(this.clientId, this.form.value, this.addressForm.value).subscribe((data: Client) => {
        alert('Cliente alterado com sucesso!');
        this.appComponent.setLoading(false);
      }, error => console.log(error));
    } else {
      this.appComponent.setLoading(false);
    }
  }

  // Recebe do componente de CEP e salva uma flag que diz se o CEP é válido
  setValidCep(flag) {
    this.validCep = flag;
  }

  // Método deleta o cliente (disponível apenas se for atualização)
  delete() {

    // Verifica se é atualização e recebe confirmação do usuário
    if (!this.form.value.id || !confirm('Deseja mesmo deletar o cliente?')) {
      return;
    }
    this.appComponent.setLoading(true);

    // Requisita remoção via serviço DELETE
    this.clientsService.delete(this.form.value.id).subscribe(data => {
      alert('Cliente deletado com sucesso!');
      this.router.navigate(['/', this.routingSegments.search]);
    }, error => console.log(error));
  }


}
