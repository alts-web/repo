let inFrame;

try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}

// Cloaking Code
if (!inFrame) {
  const popup = window.open("about:blank", "_blank");
  if (!popup || popup.closed) {
  } else {
    const doc = popup.document;
    const iframe = doc.createElement("iframe");
    const style = iframe.style;
    const link = doc.createElement("link");
    const script = doc.createElement("script");

    const name = localStorage.getItem("name") || "Inbox - RoundRock ISD Mail";
    const icon = localStorage.getItem("icon") || "/favicon.ico";

    doc.title = name;
    link.rel = "icon";
    link.href = icon;

    iframe.src = location.href;
    style.position = "fixed";
    style.top = style.bottom = style.left = style.right = 0;
    style.border = style.outline = "none";
    style.width = style.height = "100%";

    doc.head.appendChild(link);
    doc.body.appendChild(iframe);

    // Wait for the client.js code to finish executing before redirecting
    function redirectToURL() {
      location.replace("https://roundrockisd.schoology.com/home");
    }

    // Call the client.js code and pass the redirectToURL function as a callback
    script.src = "/client.js";
    script.onload = redirectToURL;

    doc.body.appendChild(script);
  }
}
