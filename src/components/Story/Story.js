import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import './Story.scss';

function Story({ activeStory, nextStory, previousStory}) {
  const [startPos, setStartPos] = useState(null);

  const handleTouchStart = (e) => {
    setStartPos(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startPos === null) return;
    const currentPos = e.touches[0].clientX;
    const diff = startPos - currentPos;

    if (Math.abs(diff) > 50) {  // You can adjust this value to change the sensitivity
      if (diff > 0) {
        nextStory();
      } else {
        previousStory();
      }
      setStartPos(null);
    }
  };

  const handleClick = (e) => {
    const { clientX } = e;
    const { innerWidth } = window;

    if (clientX < innerWidth / 2) {
      previousStory();
    } else {
      nextStory();
    }
  };

  const createMarkup = (html) => {
    const sanitizedHTML = DOMPurify.sanitize(html, {
      ADD_ATTR: ['target', 'rel', 'onClick'],
      ADD_TAGS: ['a']
    });
    DOMPurify.addHook('afterSanitizeAttributes', function (node) {
      if ('target' in node) {
        node.setAttribute('target', '_blank');
        node.setAttribute('rel', 'noopener noreferrer');
        node.setAttribute('onClick', '{(e) => e.stopPropagation()}');
      }
    });

    return { __html: sanitizedHTML };
  }

  return (
    <div 
      className={`story story-${activeStory}`}
      id={`story-${activeStory}`} 
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      dangerouslySetInnerHTML={createMarkup(stories[activeStory].content)}
    >
    </div>
  );
}

const stories = [
  {
    id: 1,
    title: "Welcome",
    content: `
      <h2>poznajmy się</h2>
      <div class="header">
        <h1>Szlendak</h1>
        <div class="x"><i class="fa-solid fa-xmark"></i></div>
        <h1>Toucan</h1>
      </div>
      <div class="content">
        <h3>kilka słów o mnie </h3>
        <p>kliknij lub przesuń (jak na Insta) <i class="fa-solid fa-arrow-right"></i></p>
      </div>
    `
  },
  {
    id: 2,
    title: "Text",
    content: `
      <div class="text text-bottom">
       <p><span class="yellow">Hejka.</span> Jestem Paweł Szlendak. E-marketingowiec. Specjalista Google Ads. Pasjonat żeglarstwa i książek fantasy. Miłośnik gór i dobrej herbaty.</p>
      </div>
      <div class="text text-center">
      <div class="text-bg">
        <span>Zastanawiałem się co zawrzeć w krótkim pliku i stwierdziłem, że zamiast Canvy zaprezentuje się w ten sposób – tak samo jak przy tworzeniu reklam – warto się wyróżnić.</span>
      </div>
      </div>
      <div class="text text-top">
        <p>Cenię sobie oryginalność i indywidualizm w marketingu, a to portfolio jest idealnym przykładem mojego podejścia. <span class="yellow">Czyż nie jest to esencja efektywnej reklamy w Google Ads?</span></p>
      </div>
    `
  },
  {
    id: 3,
    title: "Case study",
    content: `
      <div class="header">
        <p>#Case study</p>
        <div class="x">x</div>
        <img class="logo" src="https://butiklorenzo.pl/img/assets/Logo-Lorenzo.svg" /> 
      </div>
      <div class="content anim-right">
        Zarządzając kontem sklepu internetowego Butik Lorenzo, zauważyłem, że mimo ogólnie wysokich wskaźników (ROAS: 20-25), ogólna kampania wykazywała tendencję do malejącego zwrotu z inwestycji. Czułem, że możemy osiągnąć więcej.
      </div>
      <div class="content anim-pulse">
        <p><i class="fa-solid fa-chart-gantt"></i><p>
      </div>
    `
  },
  {
    id: 4,
    title: "Case study",
    content: `
      <div class="header">
        <p>#Solution</p>
        <div class="x">x</div>
        <img class="logo" src="https://butiklorenzo.pl/img/assets/Logo-Lorenzo.svg" /> 
      </div>
      <div class="content anim-right">
      Wykorzystałem dynamiczny feed i kampanię Performance Max, aby obniżyć CTR i zwiększyć jakość ruchu. Jednocześnie, wsparłem remarketing za pomocą GetResponse, odzyskując porzucone koszyki. 
      </div>
      <div class="content anim-left">
        <p><span>Wszystko to miało na celu zwiększenie najważniejszego wskaźnika dla klienta - konwersji.</span><p>
      </div>
    `
  },
  {
    id: 5,
    title: "Case study",
    content: `
      <div class="header">
        <p>#Result</p>
        <div class="x">x</div>
        <img class="logo" src="https://butiklorenzo.pl/img/assets/Logo-Lorenzo.svg" /> 
      </div>
      <div class="content anim-right">
        <p><span>Dzięki tym zmianom, zwiększyłem wskaźnik ROAS dla Butik Lorenzo o 20-40% (ROAS: 25-35), w zależności od kategorii produktów.</span></p>
      </div>
      <div class="content anim-left">
        To jest to, co nazywam skutecznym zarządzaniem kampanią! 
      </div>
      <div class="content content-ico">
        🥳
      </div>
    `
  },
  {
    id: 6,
    title: "Ja i analiza",
    content: `
      <div class="content anim-left">
        <p><span>jestem ukrytym miłośnikiem tabelek i wykresów.</span></p>
        <p>na moim biurku znajduje się podręcznik do statystyki 😅</p>
      </div>
      <div class="content anim-right yellow">
        nie straszna mi jest analiza danych i tworzenie raportów, dlatego też... 
      </div>
    `
  },
  {
    id: 7,
    title: "Ja i analiza",
    content: `
      <div class="content anim-left">
        Podczas współpracy z agencją Pollyart stworzyłem narzędzie wykorzystujące App Script oraz Looker (Google Data Studio) do tworzenia automatycznych i personalizowanych raportów dla klientów.
      </div>
      <div class="icons">
        <img class="icon" src="https://seeklogo.com/images/G/google-looker-logo-B27BD25E4E-seeklogo.com.png"/>
        <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/768px-Google_Apps_Script.svg.png"/>
      </div>
      <div class="content anim-right yellow">
        Dokładnie to samo narzędzie pomagało mi w codziennej pracy — tworzyłem dodatkowe wykresy, wskaźniki i alerty, które były pomocne do efektywnej optymalizacji kampaniami.
      </div>
    `
  },
  {
    id: 8,
    title: "Case study",
    content: `
      <div class="header">
        <p>#Problem</p>
        <div class="x">x</div>
        Mały budżet 
      </div>
      <div class="content anim-right">
        <p>Klient z lokalnym biznesem medycznym i małym budżetem reklamowym (150 zł miesięcznie) chciał pojawiać się na pierwszym miejscu w wynikach wyszukiwania (a kto by nie chciał?). Niestety, dotychczasowa kampania była zbyt ogólna i szybko wyprzedziła ją konkurencja.<p>
      </div>
      <div class="content anim-left">
        <p><span>Damy radę :)</span><p>
      </div>
    `
  },
  {
    id: 9,
    title: "Ja i analiza",
    content: `
      <div class="content anim-right">
      Zastosowałem Single Keyword Ad Groups (SKAG) do zoptymalizowania kampanii. Zapewniło to większą kontrolę nad słowami kluczowymi, co przyczyniło się do zmniejszenia CTR.
      </div>
      <div class="icons">
        <img class="icon" src="https://i.ibb.co/0JrMthP/Zrzut-ekranu-2023-06-14-o-06-06-39.png"/>
      </div>
      <div class="content anim-right yellow">
      <p>Dodatkowo, zaprojektowałem zmiany na stronie docelowej, aby ułatwić klientom konwersję i poprawić śledzenie w Google Analytics. <b>Efekt?</b> CTR spadło znacząco, ale klient bardzo zadowolony.</p>
      </div>
    `
  },
  {
    id: 10,
    title: "Ja i analiza",
    content: `
      <div class="content anim-left">
        Przez ostatni okres  zarządzałem z sukcesami ponad 30 kontami klientów z różnorodnych branż: medyczna, ecommerce, aplikacja mobilna, meble, edukacja, budownictwo i wiele innych.   
      </div>
      <div class="icons">
        <i class="fa-solid fa-suitcase-medical"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-brands fa-app-store-ios"></i>
        <i class="fa-solid fa-chair"></i>
        <i class="fa-solid fa-user-graduate"></i>
        <i class="fa-solid fa-person-digging"></i>
        <i class="fa-solid fa-igloo"></i>
        <i class="fa-solid fa-file-invoice-dollar"></i>
        <i class="fa-solid fa-section"></i>
      </div>
      <div class="content anim-left">
        <p><span>Budżety tych kont zaczynały się od 100 zł i sięgały do 30.000 zł miesięcznie</span></p>
      </div>
    `
  },
  {
    id: 11,
    title: "Ja i analiza",
    content: `
      <div class="content yellow anim-left">
        Chętnie zajmuje się małym lokalnym biznesem, bo przecież nie każdy ma dużo pieniędzy na kampanie, a to właśnie dzięki sukcesom w marketingu można te budżety zwiększyć.
      </div>
      <div class="icons">
      <i class="fa-solid fa-comments-dollar"></i>
      </div>
      <div class="content anim-left">
        <p>Ale lubię też myśleć <span>out of the box</span>, tworzyć kampanie poza schematem i takich eksperymentów świetnie nadają się konta dużych biznesowych klientów.</p>
      </div>
    `
  },
  {
    id: 12,
    title: "Contact",
    content: `
      <div class="content header yellow">
        Potukamy razem marketing internetowy?
      </div>

      <div class="content anim-left">
        <p><span>Znajdź mnie na:</span></p>
      </div>

      <div class="icons">
        <div class="socials">
          <a href="https://www.linkedin.com/in/pawel-szlendak/" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick=""
          className="social-link"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <p>/in/pawel-szlendak</p>
        </div>

        <div class="socials">
          <a href="https://github.com/shlendakh" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick=""
          className="social-link"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <p>@shlendakh</p>
        </div>
      </div>
    `
  }
];

export default Story;