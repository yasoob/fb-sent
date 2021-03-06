// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
  //console.log(JSON.stringify(details));
  var headers = details.requestHeaders,
  blockingResponse = {};

  // Each header parameter is stored in an array. Since Chrome
  // makes no guarantee about the contents/order of this array,
  // you'll have to iterate through it to find for the
  // 'User-Agent' element
  for( var i = 0, l = headers.length; i < l; ++i ) {
    if( headers[i].name == 'User-Agent' ) {
      headers[i].value = '>>> Your new user agent string here <<<';
      console.log(headers[i].value);
      break;
    }
    // If you want to modify other headers, this is the place to
    // do it. Either remove the 'break;' statement and add in more
    // conditionals or use a 'switch' statement on 'headers[i].name'
  }
  
  blockingResponse.requestHeaders = headers;
  return blockingResponse;
},
{urls: [ "<all_urls>" ]},['requestHeaders','blocking']);


