cookieBanner.activate({
    preferences: () => {
        //Insert your preferences tracking code here
    },
    statistics: () => {
        //Insert your statistics tracking code here
        // e.g. posthog init
    },  
    marketing: () => {
        //Insert your marketing tracking code here
        // e.g. Facebook Pixel
    },
    cookiePolicyURL: "" //your cookie policy URL
});