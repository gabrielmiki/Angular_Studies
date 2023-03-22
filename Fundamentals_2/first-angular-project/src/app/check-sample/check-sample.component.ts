import { Component, OnInit, DoCheck, AfterContentChecked,
				 AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
	OnInit, DoCheck, AfterContentChecked, AfterContentInit,
	AfterViewChecked, AfterViewInit, OnDestroy  {

	quantidade: number = 0;

  constructor() { }

	adicionar() {
		this.quantidade += 1;
	}

	decrementar() {
		this.quantidade -= 1;
	}

	////// Cheecked -> Content -> View //////

	// Apos alguma alteracao, verifica o conteudo
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
	}

	// Quando o primeiro conteudo e iniciado
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}

	// Apos alguma alteracao, verifica a view
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}

	// Depois da inicializacao da view
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
	}

	ngDoCheck(): void {
		console.log('ndDoCheck');
	}

  ngOnInit(): void {
  }

	ngOnDestroy(): void {
		console.log('ngOnDestroy');
	}

}
