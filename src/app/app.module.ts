import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente.componente';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';
import { RenderizarListaComponent } from './renderizar-lista/renderizar-lista.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponentComponent,
    RenderizarListaComponent,
    TwoWayDataBindingComponent /** declaração da classe que criamos, com essa declaração 
                                      conseguiremos exibir o nosso conteudo la da classe 
                                      "export class PrimeiroComponenteComponent{} " na pagina  */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
