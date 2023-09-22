import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {

  pokemonData: any[] = [];

  pokemons = [
    { "id": 1, "name": "Bulbasaur", "typeList": ["Planata", "veneno"] , "img": {"src": "../../assets/hires/001.png"} }, 
    { "id": 2, "name": "Ivysaur", "typeList": ["Planata", "veneno"] , "img": {"src": "../../assets/hires/002.png"}},
    { "id": 3, "name": "Venusaur", "typeList": ["Planata", "veneno"], "img": {"src": "../../assets/hires/003.png"} },
    { "id": 4, "name": "Charmander", "typeList": ["Fuego"] , "img": {"src": "../../assets/hires/004.png"}},
    { "id": 5, "name": "Charmeleon", "typeList": ["Fuego"] , "img": {"src": "../../assets/hires/005.png"}},
    { "id": 6, "name": "Charizard", "typeList": ["Fuego", "Volador"] , "img": {"src": "../../assets/hires/006.png"}},
    { "id": 7, "name": "Squirtle", "typeList": ["Agua"] , "img": {"src": "../../assets/hires/007.png"}},
    { "id": 8, "name": "Wartortle", "typeList": ["Agua"] , "img": {"src": "../../assets/hires/008.png"}},
    { "id": 9, "name": "Blastoise", "typeList": ["Agua"] , "img": {"src": "../../assets/hires/009.png"}},
    { "id": 10, "name": "Caterpie", "typeList": ["Bicho"] , "img": {"src": "../../assets/hires/010.png"}},
    { "id": 11, "name": "Metapod", "typeList": ["Bicho"] , "img": {"src": "../../assets/hires/011.png"}},
    { "id": 12, "name": "Butterfree", "typeList": ["Bicho", "Volador"] , "img": {"src": "../../assets/hires/012.png"}},
    { "id": 13, "name": "Weedle", "typeList": ["Bug", "Poison"] , "img": {"src": "../../assets/hires/013.png"}},
    { "id": 14, "name": "Kakuna", "typeList": ["Bug", "Poison"] , "img": {"src": "../../assets/hires/014.png"}},
    { "id": 15, "name": "Beedrill", "typeList": ["Bug", "Poison"] , "img": {"src": "../../assets/hires/015.png"}},
    { "id": 16, "name": "Pidgey", "typeList": ["Normal", "Flying"] , "img": {"src": "../../assets/hires/016.png"}},

  ]

  constructor() { }

  ngOnInit() {
  }

}
