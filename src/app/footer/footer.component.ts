import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ocio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTrustMark() {
    try {
      const v = document.createElement('script');
      v.setAttribute('type', 'text/javascript');
      v.setAttribute('src', '//cdn.ywxi.net/js/host-loader.js?h=' + 'https://obsidiancode.io');
      document.getElementsByTagName('head')[0].appendChild(v);
    } catch (e) {}
  }

}
