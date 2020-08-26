const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAVIGATION SECTION 

const topNavigation = document.querySelectorAll("a");
console.log(topNavigation);
topNavigation[0].textContent=siteContent["nav"]["nav-item-1"];
topNavigation[1].textContent=siteContent["nav"]["nav-item-2"];
topNavigation[2].textContent=siteContent["nav"]["nav-item-3"];
topNavigation[3].textContent=siteContent['nav']['nav-item-4'];
topNavigation[4].textContent=siteContent['nav']['nav-item-5'];
topNavigation[5].textContent=siteContent['nav']['nav-item-6'];

// CTA SECTION 

const ctaH1 = document.querySelector("h1");
ctaH1.innerHTML = "Dom <br> Is <br> Awesome";

const ctaButton = document.querySelector('button')
ctaButton.textContent=siteContent['cta']['button'];

const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// MAIN CONTENT SECTION

const topContent = document.querySelectorAll('h4')
console.log(topContent)
topContent[0].textContent = siteContent['main-content']['features-h4'];
topContent[1].textContent = siteContent['main-content']['about-h4'];
topContent[2].textContent = siteContent['main-content']['services-h4'];
topContent[3].textContent = siteContent['main-content']['product-h4'];
topContent[4].textContent = siteContent['main-content']['vision-h4'];
topContent[5].textContent = siteContent['contact']['contact-h4'];

const topContentP = document.querySelectorAll('.top-content p');
console.log(topContentP);
topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent = siteContent['main-content']['about-content'];

const middImg = document.getElementById("middle-img");
middImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// BOTTOM CONTENT SECTION 

const bottomContent = document.querySelectorAll('.bottom-content p');
console.log(bottomContent);
bottomContent[0].textContent = siteContent['main-content']['services-content'];
bottomContent[1].textContent = siteContent['main-content']['product-content'];
bottomContent[2].textContent = siteContent['main-content']['vision-content'];

const sectionContent = document.querySelectorAll('.contact p');
console.log(sectionContent);
sectionContent[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA"
sectionContent[1].textContent = siteContent['contact']['phone'];
sectionContent[2].textContent = siteContent['contact']['email'];

// FOOTER SECTION 

const footerP = document.querySelector('footer p');
console.log(footerP);
footerP.textContent = siteContent['footer']['copyright']
