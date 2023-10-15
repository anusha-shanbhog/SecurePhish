// Create a payload object with the URL
var url = location.href;
let domain_name = url.split("/", 3)
let full_domain_name = domain_name[0] + "//" + domain_name[2]
// console.log(full_domain_name)


let start = Date.now();
chrome.storage.local.get(full_domain_name).then(result => {
    // console.log(result[full_domain_name]);
    if (result[full_domain_name] == "whitelist") {
        // alert("Website in Whitelist");
    }
    else if (result[full_domain_name] == "blacklist") {
        if (confirm("SecurePhish Chrome Extension: Black listed website, do you want to remove it from blacklist?")) {
            chrome.storage.local.set({ [full_domain_name]: 'whitelist' });
            window.location.href = url;
        }
        else {
            history.back();
        }
    }
    else {
        if (url.includes("https://secure-phish.vercel.app", 0) != true) {
            fetch("https://securephish.onrender.com/Predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url: url }),
            })
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error("Failed to fetch data");
                    }
                })
                .then((record) => {
                    const detectionResult = record.detectionResult; // Assuming 1 indicates Phishing and 0 indicates Safe

                    // Display the result on the page

                    if (detectionResult == 1) {
                        if (confirm("SecurePhish Chrome Extension: We have found a phishing website! Would you like to blacklist this website?\nOn confirm, you will be redirected to our website.")) {
                            chrome.storage.local.set({ [full_domain_name]: 'blacklist' });
                            location.href = 'https://secure-phish.vercel.app/home?url=' + url;
                        }
                        else {
                            chrome.storage.local.set({ [full_domain_name]: 'whitelist' });
                            window.location.href = url;
                        }
                    } else {
                        chrome.storage.local.set({ [full_domain_name]: 'whitelist' });
                        alert("Website is ok!");
                    }
                })
                .catch(() => {
                    alert("SecurePhish Chrome Extension: Oops! Looks like we have an error!")
                });
        }
    }
    let timeTaken = Date.now() - start;
    console.log("Total time taken : " + timeTaken + " milliseconds");
});

// chrome.storage.local.clear()