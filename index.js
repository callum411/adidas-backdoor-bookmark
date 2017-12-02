javascript: (function() {
    var RegionURL = 'https://www.adidas.co.uk/on/demandware.store/Sites-adidas-GB-Site/en_GB';

    var getSKU = prompt('Enter the SKU.');
    var getSize = prompt('Enter the size.');

    if (!getSKU || !getSize) {
        return;
    } else {
      var ActualSize = '';
      switch (getSize) {
        case "3.5":
          ActualSize = "530";
          break;
        case "4":
          RegionURL.includes('GB') === true ? ActualSize = '540' : ActualSize = '530';
          break;
        case "4.5":
          RegionURL.includes('GB') === true ? ActualSize = '550' : ActualSize = '540';
          break;
        case "5":
          RegionURL.includes('GB') === true ? ActualSize = '560' : ActualSize = '550';
          break;
        case "5.5":
          RegionURL.includes('GB') === true ? ActualSize = '570' : ActualSize = '560';
          break;
        case "6":
          RegionURL.includes('GB') === true ? ActualSize = '580' : ActualSize = '570';
          break;
        case "6.5":
          RegionURL.includes('GB') === true ? ActualSize = '590' : ActualSize = '580';
          break;
        case "7":
          RegionURL.includes('GB') === true ? ActualSize = '600' : ActualSize = '590';
          break;
        case "7.5":
          RegionURL.includes('GB') === true ? ActualSize = '610' : ActualSize = '600';
          break;
        case "8":
          RegionURL.includes('GB') === true ? ActualSize = '620' : ActualSize = '610';
          break;
        case "8.5":
          RegionURL.includes('GB') === true ? ActualSize = '630' : ActualSize = '620';
          break;
        case "9":
          RegionURL.includes('GB') === true ? ActualSize = '640' : ActualSize = '630';
          break;
        case "9.5":
          RegionURL.includes('GB') === true ? ActualSize = '650' : ActualSize = '640';
          break;
        case "10":
          RegionURL.includes('GB') === true ? ActualSize = '660' : ActualSize = '650';
          break;
        case "10.5":
          RegionURL.includes('GB') === true ? ActualSize = '670' : ActualSize = '660';
          break;
        case "11":
          RegionURL.includes('GB') === true ? ActualSize = '680' : ActualSize = '670';
          break;
        case "11.5":
          RegionURL.includes('GB') === true ? ActualSize = '690' : ActualSize = '680';
          break;
        case "12":
          RegionURL.includes('GB') === true ? ActualSize = '700' : ActualSize = '690';
          break;
        case "12.5":
          RegionURL.includes('GB') === true ? ActualSize = '710' : ActualSize = '700';
          break;
        case "13":
          RegionURL.includes('GB') === true ? ActualSize = '720' : ActualSize = '710';
          break;
        case "13.5":
          RegionURL.includes('GB') === true ? ActualSize = '730' : ActualSize = '720';
          break;
        case "14":
          RegionURL.includes('GB') === true ? ActualSize = '740' : ActualSize = '730';
          break;
        case "14.5":
          RegionURL.includes('GB') === true ? ActualSize = '750' : ActualSize = '740';
          break;
        case "15":
          RegionURL.includes('GB') === true ? ActualSize = '760' : ActualSize = '750';
          break;
        case "15.5":
          RegionURL.includes('GB') === true ? ActualSize = '770' : ActualSize = '760';
          break;
        case "16":
          RegionURL.includes('GB') === true ? ActualSize = '780' : ActualSize = '770';
          break;
        case "16.5":
          RegionURL.includes('GB') === true ? ActualSize = '790' : ActualSize = '780';
          break;
        case "17":
          RegionURL.includes('GB') === true ? ActualSize = '800' : ActualSize = '790';
          break;
        case "17.5":
          RegionURL.includes('GB') === true ? ActualSize = '810' : ActualSize = '800';
          break;
        case "18":
          RegionURL.includes('GB') === true ? ActualSize = '820' : ActualSize = '810';
          break;
      }

      location.href = RegionURL + '/Cart-UpdateItems?qty_0=1&pid_0=%00' + getSKU + '_' + ActualSize + '%00';
    }
})();
