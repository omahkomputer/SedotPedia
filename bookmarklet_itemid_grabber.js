createItemGrabberModal = function() {
    if (document.getElementById('zincAsins') == null) {
        var modal = document.createElement("div");
        modal.innerHTML = 'PriceYak Item GrabberLoad items from pageClear ItemsHelp';
        document.getElementsByTagName('body')[0].appendChild(modal);
        storedAsins = window.localStorage.getItem('zincStoredAsins');
        if (storedAsins != null) {
            setAsins(JSON.parse(storedAsins));
        }
    }
}
setAsins = function(allAsins) {
    window.localStorage.setItem('zincStoredAsins', JSON.stringify(allAsins));
    document.querySelector('#allAsins').textContent = Object.keys(allAsins).join('\n');
}
updateAsins = function(newAsins) {
        allAsins = {};
        storedAsins = window.localStorage.getItem('zincStoredAsins');
        if (storedAsins != null) {
            allAsins = JSON.parse(storedAsins);
        }
        newAsinArray = Object.keys(newAsins);
        for (i = 0; i 0 addAsinsFromPage = function() {
                is_search_page = document.querySelectorAll('.s-result-item').length > 0;
                is_single_page = document.querySelector('#ASIN');
                is_best_seller_page = document.querySelectorAll('.zg_title a').length > 0 newAsins = {}
                if (is_search_page) {
                    els = document.querySelectorAll('.s-result-item');
                    for (i = 0; i 0) {
                        addWalmartItemNumbersFromPage();
                    } else {
                        addAsinsFromPage();
                    }
                }
                createItemGrabberModal();
