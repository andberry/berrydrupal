export const sendGaEvents = () => {

    if (typeof window.ga === 'function') {

        // console.log('sendGaEvents: ga found!');
        window.dataLayer = window.dataLayer || [];
        /*
            tructure of object to send: 'send', 'event', 'event category', 'event action', 'event label'
        */

        /*
            Selecting a region in Enviro Depot search page
        */
        const findDepotRegionSelect = document.querySelector('.view-enviro-depots #edit-field-region-target-id');
        if (findDepotRegionSelect) {
            findDepotRegionSelect.addEventListener('change', (event) => {
                const selectedRegion = event.target.options[event.target.selectedIndex].innerText;

                console.log('Send GA events for Find a Depot Region select: Find a Depot, Click ' + selectedRegion);
                // window.ga('send', 'event', 'Find a Depot', 'Click', selectedRegion);

                window.dataLayer.push({
                    'event': 'eventTracking',
                    'category': 'Find a Depot',
                    'action': 'Click',
                    'label': '' + selectedRegion
                });
            });
        }




        /*
            Clicking on an AddThis button
        */
        const currentUrl = window.location.href;
        const socialShareButtons = document.querySelectorAll('.addtoany_list a[class^="a2a_button"]');
        for (const item of Array.from(socialShareButtons)) {
            item.addEventListener('click', (event) => {
                let socialName = event.currentTarget.classList[0].slice(11);
                socialName = socialName[0].toUpperCase() + socialName.slice(1);

                console.log('Send GA events for AddThis: ' + socialName + ', ' + currentUrl);
                // window.ga('send', 'event', 'AddThis', 'Social Share Button clicked', currentUrl);

                window.dataLayer.push({
                    'event': 'eventTracking',
                    'category': 'AddThis',
                    'action': socialName,
                    'label': currentUrl
                });
            })
        }


        /*
            Add this Other share buttons elements are created at the moment user hover/click on the red button,
            it's hard to assign them an event listener
        */
        /*
        const socialShareOthersButtons = document.querySelectorAll('.addtoany_share');
        console.log(socialShareOthersButtons);
        for (const item of Array.from(socialShareOthersButtons)) {
            item.addEventListener('hover', () => {
                console.log('hover on share button');
                const socialShareButtonsOthers = document.querySelectorAll('.a2a_i');
                for (const item of Array.from(socialShareButtonsOthers)) {
                    item.addEventListener('click', (event) => {
                        console.log(event.currentTarget);
                    });
                }
            });
        }
        */
    } else {
        // console.log('sendGaEvents: ga not found!');
    }
}
