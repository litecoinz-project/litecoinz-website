var userLang = navigator.language || navigator.userLanguage;
if (userLang.substring(0,2) == 'es'){
    window.location.href = '/es';
}
if (userLang.substring(0,2) == 'en'){
    window.location.href = '/';
}