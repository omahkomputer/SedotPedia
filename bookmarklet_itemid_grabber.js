createItemGrabberModal = function() {
  if (document.getElementById('zincAsins')==null){
    var modal = document.createElement("div");
    modal.innerHTML = '<div id="zincAsins" style="background-color:black;position:fixed;top:50px;right:20px;z-index:9999;padding:5px;width:200px"><p style="color:white"><a style="font-size:14px;" target="_blank" href="https://priceyak.com">PriceYak</a> Item Grabber</p><textarea id="allAsins" style="width:190px;height:400px"></textarea><button style="margin:5px 0" onclick="loadItemNumbersFromPage()">Load items from page</button><button style="margin:5px 0" onclick="clearAsins()">Clear Items</button><a style="margin-left:5px;" target="_blank" href="http://support.priceyak.com/hc/en-us/articles/204397545">Help</a></div>';
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
  for (i=0; i<newasinarray.length; i++)="" {="" asin="newAsinArray[i];" allasins[asin]="1;" }="" setasins(allasins);="" clearasins="function(){" setasins({});="" document.queryselectorall('.zg_itemimmersion').length=""> 0

addAsinsFromPage = function() {
  is_search_page = document.querySelectorAll('.s-result-item').length &gt; 0;
  is_single_page = document.querySelector('#ASIN');
  is_best_seller_page = document.querySelectorAll('.zg_title a').length &gt; 0
  newAsins = {}

  if (is_search_page){
    els = document.querySelectorAll('.s-result-item');
    for (i=0; i<els.length; i++){="" el="els[i];" newasins[el.getattribute('data-asin')]="1;" }="" else="" if="" (is_single_page){="" newasins[document.queryselector('#asin').getattribute('value')]="1;" (is_best_seller_page){="" els="document.querySelectorAll('.zg_title" a')="" for="" (i="0;" i<els.length;="" asin="el.href.match('[A-Z0-9]{10}')" newasins[asin]="1;" console.log("new="" asins:="" "="" +="" json.stringify(newasins));="" updateasins(newasins);="" addwalmartitemnumbersfrompage="function()" {="" newitems="{};" matches="document.body.innerHTML.match(/&quot;usId&quot;:&quot;\d{8}&quot;/g);" (matches="" !="null)" function(e,="" t)="" e[t.slice(-9,="" -1)]="1;" return="" e;="" },="" );="" e[t.slice(-8)]="1;" items:="" json.stringify(newitems));="" updateasins(newitems);="" loaditemnumbersfrompage="function()" (window.location.href.indexof('walmart')=""> 0) {
    addWalmartItemNumbersFromPage();
  }
  else {
    addAsinsFromPage();
  }
}

createItemGrabberModal();