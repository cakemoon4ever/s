// Espera o DOM estar carregado antes de iniciar
document.addEventListener("DOMContentLoaded", () => {
  /* SPLASH MODAL: Typewriter Effect */
  const splashModal = document.getElementById("splashModal");
  const hackerTextElem = document.getElementById("hacker-text");
  const splashText = "Cakemoon is 4life\nEarn passive income in $Cake\na Kader Effect token";
  let index = 0;
  const typeDelay = 50; // Tempo por caractere (ms)
  const fadeDelay = 5000; // Tempo adicional para o fade-out (5 segundos)

  function typeText() {
    if (index < splashText.length) {
      if (splashText[index] === "\n") {
        hackerTextElem.innerHTML += "<br>";
      } else {
        hackerTextElem.innerHTML += splashText[index];
      }
      index++;
      setTimeout(typeText, typeDelay);
    }
  }
  typeText();

  // Calcula o tempo total e inicia o fade-out do splash modal
  const totalDuration = splashText.length * typeDelay + fadeDelay;
  splashModal.style.transition = `opacity ${totalDuration}ms linear`;
  splashModal.style.pointerEvents = "none";
  splashModal.style.opacity = "0";
  setTimeout(() => {
    splashModal.style.display = "none";
  }, totalDuration);

/* Crypto Prices Ticker */
async function fetchCryptoPrices() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana&vs_currencies=usd&include_24hr_change=true"
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
      
    // Adiciona um link para "Buy CAKEMOON"
    prices += ` | <a href="https://t.me/maestro?start=0x893535ed1b5c6969e62a10babfed4f5ff8373278-rfdtk" target="_blank" style="color: #00ffff; font-weight: bold; text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;">Buy CAKEMOON</a>`;

    document.getElementById("ticker-text").innerHTML = prices;
  } catch (error) {
    document.getElementById("ticker-text").textContent = "Failed to load crypto prices.";
    console.error("Error fetching crypto prices:", error);
  }
}


  /* Dynamic Content */
  function getRandomFirstSection() {
    const versions = [
      {
        title: "Introducing the Community Favorite: Cakemoon ($MOON)",
        content: `
          <p>What started as a test token on the Binance Smart Chain by the Cakemoon team has blossomed into a cherished community project. Today, $MOON is the flagship token with rewards in <strong>$Cake 4life</strong> and innovative tokenomics.</p><br>
          <p>With a staked treasury and daily buybacks, our system ensures sustainable growth and rewards for holders.</p><br>
          <p>Join the revolution and be part of this incredible movement!</p>
        `
      },
      {
        title: "Discover the Cakemoon ($MOON) Revolution",
        content: `
          <p>The journey began with a test token on BSC and quickly became a community favorite. Today, $MOON leads the way with a unique rewards system in $Cake 4life and cutting-edge tokenomics.</p><br>
          <p>With daily buybacks and a staked treasury, Cakemoon is reshaping blockchain interaction.</p><br>
          <p>Be a part of this revolution!</p>
        `
      },
      {
        title: "Get to Know Cakemoon ($MOON)",
        content: `
          <p>Cakemoon evolved from a simple test token into a beloved flagship project on BSC. It offers innovative tokenomics, daily rewards in $Cake, and sustainable growth.</p><br>
          <p>Join us and experience a token that rewards you for life!</p>
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
        title: "Ready to Join the $MOON Revolution? 🚀",
        content: `
          <p>Step into the future with $MOON—the token that’s taking the BSC by storm! Powered by innovation, Cakemoon delivers rewards in $Cake 4life along with unmatched tokenomics.</p>
          <button class="button-highlightgame" onclick="window.open('#', '_blank')">Buy $MOON Now</button>
          <button class="button" onclick="window.open('https://t.me/cakemoon', '_blank')">Join Telegram</button>
          <p>Join early to unlock exclusive rewards—the future of crypto is here!</p>
        `
      },
      {
        title: "Be Part of the Neon Wave 🌟",
        content: `
          <p>$MOON is more than a token—it’s a movement. Embrace advanced trading tools and a community-driven ethos. Experience rewards in $Cake 4life and be part of this neon revolution!</p>
          <button class="button-highlightgame" onclick="window.open('#', '_blank')">Buy $MOON Now</button>
          <button class="button" onclick="window.open('https://t.me/cakemoon', '_blank')">Join Telegram</button>
          <p>Unlock exclusive benefits and be a key player in the Cakemoon movement!</p>
        `
      },
      {
        title: "Experience the Neon Future with $MOON",
        content: `
          <p>Unlock a world of possibilities with $MOON. Enjoy exclusive tools, sustainable rewards in $Cake 4life, and a secure, community-driven platform that sets the crypto standard.</p>
          <button class="button-highlightgame" onclick="window.open('#', '_blank')">Buy $MOON Now</button>
          <button class="button" onclick="window.open('https://t.me/cakemoon', '_blank')">Join Telegram</button>
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
          <p>The exclusive Cakemoon Giveaway kicks off once the token bonds to Raydium! 0.5% (5M) of the supply will find a new holder.<br>
          Every purchase over $50 counts, and winners must hold tokens for at least 48 hours.</p>
        `
      },
      {
        title: "Giveaway Announcement",
        content: `
          <p>After bonding $MOON to Raydium, an exclusive Giveaway will be sponsored! 0.5% (5M) of the supply goes to a new holder.<br>
          Purchases over $50 count—hold your tokens for 48 hours to be eligible.</p>
        `
      },
      {
        title: "Giveaway Announcement",
        content: `
          <p>Get ready for an exciting Giveaway once $MOON bonds to Raydium! 0.5% (5M) of the supply is up for grabs.<br>
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

  /* Update Enigma Modal Text with dynamic phrases about $MOON and mystery */
  function updateEnigmaModalText() {
    const phrases = [
      "Every moment, Cakemoon unveils a new secret...",
      "Unlock the neon mystery with $MOON.",
      "Step into the future: Cakemoon awaits.",
      "In the electric glow, $MOON sparks innovation.",
      "Discover the vibrant pulse of Cakemoon.",
      "Cakemoon: where crypto meets enigma.",
      "The blockchain mystery deepens with $MOON.",
      "Neon dreams and digital secrets: that's $MOON.",
      "Embrace the unknown with Cakemoon.",
      "$MOON shines in the heart of BSC.",
      "Every flicker hides a riddle...",
      "Can you decipher the enigma of the night?",
      "Shadows and neon: a puzzle without a solution.",
      "The night whispers secrets beyond the ordinary.",
      "In the dance of light and darkness, mysteries abound.",
      "Dive deep into the digital enigma that is Cakemoon.",
      "A universe of secrets awaits within Cakemoon.",
      "Every byte hides a brilliant mystery.",
      "Neon lights illuminate the path to $MOON.",
      "Unlock the futuristic code, one glow at a time.",
      "Where crypto and curiosity collide: $MOON.",
      "In the realm of neon, every moment is a revelation.",
      "Follow the luminous trail of Cakemoon.",
      "Mystery dances in every pixel of $MOON.",
      "Let your mind wander through the neon labyrinth.",
      "Every spark of $MOON ignites a thousand questions.",
      "Secrets flow like electric currents through $MOON.",
      "Embrace the chaos of the digital cosmos with $MOON.",
      "The future is written in neon and coded in $MOON.",
      "Each flash of light reveals a new puzzle.",
      "Step beyond the ordinary—$MOON awaits your discovery.",
      "The neon enigma of Cakemoon beckons the brave.",
      "Mysteries unfold in the rhythm of digital beats.",
      "Let the neon night guide your quest for truth in $MOON.",
      "In every shadow, a secret of $MOON is born."
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
      const scrollOffset = 150;
      if (clickX < halfWidth) {
        miniCardContainer.scrollBy({ left: -scrollOffset, behavior: 'smooth' });
      } else {
        miniCardContainer.scrollBy({ left: scrollOffset, behavior: 'smooth' });
      }
    });
  });

  /* Initialization of all modules */
  // Removemos banner rotativo, pois não é desejado.
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

/* Initialization a busca da carteira queimada */
// Substitua pela sua API Key do BscScan
    const apiKey = 'NABPG1J8DPTD6NMNU4WZIT4GCB258666UQ';

    // Endereço do contrato do token e da carteira (no caso, a "dead address")
    const contractAddress = '0x893535ED1b5C6969E62a10bABfED4F5fF8373278';
    const walletAddress   = '0x000000000000000000000000000000000000dead';

    // URLs da API para buscar o saldo e o total supply
    const apiURLBalance = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${walletAddress}&tag=latest&apikey=${apiKey}`;
    const apiURLSupply  = `https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${apiKey}`;

    // Faz as duas requisições simultaneamente
    Promise.all([
      fetch(apiURLBalance).then(response => response.json()),
      fetch(apiURLSupply).then(response => response.json())
    ])
    .then(([balanceData, supplyData]) => {
      if (balanceData.status === "1" && supplyData.status === "1") {
        // O token possui 9 decimais; portanto os valores retornados estão na menor unidade.
        // Dividindo por 1e9 obtemos o valor "legível".
        const rawBalance = balanceData.result;
        const rawSupply  = supplyData.result;

        const balance = parseFloat(rawBalance) / 1e9;
        const supply  = parseFloat(rawSupply) / 1e9;

        // Formata o saldo para exibir em inglês com duas casas decimais.
        const formattedBalance = balance.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });

        // Calcula o percentual que o saldo representa do total supply
        const percentage = (balance / supply) * 100;
        const formattedPercentage = percentage.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });

        // Exibe o resultado: saldo formatado e percentual
        document.getElementById('balance').innerText =
          `${formattedBalance} tokens (${formattedPercentage}% do total supply)`;
      } else {
        // Exibe a mensagem de erro caso a API retorne algum problema
        document.getElementById('balance').innerText =
          'Erro: ' + (balanceData.message || supplyData.message);
      }
    })
    .catch(error => {
      document.getElementById('balance').innerText = 'Erro na requisição: ' + error;
    });
