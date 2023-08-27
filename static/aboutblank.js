let inFrame;

try {
    inFrame = window !== top;
} catch (e) {
    inFrame = true;
}

// Cloaking Code
if (!inFrame) {
    const popup = open("about:blank", "_blank");
  if (!popup || popup.closed) {
  alert("Allow popups and redirects to hide this from showing up in your history.")
  } else {
        const doc = popup.document;
        const iframe = doc.createElement("iframe");
        const style = iframe.style;
        const link = doc.createElement("link");
        script.src = "/client.js";

        const name = localStorage.getItem("name") || "Inbox - RoundRock ISD Mail";
        const icon = localStorage.getItem("icon") || "/favicon.ico";
        
        doc.title = name;
        link.rel = "icon";
        link.href = icon;
        
      
        iframe.src = location.href
        style.position = "fixed";
        style.top = style.bottom = style.left = style.right = 0;
        style.border = style.outline = "none";
        style.width = style.height = "100%";

        doc.head.appendChild(link);
        doc.body.appendChild(iframe);
        location.replace("https://roundrockisd.schoology.com/home");
    }
}
