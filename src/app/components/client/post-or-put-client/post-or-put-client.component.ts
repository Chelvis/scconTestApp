import { AppComponent } from '../../../app.component';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientsService } from '../../../services/clients/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoutingSegments } from '../../../models/routing-segments';

@Component({
  selector: 'app-post-or-put-client',
  templateUrl: './post-or-put-client.component.html',
  styleUrls: ['./post-or-put-client.component.scss']
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
  // emailPattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';

  constructor(
    private appComponent: AppComponent,
    private clientsService: ClientsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(13)])],
      active: [true, Validators.required],
      date: [new Date, Validators.required]
    });

    this.addressForm = this.formBuilder.group({
      cep: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
      logradouro: ['', Validators.required],
      numero: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
    });

    this.activatedRoute.queryParams.subscribe(query => {
      if (query.id) {
        this.appComponent.setLoading(true);
        this.clientId = query.id;
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

  submit() {

    if (this.form.invalid || this.addressForm.invalid || !this.validCep) {
      return;
    }

    this.appComponent.setLoading(true);

    if (this.newClient) {
      this.clientsService.post(this.form.value, this.addressForm.value).subscribe((data: Client) => {
        alert('Cliente inserido com sucesso!');
        this.appComponent.setLoading(false);
      }, error => console.log(error));
    } else if (confirm('Deseja mesmo alterar os dados do cliente?')) {
      this.clientsService.put(this.clientId, this.form.value, this.addressForm.value).subscribe((data: Client) => {
        alert('Cliente alterado com sucesso!');
        this.appComponent.setLoading(false);
      }, error => console.log(error));
    } else {
      this.appComponent.setLoading(false);
    }
  }

  setValidCep(flag) {
    this.validCep = flag;
  }

  delete() {
    if (!this.form.value.id || !confirm('Deseja mesmo deletar o cliente?')) {
      return;
    }
    this.appComponent.setLoading(true);
    this.clientsService.delete(this.form.value.id).subscribe(data => {
      alert('Cliente deletado com sucesso!');
      this.router.navigate(['/', this.routingSegments.search]);
    }, error => console.log(error));
  }


}
