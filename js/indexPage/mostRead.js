const mostReadCard = `
<div class="card-news">
<a href="">
  <div class="row">
    <div class="col-md-5">
      <img src="" alt="thumbnail">
    </div>
    <div class="col-md-7">
      <div class="card-text">
        <h4></h4>
        <p>
        </p>
        <time datetime=""></time>
      </div>
    </div>
  </div>
</a>
</div>
`;

const bigMostReadCard = `
<div class="card-news">
<a href="">
  <div class="card-img">
    <img src="" alt="thumbnail">
  </div>
  <div class="card-text">
    <h4></h4>
    <time datetime=""></time>
  </div>
</a>
</div>
`;

class MostReadCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = mostReadCard
        this.querySelector("h4").innerText = this.getAttribute('title')
        this.querySelector("p").innerText = this.getAttribute('excerpt')
        this.querySelector("img").setAttribute('src',  this.getAttribute('src'))
        this.querySelector("a").setAttribute('href', this.getAttribute('href'))
        this.querySelector("time").innerHTML = this.getAttribute('datetime')
        this.querySelector("time").setAttribute('datetime',  this.getAttribute('datetime'))
    }
};

class BigMostReadCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = bigMostReadCard
        this.querySelector("h4").innerText = this.getAttribute('title')
        this.querySelector("img").setAttribute('src',  this.getAttribute('src'))
        this.querySelector("a").setAttribute('href', this.getAttribute('href'))
        this.querySelector("time").innerHTML = this.getAttribute('datetime')
        this.querySelector("time").setAttribute('datetime',  this.getAttribute('datetime'))
    }
};

window.customElements.define('most-read-card', MostReadCard);
window.customElements.define('big-most-read-card', BigMostReadCard);