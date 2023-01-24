import { Component } from "@angular/core";



@Component({
    selector:"app-primeiro-componente", /* to definindo o nome que vo usar como seletor para selecionar a minha classe 
                                           que estou esportando         */

    template:"<h2>Primeiro Componente</h2>", /** conteudo que sera exibido na pagina  */
    styles:["h2{color:red}"] ,/** estilos  do conteudo da pagina */
})
export class PrimeiroComponenteComponent{
    nome ="jairo";

} /** classe que sera esportada para ser declarada
                                                para ser acrescentada , na aplicação la no 
                                                    arquivo app.modules.ts  */