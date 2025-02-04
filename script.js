// Espera o DOM estar carregado antes de iniciar
document.addEventListener("DOMContentLoaded", () => {
  /* Banner Rotation Script */
  let bannerIndex = 0;
  const banners = [
    { src: "https://token4fun.github.io/babysherk/banner1.gif", link: "https://sherkfun.io/" },
    { src: "https://sherkfuntoken.github.io/site/pongbanner.gif", link: "https://sherkfuntoken.github.io/site/pong2.html" },
    { src: "https://token4fun.github.io/babysherk/banner3.gif", link: "https://t.me/SherkGameBot" },
    { src: "https://token4fun.github.io/babysherk/banner5.gif", link: "https://t.me/SherkFunCommunity" },
    { src: "https://token4fun.github.io/babysherk/banner6.gif", link: "https://t.me/SherkFunCommunity/1529" },
    { src: "https://sherkfuntoken.github.io/site/banner7.gif", link: "https://www.youtube.com/@SherkFunToken" }
  ];

  function rotateBanner() {
    const bannerElement = document.getElementById("banner");
    const bannerLink = document.getElementById("banner-link");
    if (!bannerElement || !bannerLink) return;
    bannerElement.style.opacity = "0";
    setTimeout(() => {
      bannerIndex = (bannerIndex + 1) % banners.length;
      bannerElement.src = banners[bannerIndex].src;
      bannerLink.href = banners[bannerIndex].link;
      bannerElement.style.opacity = "1";
    }, 500);
  }

  function prevBanner() {
    const bannerElement = document.getElementById("banner");
    const bannerLink = document.getElementById("banner-link");
    if (!bannerElement || !bannerLink) return;
    bannerIndex = (bannerIndex - 1 + banners.length) % banners.length;
    bannerElement.src = banners[bannerIndex].src;
    bannerLink.href = banners[bannerIndex].link;
  }

  function nextBanner() {
    const bannerElement = document.getElementById("banner");
    const bannerLink = document.getElementById("banner-link");
    if (!bannerElement || !bannerLink) return;
    bannerIndex = (bannerIndex + 1) % banners.length;
    bannerElement.src = banners[bannerIndex].src;
    bannerLink.href = banners[bannerIndex].link;
  }

  /* Crypto Prices Ticker */
  async function fetchCryptoPrices() {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=sherk,bitcoin,ethereum,binancecoin,solana&vs_currencies=usd&include_24hr_change=true"
      );
      if (!response.ok) throw new Error("Failed to fetch prices.");
      const data = await response.json();
      let prices = Object.entries(data)
        .map(([key, value]) => {
          const price = value.usd.toFixed(2);
          const change = value.usd_24h_change.toFixed(2);
          const colorClass = change >= 0 ? "positive" : "negative";
          return `${key.toUpperCase()}: $${price} (<span class="${colorClass}">${change}%</span>)`;
        })
        .join(" | ");
      document.getElementById("crypto-prices").innerHTML = prices;
    } catch (error) {
      document.getElementById("crypto-prices").textContent = "Failed to load crypto prices.";
      console.error("Error fetching crypto prices:", error);
    }
  }

  /* Dynamic Content */

  function getRandomFirstSection() {
    const versions = [
      {
        title: "Introducing the Community Favorite: Sherk Fun Token ($SFT)",
        content: `
          <p>What started as a test token on Solana by the SherkFun.io team has blossomed into a cherished community project. Today, $SFT is the flagship token of SherkFun.io with unique features that others only aspire to.</p><br>
          <p>With tools like SherkFunBuyBot operating flawlessly, get ready for the upcoming SherkSnipe&Buy Bot—crafted for unmatched speed and efficiency.</p><br>
          <p>Join the revolution and be part of this incredible movement!</p>
        `
      },
      {
        title: "Discover the Sherk Fun Token ($SFT) Revolution",
        content: `
          <p>The journey began with a test token on Solana and quickly became a community favorite. Today, $SFT is the flagship token of SherkFun.io, offering innovative features beyond compare.</p><br>
          <p>With SherkFunBuyBot active and the SherkSnipe&Buy Bot on the horizon, $SFT is reshaping blockchain interaction.</p><br>
          <p>Be a part of this revolution!</p>
        `
      },
      {
        title: "Get to Know the Sherk Fun Token ($SFT)",
        content: `
          <p>$SFT evolved from a simple test token into a beloved flagship project on SherkFun.io. It offers features that outshine the rest.</p><br>
          <p>With SherkFunBuyBot in action and SherkSnipe&Buy Bot on its way, token purchases become faster and smarter.</p><br>
          <p>Join the revolution now!</p>
        `
      }
    ];
    const randomVersion = versions[Math.floor(Math.random() * versions.length)];
    document.getElementById("highlight-title-first").innerHTML = randomVersion.title;
    document.getElementById("dynamic-content-first").innerHTML = randomVersion.content;
  }

  function getRandomSecondSection() {
    const versions = [
      {
        title: "Ready to Join the $SFT Revolution? 🚀",
        content: `
          <p>Step into the future with $SFT—the token that’s taking Solana by storm! Powered by Sherk.fun, $SFT is a game-changer for community-driven projects. With SherkFunBuyBot active and SherkSnipe&Buy Bot on the horizon, experience a new era in crypto.</p>
          <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlightgame">Buy $SFT Now</a>
          <a href="https://t.me/SherkFunCommunity" class="button">Join Telegram</a>
          <p>Join early to unlock exclusive rewards—the future of crypto is here!</p>
        `
      },
      {
        title: "Be Part of the Neon Wave 🌟",
        content: `
          <p>$SFT is more than a token—it’s a movement. Embrace advanced trading tools and a community-driven ethos. Don’t miss this neon revolution!</p>
          <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlightgame">Buy $SFT Now</a>
          <a href="https://t.me/SherkFunCommunity" class="button">Join Telegram</a>
          <p>Unlock exclusive benefits and be a key player in the $SFT movement!</p>
        `
      },
      {
        title: "Experience the Neon Future with $SFT",
        content: `
          <p>Unlock a world of possibilities with $SFT. Enjoy exclusive tools and a secure, community-driven platform that sets the crypto standard.</p>
          <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlightgame">Buy $SFT Now</a>
          <a href="https://t.me/SherkFunCommunity" class="button">Join Telegram</a>
          <p>Embark on the most exciting crypto revolution—your journey starts now!</p>
        `
      }
    ];
    const randomVersion = versions[Math.floor(Math.random() * versions.length)];
    document.getElementById("highlight-title-second").innerHTML = randomVersion.title;
    document.getElementById("dynamic-content-second").innerHTML = randomVersion.content;
  }

  function getRandomGiveaway() {
    const versions = [
      {
        title: "Giveaway Announcement",
        content: `
          <p>The exclusive $SFT Giveaway kicks off once the token bonds to Raydium! 0.5% (5M) of the supply will find a new holder.<br>
          Every purchase over $50 counts, and winners must hold tokens for at least 48 hours.</p>
        `
      },
      {
        title: "Giveaway Announcement",
        content: `
          <p>After bonding $SFT to Raydium, an exclusive Giveaway will be sponsored! 0.5% (5M) of the supply goes to a new holder.<br>
          Purchases over $50 count—hold your tokens for 48 hours to be eligible.</p>
        `
      },
      {
        title: "Giveaway Announcement",
        content: `
          <p>Get ready for an exciting Giveaway once $SFT bonds to Raydium! 0.5% (5M) of the supply is up for grabs.<br>
          All purchases over $50 qualify; remember to hold your tokens for 48 hours to win.</p>
        `
      }
    ];
    const randomVersion = versions[Math.floor(Math.random() * versions.length)];
    document.getElementById("giveaway-title").innerHTML = randomVersion.title;
    document.getElementById("giveaway-content").innerHTML = randomVersion.content;
  }

  /* Enigma Counter (random alphanumeric string with prefix "Guess and Win:") */
  function updateEnigmaCounter() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const length = 20;
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("enigma").innerHTML = "Guess and Win:<br>" + result;
  }
  function startEnigmaCounter() {
    setInterval(updateEnigmaCounter, 300);
  }

  /* Initialize movement for PNG elements with simple collision detection */
  function initElementMovement() {
    const elements = document.querySelectorAll(".animated-elements .element");
    elements.forEach(el => {
      el.style.left = Math.random() * (window.innerWidth - 150) + "px";
      el.style.top = Math.random() * (window.innerHeight - 150) + "px";
      el.dataset.vx = (Math.random() * 4 - 2).toFixed(2);
      el.dataset.vy = (Math.random() * 4 - 2).toFixed(2);
    });

    function animate() {
      elements.forEach(el => {
        let vx = parseFloat(el.dataset.vx);
        let vy = parseFloat(el.dataset.vy);
        let posX = parseFloat(el.style.left);
        let posY = parseFloat(el.style.top);
        const rect = el.getBoundingClientRect();
        posX += vx;
        posY += vy;
        if (posX <= 0 || posX + rect.width >= window.innerWidth) {
          vx = -vx;
        }
        if (posY <= 0 || posY + rect.height >= window.innerHeight) {
          vy = -vy;
        }
        el.dataset.vx = vx.toFixed(2);
        el.dataset.vy = vy.toFixed(2);
        el.style.left = posX + "px";
        el.style.top = posY + "px";
      });
      requestAnimationFrame(animate);
    }
    animate();
  }

  /* Contact Modal Handling with Countdown */
  function initContactModal() {
    const contactButton = document.getElementById("floating-button");
    const contactModal = document.getElementById("contactModal");
    const contactModalClose = document.getElementById("contactModalClose");
    const countdownElem = document.getElementById("contactCountdown");

    contactButton.addEventListener("click", () => {
      contactModal.style.display = "block";
      let count = 3;
      countdownElem.textContent = count;
      const interval = setInterval(() => {
        count--;
        countdownElem.textContent = count;
        if (count <= 0) {
          clearInterval(interval);
          contactModal.style.display = "none";
          window.location.href = "https://t.me/cakemoon";
        }
      }, 1000);
    });

    contactModalClose.addEventListener("click", () => {
      contactModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.style.display = "none";
      }
    });
  }

  /* Enigma Modal Handling for Guess and Win */
  function initEnigmaModal() {
    const enigmaElement = document.getElementById("enigma");
    const enigmaModal = document.getElementById("enigmaModal");
    const enigmaModalClose = document.getElementById("enigmaModalClose");

    enigmaElement.addEventListener("click", () => {
      enigmaModal.style.display = "block";
      updateEnigmaModalText();
      enigmaModal.dataset.interval = setInterval(updateEnigmaModalText, 3000);
    });

    enigmaModalClose.addEventListener("click", () => {
      enigmaModal.style.display = "none";
      clearInterval(enigmaModal.dataset.interval);
    });

    window.addEventListener("click", (e) => {
      if (e.target === enigmaModal) {
        enigmaModal.style.display = "none";
        clearInterval(enigmaModal.dataset.interval);
      }
    });
  }

  /* Update Enigma Modal Text with dynamic phrases about $SFT and mystery */
  function updateEnigmaModalText() {
    const phrases = [
      "Every moment, Sherk Fun Token unveils a new secret...",
      "Unlock the neon mystery with $SFT.",
      "Step into the future: Sherk Fun awaits.",
      "In the electric glow, $SFT sparks innovation.",
      "Discover the vibrant pulse of Sherk Fun Token.",
      "Sherk Fun Token: where crypto meets enigma.",
      "The blockchain mystery deepens with $SFT.",
      "Neon dreams and digital secrets: that's $SFT.",
      "Embrace the unknown with Sherk Fun Token.",
      "$SFT shines in the heart of the metaverse.",
      "Every flicker hides a riddle...",
      "Can you decipher the enigma of the night?",
      "Shadows and neon: a puzzle without a solution.",
      "The night whispers secrets beyond the ordinary.",
      "In the dance of light and darkness, mysteries abound.",
      "Dive deep into the digital enigma that is $SFT.",
      "A universe of secrets awaits within Sherk Fun Token.",
      "Every byte hides a brilliant mystery.",
      "Neon lights illuminate the path to $SFT.",
      "Unlock the futuristic code, one glow at a time.",
      "Where crypto and curiosity collide: $SFT.",
      "In the realm of neon, every moment is a revelation.",
      "Follow the luminous trail of Sherk Fun Token.",
      "Mystery dances in every pixel of $SFT.",
      "Let your mind wander through the neon labyrinth.",
      "Every spark of $SFT ignites a thousand questions.",
      "Secrets flow like electric currents through $SFT.",
      "Embrace the chaos of the digital cosmos with $SFT.",
      "The future is written in neon and coded in $SFT.",
      "Each flash of light reveals a new puzzle.",
      "Step beyond the ordinary—$SFT awaits your discovery.",
      "The neon enigma of Sherk Fun Token beckons the brave.",
      "Mysteries unfold in the rhythm of digital beats.",
      "Let the neon night guide your quest for truth in $SFT.",
      "In every shadow, a secret of $SFT is born."
    ];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    document.getElementById("enigmaModalText").textContent = randomPhrase;
  }

  /* Admin Modal Handling */
  function initAdminModal() {
    const adminBtn = document.getElementById("adminBtn");
    const modal = document.getElementById("adminModal");
    const closeBtn = document.getElementById("modalClose");
    const adminForm = document.getElementById("adminForm");
    
    adminBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });
    
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
    
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
    
    adminForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("adminUser").value;
      const password = document.getElementById("adminPass").value;
      if (username === "admin" && password === "password") {
        window.location.href = "adm.html";
      } else {
        alert("Invalid credentials!");
      }
    });
  }

  /* FAQ Accordion Script - Apenas um aberto por vez */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  /* Click-to-Scroll Behavior for MiniCards */
  const miniCards = document.querySelectorAll('.mini-card');
  const miniCardContainer = document.querySelector('.mini-card-grid');
  miniCards.forEach(card => {
    card.addEventListener('click', (event) => {
      // Se o clique for em um link dentro do card, não altera o scroll
      if (event.target.tagName.toLowerCase() === 'a') return;
      
      const cardRect = card.getBoundingClientRect();
      const clickX = event.clientX - cardRect.left;
      const halfWidth = cardRect.width / 2;
      // Define o deslocamento desejado (em pixels)
      const scrollOffset = 150;
      if (clickX < halfWidth) {
        // Clique na metade esquerda: rolar para a esquerda
        miniCardContainer.scrollBy({ left: -scrollOffset, behavior: 'smooth' });
      } else {
        // Clique na metade direita: rolar para a direita
        miniCardContainer.scrollBy({ left: scrollOffset, behavior: 'smooth' });
      }
    });
  });

  /* Swiper Initialization for the Team Section */
  const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    simulateTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Adjusts the height of the slides to maintain a 16:9 ratio
  const calculateHeight = () => {
    const swiperSlideElements = Array.from(document.querySelectorAll('.swiper .swiper-slide'));
    if (!swiperSlideElements.length) return;
    const width = swiperSlideElements[0].getBoundingClientRect().width;
    const height = Math.round(width / (16 / 9));
    swiperSlideElements.forEach(element => {
      element.style.height = `${height}px`;
    });
  };

  calculateHeight();
  window.addEventListener('resize', calculateHeight);

  /* Initialization of all modules */
  setInterval(rotateBanner, 7000);
  fetchCryptoPrices();
  setInterval(fetchCryptoPrices, 60000);
  getRandomFirstSection();
  getRandomSecondSection();
  getRandomGiveaway();
  startEnigmaCounter();
  initAdminModal();
  initContactModal();
  initEnigmaModal();
  initElementMovement();
  console.log("Futuristic site loaded!");
});
