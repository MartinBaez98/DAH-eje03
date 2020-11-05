import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public places = [];
  public tempPlaces = [];
  public search = '';

  constructor() {
    // consulta remota
    this.places.push({
      image: 'https://sanblasrivieranayarit.com/wp-content/uploads/2016/06/DSC_1014-1.jpg',
      title: 'La contaduría',
      subtitle: 'San Blas, Nayarit',
      description: 'El heroico puerto de San Blas fue pieza clave durante la guerra que dio independencia a nuestro país, siendo el Cerro de la Contaduría escenario de importantes batallas.  Una razón más para gritar: ¡Viva México y Viva San Blas!',
      active: true
    });

    this.places.push({
      image: 'https://www.turismomexico.es/wp-content/uploads/2015/09/parroquiasantiagoapostol-1024x768.jpg',
      title: 'Parroquía del Santo Santiago',
      subtitle: 'Compostela, Nayarit',
      description: 'En tiempos prehispánicos conocido como el Valle de Coatlán, que después adoptara el nombre en honor a la ciudad situada en Galicia, Santiago de Compostela y que en la época colonial se le llamaba Compostela de Indias.',
      active: true
    });

    this.places.push({
      image: 'https://www.turismomexico.es/wp-content/uploads/2015/09/san-blas-629x420.jpg',
      title: 'La tovara',
      subtitle: 'San Blas, Nayarit',
      description: 'La maravilla de San Blas se puede apreciar también en un sitio conocido como La Tovara, un manantial hogar de especies como: tortugas, cocodrilos, ocelotes, una gran diversidad de aves, como el flamingo y la garza.',
      active: false
    });

    this.places.push({
      image: 'https://www.turismomexico.es/wp-content/uploads/2015/09/mexcaltitan.jpg',
      title: 'Isla de Mexcatitlán',
      subtitle: 'Santiago Ixcuitla, Nayarit',
      description: 'La Isla de Mexcatitlán fue un lugar de suma importancia en la época prehispánica, conocida como la antigua Aztlán ',
      active: true
    });

    this.places.push({
      image: 'https://www.turismomexico.es/wp-content/uploads/2015/09/laguna-encantada.jpg',
      title: 'Laguna Encantada',
      subtitle: 'Santa maría del oro, Nayarit',
      description: 'Paisaje de espectacular peculiaridad; situada en una depresión volcánica formada por el derrumbe de una cámara magmática y flanqueda por una franja volcánica.',
      active: false
    });

    this.places.push({
      image: 'https://www.turismomexico.es/wp-content/uploads/2015/09/A1751.jpg',
      title: 'Los Toriles',
      subtitle: 'Ixtlán del Río, Nayarit',
      description: 'Los Toriles, entre sus edificaciones destacan un templo circular con diámetro de 25 metros dedicado a Ehécatl, dios del viento, con advocación a Quetzalcóatl',
      active: false
    });

    this.places.push({
      image: 'https://www.turismomexico.es/wp-content/uploads/2015/09/tumblr_kpan61xvLN1qzf685o1_500.jpg',
      title: 'Tejido Huichol',
      subtitle: 'Nayarit',
      description: 'Algunas de las etnias asentadas en Nayarit y en el estado de Jalisco, principalmente en la orografía de la Sierra Madre Occidental, a donde huyeron durante el asedio de los españoles,  son la huichol, cora, tepehuan y teco.',
      active: true
    });

    this.places.push({
      image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/04/lo-de-marcos.jpg',
      title: 'Lo de Marcos',
      subtitle: 'Nayarit',
      description: 'Es un pintoresco pueblito de la costa nayarita de calles angostas y casas coloridas, cuyos habitantes viven del turismo y del mar. Cuando estés allá verás que los pescadores acostumbran reparar sus redes en la puerta de sus casas.',
      active: false
    });

    this.places.push({
      image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/04/litibu-mexico.jpg',
      title: 'Litibú',
      subtitle: 'Nayarit',
      description: 'Zona de playas vírgenes de la Riviera Nayarit de finas y doradas arenas y oleaje tranquilo. En el aire se siente el característico olor de una playa limpia que invita a los bañistas a pasar un relajado y divertido día, en las cálidas aguas de este tesoro oculto en el Pacífico nayarita.',
      active: false
    });

    this.places.push({
      image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/04/la-cruz-de-huanacaxtle.jpg',
      title: 'La Cruz de Huanacaxtle',
      subtitle: 'Nayarit',
      description: 'La Cruz de Huanacaxtle es una especie de capital náutica de la costa nayarita gracias a esta marina, la más grande de la Riviera Nayarit.',
      active: false
    });

    this.places.push({
      image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/04/san-pancho.jpg',
      title: 'San Pancho',
      subtitle: 'Nayarit',
      description: 'San Francisco, aunque todos le dicen San Pancho, es un pueblo costero de la Bahía de Banderas, uno de los que mejor combina los rasgos tradicionales de los pueblos del Pacífico mexicano, con las prácticas modernas.',
      active: false
    });

    this.places.push({
      image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/04/punta-de-mita.jpg',
      title: 'Punta de Mita',
      subtitle: 'Nayarit',
      description: 'Punta de Mita es el punto costero continental más cercano a las espectaculares Islas Marietas, uno de los destinos turísticos más demandados en el Pacífico mexicano, con magníficos arenales donde podrás beber un sabroso coctel tropical.',
      active: false
    });

    this.places.push({
      image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/04/la-cruz-de-huanacaxtle.jpg',
      title: 'La Cruz de Huanacaxtle',
      subtitle: 'Nayarit',
      description: 'La Cruz de Huanacaxtle es una especie de capital náutica de la costa nayarita gracias a esta marina, la más grande de la Riviera Nayarit.',
      active: false
    });

    this.places.push({
      image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/04/acaponeta-mexico.jpg',
      title: 'Acaponeta',
      subtitle: 'Nayarit',
      description: 'La pequeña ciudad de Acaponeta, al norte del estado en el municipio del mismo nombre, ostenta el triple nombre de La Ciudad de las Gardenias, La Ciudad de los Pianos y La Atenas Nayarita.',
      active: false
    });

    this.places.push({
      image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/04/centro-historico-de-tepic.jpg',
      title: 'Centro histórico de Tepic',
      subtitle: 'Tepic, Nayarit',
      description: 'En el bello centro histórico de Tepic sobresalen construcciones como la Plaza de Armas, el Palacio de Gobierno y la Catedral de la Purísima Concepción.',
      active: false
    });

    this.tempPlaces = this.places;

  }


  filter(): void{
    console.log('Buscando..' + this.search);
    this.places = [];
    this.places = this.tempPlaces;
    this.places = this.places.filter((a) => {
      return(a.title.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
    });
  }

  deletePlace(pos: number): void {
    for (let i = 0; i < this.tempPlaces.length; i++){
      if (this.places[pos].title === this.tempPlaces[i].title){
        this.tempPlaces.splice(i, 1);
      }
    }
    this.places.splice(pos, 1);
  }

  changeStatus(pos: number): void{
    this.places[pos].active = !this.places[pos].active;
  }

}
