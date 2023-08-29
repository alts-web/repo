let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

// Cloaking Code
if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert("Allow popups and redirects to hide this from showing up in your history.")
    } else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")
        const script = doc.createElement("script")

        const name = localStorage.getItem("name") || "Inbox | RoundRock ISD Mail";
        const icon = localStorage.getItem("icon") || "/favicon.ico";
        
        doc.title = name;
        link.rel = "icon";
        link.href = icon;
        
        iframe.src = location.href
        script.src = "/client.js"
        style.position = "absolute" // Change from fixed to absolute
        style.top = "50px" // Adjust positioning to allow interaction with content underneath
        style.left = "50px"
        style.border = style.outline = "none"
        style.width = "80%" // Adjust size to allow interaction with content underneath
        style.height = "80%"

        doc.head.appendChild(link);
        doc.head.appendChild(script); // Add script element to head
        doc.body.appendChild(iframe)
        location.replace("https://roundrockisd.schoology.com")
    }
}
