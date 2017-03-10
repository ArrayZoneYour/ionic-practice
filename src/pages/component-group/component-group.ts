import { Component } from '@angular/core';

import { App, MenuController, ModalController,
  Platform, NavParams, NavController, ViewController } from 'ionic-angular';


@Component({
	templateUrl: 'component-group.html'
  // selector: 'page-component-group',
  // templateUrl: 'component-group.html'
})
export class ComponentGroupPage {

	constructor(app: App, menu: MenuController,
    public modalCtrl: ModalController,
    public nav: NavController) {
		menu.enable(true);
	}

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  openIconListPage() {
    this.nav.push(IconListPage);
  }

  openAvatarListPage() {
    this.nav.push(AvatarListPage);
  }

  openMultlineListPage() {
    this.nav.push(MultlineListPage);
  }

  openSlidingListPage() {
    this.nav.push(SlidingListPage);
  }

  openThumbnailListPage() {
    this.nav.push(ThumbnailListPage);
  }

}


@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">返回</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-left>
          <img src="{{character.image}}">
        </ion-avatar>
        <h2>{{character.name}}</h2>
        <p>{{character.quote}}</p>
      </ion-item>
      <ion-item *ngFor="let item of character['items']">
        {{item.title}}
        <ion-note item-right>
          {{item.note}}
        </ion-note>
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Cendy Zeng',
        quote: 'little Font-end girl!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

@Component({
  template: `
  <ion-header>
  <ion-navbar>
    <ion-title>Icon List</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list no-border>

    <ion-list-header>
      Classes
    </ion-list-header>

    <ion-item>
      <ion-icon name='planet' item-left></ion-icon>
      Astronomy
      <ion-note item-right>
      To the moon
      </ion-note>
    </ion-item>

    <ion-item>
      <ion-toggle checked="false"></ion-toggle>
      <ion-label>
        Muggle Studies
      </ion-label>
      <ion-icon name='body' item-left></ion-icon>
    </ion-item>

    <ion-item>
      <ion-icon name='leaf' item-left></ion-icon>
      Herbology
      <ion-icon name='rose' item-right color="secondary"></ion-icon>
    </ion-item>

    <ion-item>
      <ion-icon name='flask' item-left></ion-icon>
      Potions
      <ion-note item-right>
      Poisonous
      </ion-note>
    </ion-item>



  </ion-list>


  <ion-list>

    <ion-list-header>
      Activities
    </ion-list-header>

    <ion-item>
      Incantation
      <ion-icon name='color-wand' item-left></ion-icon>
      <ion-note item-right>Crucio!</ion-note>
    </ion-item>

    <ion-item>
      <ion-toggle checked="true"></ion-toggle>
      <ion-label>
        Quidditch Practice
      </ion-label>
      <ion-icon name='brush' item-left></ion-icon>
    </ion-item>


    <ion-item>
      <ion-icon name='wine' item-left></ion-icon>
      Mead Drinking
      <ion-note item-right>Yes please</ion-note>
    </ion-item>


  </ion-list>

  <ion-list>

    <ion-list-header>
      Friends
    </ion-list-header>

    <ion-item>
      <ion-icon name='flash' item-left></ion-icon>
      Harry
      <ion-note item-right>The boy who lived</ion-note>
    </ion-item>

    <ion-item>
      <ion-icon name='book' item-left></ion-icon>
      Hermoine
      <ion-note item-right>Muggle-born</ion-note>
    </ion-item>

    <ion-item>
      <ion-icon name='beer' item-left></ion-icon>
      Ron
      <ion-note item-right>Brilliant!</ion-note>
    </ion-item>


  </ion-list>


</ion-content>
  `
})
export class IconListPage {
  constructor(){}
}

@Component({
  template: `
  <ion-header>
  <ion-navbar>
    <ion-title>Avatar List</ion-title>
  </ion-navbar>
</ion-header>

<ion-content class="list-avatar-page">
  <ion-list>

    <ion-list-header>Today</ion-list-header>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-woody.png">
      </ion-avatar>
      <h2>Woody</h2>
      <p>This town ain't big enough for the two of us!</p>
      <ion-note item-right>3:43 pm</ion-note>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-buzz.png">
      </ion-avatar>
      <h2>Buzz Lightyear</h2>
      <p>My eyeballs could have been sucked from their sockets!</p>
      <ion-note item-right>1:12 pm</ion-note>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-jessie.png">
      </ion-avatar>
      <h2>Jessie</h2>
      <p>Well aren't you just the sweetest space toy I ever did meet!</p>
      <ion-note item-right>10:03 am</ion-note>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-potatohead.png">
      </ion-avatar>
      <h2>Mr. Potato Head</h2>
      <p>You're not turning me into a Mashed Potato.</p>
      <ion-note item-right>5:47 am</ion-note>
    </ion-item>

  </ion-list>

  <ion-list>

    <ion-list-header>Yesterday</ion-list-header>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-hamm.png">
      </ion-avatar>
      <h2>Hamm</h2>
      <p>You heard of Kung Fu? Well get ready for pork chop.</p>
      <ion-note item-right>11:11 pm</ion-note>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-slinky.png">
      </ion-avatar>
      <h2>Slinky Dog</h2>
      <p>I may not be a smart dog, but I know what roadkill is.</p>
      <ion-note item-right>8:54 pm</ion-note>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-rex.png">
      </ion-avatar>
      <h2>Rex</h2>
      <p>Were you scared? Tell me honestly.</p>
      <ion-note item-right>7:22 am</ion-note>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-bullseye.png">
      </ion-avatar>
      <h2>Bullseye</h2>
      <p>Neigh!</p>
      <ion-note item-right>2:08 am</ion-note>
    </ion-item>

  </ion-list>

  <ion-list>

    <ion-list-header>Last Week</ion-list-header>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-barbie.png">
      </ion-avatar>
      <h2>Barbie</h2>
      <p>So, who's ready for Ken's dream tour?</p>
      <ion-note item-right>Sun</ion-note>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-squeeze.png">
      </ion-avatar>
      <h2>Squeeze</h2>
      <p>The claw is our master.</p>
      <ion-note item-right>Fri</ion-note>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-sarge.png">
      </ion-avatar>
      <h2>Sarge</h2>
      <p>Code Red, repeat: We're at Code Red!</p>
      <ion-note item-right>Wed</ion-note>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ts-bopeep.png">
      </ion-avatar>
      <h2>Bo Peep</h2>
      <p>What would you say if I get someone else to watch the sheep for me tonight?</p>
      <ion-note item-right>Mon</ion-note>
    </ion-item>

  </ion-list>

</ion-content>
`
})
export class AvatarListPage {
  constructor() {}
}

@Component({
  template: `<ion-header>
  <ion-navbar>
    <ion-title>Multiline Items</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-list-header>
      Recent Conversations
    </ion-list-header>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-finn.png">
      </ion-avatar>
      <h2>Finn</h2>
      <h3>I'm a big deal</h3>
      <p>Listen, I've had a pretty messed up day...</p>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-han.png">
      </ion-avatar>
      <h2>Han</h2>
      <h3>Look, kid...</h3>
      <p>I've got enough on my plate as it is, and I...</p>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-rey.png">
      </ion-avatar>
      <h2>Rey</h2>
      <h3>I can handle myself</h3>
      <p>You will remove these restraints and leave...</p>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-luke.png">
      </ion-avatar>
      <h2>Luke</h2>
      <h3>Your thoughts betray you</h3>
      <p>I feel the good in you, the conflict...</p>
    </ion-item>
  </ion-list>

  <ion-list>
    <ion-list-header>
      Online
    </ion-list-header>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-poe.png">
      </ion-avatar>
      <h2>Poe</h2>
      <h3>New Ride</h3>
      <p>I just upgraded my X-Wing. Next time...</p>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-ben.png">
      </ion-avatar>
      <h2>Ben</h2>
      <h3>Move Along</h3>
      <p>These aren't the droids you're looking for...</p>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-leia.png">
      </ion-avatar>
      <h2>Leia</h2>
      <h3>You're My Only Hope</h3>
      <p>I've placed information vital to the survival...</p>
    </ion-item>

    <ion-item>
      <ion-avatar item-left>
        <img src="assets/img/avatar-yoda.png">
      </ion-avatar>
      <h2>Yoda</h2>
      <h3>Size matters not</h3>
      <p>Do or do not. There is no try...</p>
    </ion-item>
  </ion-list>
</ion-content>
  `
})

export class MultlineListPage {
  constructor() {}
}

@Component({
  template: `<ion-header>
  <ion-navbar>
    <ion-title>Sliding Items</ion-title>
  </ion-navbar>
</ion-header>

<ion-content class="outer-content">
  <ion-list>
    <ion-list-header>
      Busters
    </ion-list-header>

    <ion-item-sliding>
      <ion-item>
        <ion-avatar item-left>
          <img src="assets/img/venkman.jpg">
        </ion-avatar>
        <h2>Venkman</h2>
        <p>Back off man, I'm a scientist.</p>
      </ion-item>
      <ion-item-options>
        <button ion-button color="light" icon-left>
          <ion-icon name="ios-more"></ion-icon>
          More
        </button>
        <button ion-button color="primary" icon-left>
          <ion-icon name="text"></ion-icon>
          Text
        </button>
        <button ion-button color="secondary" icon-left>
          <ion-icon name="call"></ion-icon>
          Call
        </button>
      </ion-item-options>
    </ion-item-sliding>


    <ion-item-sliding>
      <ion-item>
        <ion-avatar item-left>
          <img src="assets/img/spengler.jpg">
        </ion-avatar>
        <h2>Egon</h2>
        <p>We're gonna go full stream.</p>
      </ion-item>
      <ion-item-options>
        <button ion-button color="light" icon-left>
          <ion-icon name="ios-more"></ion-icon>
          More
        </button>
        <button ion-button color="primary" icon-left>
          <ion-icon name="text"></ion-icon>
          Text
        </button>
        <button ion-button color="secondary" icon-left>
          <ion-icon name="call"></ion-icon>
          Call
        </button>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-avatar item-left>
          <img src="assets/img/stantz.jpg">
        </ion-avatar>
        <h2>Ray</h2>
        <p>Ugly little spud, isn't he?</p>
      </ion-item>
      <ion-item-options>
        <button ion-button color="light" icon-left>
          <ion-icon name="ios-more"></ion-icon>
          More
        </button>
        <button ion-button color="primary" icon-left>
          <ion-icon name="text"></ion-icon>
          Text
        </button>
        <button ion-button color="secondary" icon-left>
          <ion-icon name="call"></ion-icon>
          Call
        </button>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-avatar item-left>
          <img src="assets/img/winston.jpg">
        </ion-avatar>
        <h2>Winston</h2>
        <p>That's a big Twinkie.</p>
      </ion-item>
      <ion-item-options>
        <button ion-button color="light" icon-left>
          <ion-icon name="ios-more"></ion-icon>
          More
        </button>
        <button ion-button color="primary" icon-left>
          <ion-icon name="text"></ion-icon>
          Text
        </button>
        <button ion-button color="secondary" icon-left>
          <ion-icon name="call"></ion-icon>
          Call
        </button>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-avatar item-left>
          <img src="assets/img/tully.jpg">
        </ion-avatar>
        <h2>Tully</h2>
        <p>Okay, who brought the dog?</p>
      </ion-item>
      <ion-item-options>
        <button ion-button color="light" icon-left>
          <ion-icon name="ios-more"></ion-icon>
          More
        </button>
        <button ion-button color="primary" icon-left>
          <ion-icon name="text"></ion-icon>
          Text
        </button>
        <button ion-button color="secondary" icon-left>
          <ion-icon name="call"></ion-icon>
          Call
        </button>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-avatar item-left>
          <img src="assets/img/barrett.jpg">
        </ion-avatar>
        <h2>Dana</h2>
        <p>I am The Gatekeeper!</p>
      </ion-item>
      <ion-item-options>
        <button ion-button color="light" icon-left>
          <ion-icon name="ios-more"></ion-icon>
          More
        </button>
        <button ion-button color="primary" icon-left>
          <ion-icon name="text"></ion-icon>
          Text
        </button>
        <button ion-button color="secondary"icon-left >
          <ion-icon name="call"></ion-icon>
          Call
        </button>
      </ion-item-options>
    </ion-item-sliding>

  </ion-list>

  <ion-list>
    <ion-list-header>
      Ghosts
    </ion-list-header>

    <ion-item-sliding>
      <ion-item>
        <ion-avatar item-left>
          <img src="assets/img/slimer.jpg">
        </ion-avatar>
        <h2>Slimer</h2>
        <p>Boo!</p>
      </ion-item>
      <ion-item-options>
        <button ion-button color="light" icon-left>
          <ion-icon name="ios-more"></ion-icon>
          More
        </button>
        <button ion-button color="primary" icon-left>
          <ion-icon name="text"></ion-icon>
          Text
        </button>
        <button ion-button color="secondary" icon-left>
          <ion-icon name="call"></ion-icon>
          Call
        </button>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-avatar item-left>
          <img src="assets/img/marshmallow-man.png">
        </ion-avatar>
        <h2>Stay Puft Marshmallow Man</h2>
        <p>Never cross the streams!</p>
      </ion-item>
      <ion-item-options>
        <button ion-button color="light" icon-left>
          <ion-icon name="ios-more"></ion-icon>
          More
        </button>
        <button ion-button color="primary" icon-left>
          <ion-icon name="text"></ion-icon>
          Text
        </button>
        <button ion-button color="secondary" icon-left>
          <ion-icon name="call"></ion-icon>
          Call
        </button>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-avatar item-left>
          <img src="assets/img/gozer.png">
        </ion-avatar>
        <h2>Gozer</h2>
        <p>Are you a God?</p>
      </ion-item>
      <ion-item-options>
        <button ion-button color="light" icon-left>
          <ion-icon name="ios-more"></ion-icon>
          More
        </button>
        <button ion-button color="primary" icon-left>
          <ion-icon name="text"></ion-icon>
          Text
        </button>
        <button ion-button color="secondary" icon-left>
          <ion-icon name="call"></ion-icon>
          Call
        </button>
      </ion-item-options>
    </ion-item-sliding>

  </ion-list>

</ion-content>
  `
})

export class SlidingListPage {
  constructor() {}
}

@Component({
  template: `<ion-header>
  <ion-navbar>
    <ion-title>Thumbnails</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>

    <ion-item>
      <ion-thumbnail item-left>
        <img src="assets/img/thumbnail-totoro.png">
      </ion-thumbnail>
      <h2>My Neighbor Totoro</h2>
      <p>Hayao Miyazaki • 1988</p>
      <button ion-button clear item-right>View</button>
    </ion-item>

    <ion-item>
      <ion-thumbnail item-left>
        <img src="assets/img/thumbnail-rotla.png">
      </ion-thumbnail>
      <h2>Raiders of the Lost Ark</h2>
      <p>Steven Spielberg • 1981</p>
      <button ion-button clear item-right>View</button>
    </ion-item>

    <ion-item>
      <ion-thumbnail item-left>
        <img src="assets/img/thumbnail-ghostbusters.png">
      </ion-thumbnail>
      <h2>Ghostbusters</h2>
      <p>Ivan Reitman • 1984</p>
      <button ion-button clear item-right>View</button>
    </ion-item>

    <ion-item>
      <ion-thumbnail item-left>
        <img src="assets/img/thumbnail-batman.png">
      </ion-thumbnail>
      <h2>Batman</h2>
      <p>Tim Burton • 1988</p>
      <button ion-button clear item-right>View</button>
    </ion-item>

    <ion-item>
      <ion-thumbnail item-left>
        <img src="assets/img/thumbnail-bttf.png">
      </ion-thumbnail>
      <h2>Back to the Future</h2>
      <p>Robert Zemeckis • 1985</p>
      <button ion-button clear item-right>View</button>
    </ion-item>

    <ion-item>
      <ion-thumbnail item-left>
        <img src="assets/img/thumbnail-esb.png">
      </ion-thumbnail>
      <h2>The Empire Strikes Back</h2>
      <p>Irvin Kershner • 1980</p>
      <button ion-button clear item-right>View</button>
    </ion-item>

    <ion-item>
      <ion-thumbnail item-left>
        <img src="assets/img/thumbnail-terminator.png">
      </ion-thumbnail>
      <h2>The Terminator</h2>
      <p>James Cameron • 1984</p>
      <button ion-button clear item-right>View</button>
    </ion-item>

  </ion-list>
</ion-content>`
})

export class ThumbnailListPage {
  constructor() {}
}