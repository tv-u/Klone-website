(() => {
  "use strict";

  if (window.__KLONE_ADSTERRA_LOADED__) return;
  window.__KLONE_ADSTERRA_LOADED__ = true;

  const offers = [
    {
      name: "Sponsored Offer 1",
      url: "https://asiafilm.org/4/c2b46070b44982014166acafd6074c3d"
    },
    {
      name: "Sponsored Offer 2",
      url: "https://asiafilm.org/4/3711015d24018cf89ccb362976c4a2e0"
    },
    {
      name: "Sponsored Offer 3",
      url: "https://asiafilm.org/4/dc01c1237bd130c5ef9bcfef4f0928ed"
    }
  ];

  function mount() {
    if (document.getElementById("klone-sponsored-widget")) return;

    const style = document.createElement("style");
    style.textContent = `
      #klone-sponsored-widget {
        position:fixed;
        right:12px;
        bottom:14px;
        z-index:2147483000;
        font-family:Arial,sans-serif;
      }
      #klone-ad-launcher {
        background:#f07808;
        color:#fff;
        border:0;
        border-radius:24px;
        padding:12px 17px;
        font-size:13px;
        font-weight:700;
        cursor:pointer;
        box-shadow:0 3px 15px #0005;
      }
      #klone-ad-panel {
        display:none;
        width:min(290px,calc(100vw - 28px));
        background:#171717;
        color:white;
        border:1px solid #444;
        border-radius:13px;
        padding:14px;
        margin-bottom:10px;
        box-shadow:0 5px 25px #0008;
      }
      #klone-ad-panel.open { display:block; }
      #klone-ad-panel h3 {
        margin:0 0 5px;
        font-size:16px;
      }
      #klone-ad-panel p {
        font-size:11px;
        color:#bbb;
        margin:5px 0 12px;
      }
      .klone-ad-link {
        display:block;
        text-align:center;
        text-decoration:none;
        background:#292929;
        color:white;
        padding:12px;
        border-radius:8px;
        margin-top:8px;
        font-size:13px;
      }
      .klone-ad-link:hover {
        background:#f07808;
      }
      #klone-ad-close {
        float:right;
        background:none;
        color:white;
        border:0;
        font-size:20px;
        cursor:pointer;
      }
    `;
    document.head.appendChild(style);

    const root = document.createElement("div");
    root.id = "klone-sponsored-widget";

    const panel = document.createElement("div");
    panel.id = "klone-ad-panel";
    panel.setAttribute("aria-label", "Sponsored offers");

    const heading = document.createElement("h3");
    heading.textContent = "Sponsored Offers";

    const close = document.createElement("button");
    close.id = "klone-ad-close";
    close.textContent = "×";
    close.setAttribute("aria-label", "Close offers");

    const info = document.createElement("p");
    info.textContent =
      "Optional advertising links. Select an offer to visit the advertiser.";

    panel.append(close, heading, info);

    offers.forEach(offer => {
      const a = document.createElement("a");
      a.className = "klone-ad-link";
      a.href = offer.url;
      a.target = "_blank";
      a.rel = "sponsored nofollow noopener noreferrer";
      a.textContent = offer.name;
      panel.appendChild(a);
    });

    const launcher = document.createElement("button");
    launcher.id = "klone-ad-launcher";
    launcher.textContent = "Sponsored Offers";
    launcher.setAttribute("aria-expanded", "false");

    launcher.addEventListener("click", () => {
      const open = panel.classList.toggle("open");
      launcher.setAttribute("aria-expanded", String(open));
    });

    close.addEventListener("click", () => {
      panel.classList.remove("open");
      launcher.setAttribute("aria-expanded", "false");
    });

    root.append(panel, launcher);
    document.body.appendChild(root);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, {once:true});
  } else {
    mount();
  }
})();
