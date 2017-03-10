import { Component } from '@angular/core';

import { NavController, Platform, ActionSheetController,
  AlertController, ToastController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  button: string = "action";

  testRadioOpen: boolean;
  testRadioResult;

  testCheckboxOpen: boolean;
  testCheckboxResult;

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;

  constructor(
  	public navCtrl: NavController,
  	public platform: Platform,
  	public actionsheetCtrl: ActionSheetController,
  	public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {

  }

  openMenu() {
  	let actionSheet = this.actionsheetCtrl.create({
  		title: '操作列表',
  		cssClass: '',
  		buttons: [{
  			text: '删除',
  			role: 'destructive',
  			icon: !this.platform.is('ios') ? 'trash' : null,
  			handler: () => {
  				console.log('Delete Clicked');
  			}
  		},
  		{
  			text: '分享',
  			icon: !this.platform.is('ios') ? 'share' : null,
  			handle: () => {
  				console.log('Share Clicked');
  			}
  		},
  		{
  			text: '开始',
  			icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
  			handle: () => {
  				console.log('Play Clicked');
  			}
  		},
  		{
  			text: '收藏',
  			icon: !this.platform.is('ios') ? 'heart-outline' : null,
  			handle: () => {
  				console.log('Favorite Clicked');
  			}
  		},
  		{
  			text: '取消',
  			role: 'cancel',
  			icon: !this.platform.is('ios') ? 'close' : null,
  			handle: () => {
  				console.log('Cancel clicked');
  			}
  		}]
  	});
  	actionSheet.present();
  }

  doAlert() {
  	let alert = this.alertCtrl.create({
  		title: '基础弹窗',
  		message: '我是小弹窗~',
  		buttons: ['OK']
  	});
  	alert.present();
  }

  doPrompt() {
  	let prompt = this.alertCtrl.create({
  		title: '提示框',
  		message: '请输入暗号',
  		inputs: [{
  			name: 'title',
  			placeholder: '知道吗？'
  		}],
  		buttons: [{
  			text: '不知道',
  			handle: data => {
  				console.log('知错能改，善莫大焉');
  			}
  		},
  		{
  			text: '我错了，我不知道~',
  			handle: data => {
  				console.log('Interesting man/woman');
  			}
  		}]
  	});
  	prompt.present();
  }

  doConfirm() {
  	let confirm = this.alertCtrl.create({
  		title: '有没有给我Star呀？',
  		message: '嘻嘻嘻',
  		buttons: [{
  			text: '木有，现在给',
  			handle: () => {
  				console.log('O(∩_∩)O谢谢');
  			}
  		},{
			text: '给了~',
			handle: () => {
				console.log('O(∩_∩)O谢谢');
			}
		}]
  	});
  	confirm.present();
  }

  doRadio() {
  	let radio = this.alertCtrl.create();
  	radio.setTitle('你想去哪吃饭？');

  	radio.addInput({
  		type: 'radio',
  		label: '韵苑大酒店',
  		value: '1',
  		checked: false
  	});

  	radio.addInput({
  		type: 'radio',
  		label: '学二',
  		value: '2',
  		checked: false
  	});

  	radio.addInput({
  		type: 'radio',
  		label: '东教工',
  		value: '3',
  		checked: false
  	});

  	radio.addInput({
  		type: 'radio',
  		label: '外卖',
  		value: '4',
  		checked: false
  	});

  	radio.addInput({
  		type: 'radio',
  		label: '你去那我就去哪~',
  		value: '5',
  		checked: true
  	});

  	radio.addButton('我再想想');
  	radio.addButton({
  		text: '确认',
  		handle: data => {
  			console.log('传送的数据:', data);
  			this.testRadioOpen = false;
  			this.testRadioResult = data;
  		}
  	});

  	radio.present().then(() => {
  		this.testRadioOpen = true;
  	});
  }

  doCheckbox() {
  	let checkbox = this.alertCtrl.create();
  	checkbox.setTitle('你喜欢哪个食堂？');

  	checkbox.addInput({
  		type: 'checkbox',
  		label: '韵苑大酒店',
  		value: '1',
  		checked: false
  	});

  	checkbox.addInput({
  		type: 'checkbox',
  		label: '学二',
  		value: '2',
  		checked: false
  	});

  	checkbox.addInput({
  		type: 'checkbox',
  		label: '东教工',
  		value: '3',
  		checked: false
  	});

  	checkbox.addInput({
  		type: 'checkbox',
  		label: '外卖',
  		value: '4',
  		checked: false
  	});

  	checkbox.addInput({
  		type: 'checkbox',
  		label: '你喜欢哪个我就喜欢哪个~',
  		value: '5',
  		checked: true
  	});

  	checkbox.addButton('我再想想');
  	checkbox.addButton({
  		text: '确认',
  		handle: data => {
  			console.log('传送的数据:', data);
  			this.testCheckboxOpen = false;
  			this.testCheckboxResult = data;
  		}
  	});

  	checkbox.present().then(() => {
  		this.testCheckboxOpen = true;
  	});
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: '我会不会突然地出现',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: '自己动手关宝宝',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  showLongToast() {
    let toast = this.toastCtrl.create({
      message: '一行两行三四行~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~凑字数',
      duration: 2000,
    });
    toast.present();
  }

  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

}
