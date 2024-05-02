function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function waitAndClick(class_name, i) {
    console.log('clicking');
    console.log(class_name);
    var element = document.getElementsByClassName(class_name)[i];
    if (element) element.click();
    else setTimeout(waitAndClick, 1000, class_name, i);
    if (element) console.log("clicked");
}
function locatWinner(winner, people_list) {
    people_list[winner].style.backgroundColor = 'green';
    people_list[winner].scrollIntoView({
        behavior: 'smooth',  // 平滑滾動
        block: 'center',     // 垂直方向置中
        inline: 'center'
    });
}
function drawing(){
    var people_list = document.getElementsByClassName('xmjcpbm x1tlxs6b x1g8br2z x1gn5b1j x230xth x9f619 xzsf02u x1rg5ohu xdj266r x11i5rnm xat24cr x1mh8g0r x193iq5w x1mzt3pk x1n2onr6 xeaf4i8 x13faqbe');
    var winner = getRandom(0, people_list.length - 1);
    locatWinner(winner, people_list);
}
function clickViewAllButtons() {
    view_all_button = document.getElementsByClassName('x1i10hfl xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1a2a7pz x6s0dn4 xi81zsa x1iyjqo2 xs83m0k xsyo7zv xt0b8zv');
    if (view_all_button.length > 0) {
        Array.from(view_all_button).forEach(element => element.click());
        setTimeout(clickViewAllButtons, 10000);
    }
    else drawing();
}

console.log('content.js');
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.action !== "start") return;

    var comment_options = 'x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz';
    waitAndClick(comment_options, 0);

    var view_all_button = 'x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n xe8uvvx x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz xjyslct x9f619 x1ypdohk x78zum5 x1q0g3np x2lah0s xnqzcj9 x1gh759c xdj266r xat24cr x1344otq x1de53dj xz9dl7a xsag5q8 x1n2onr6 x16tdsg8 x1ja2u2z x6s0dn4';
    waitAndClick(view_all_button, 2);

    var attempts = 0;
    var max_attempts = 10;



    clickViewAllButtons();

});
