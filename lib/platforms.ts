export const platforms = [
 {slug:'googlehelp',name:'Google',logoUrl:'https://www.google.com/favicon.ico',recoveryUrl:'https://accounts.google.com/signin/recovery',description:'Account recovery and security support'},
 {slug:'microsofthelp',name:'Microsoft',logoUrl:'https://www.microsoft.com/favicon.ico',recoveryUrl:'https://account.live.com/password/reset',description:'Account recovery and security support'},
 {slug:'discordhelp',name:'Discord',logoUrl:'https://discord.com/assets/favicon.ico',recoveryUrl:'https://support.discord.com/hc/en-us/requests/new',description:'Account and access support'},
 {slug:'facebookhelp',name:'Facebook',logoUrl:'https://www.facebook.com/favicon.ico',recoveryUrl:'https://www.facebook.com/login/identify/',description:'Account recovery and security support'},
 {slug:'xhelp',name:'X',logoUrl:'https://abs.twimg.com/favicons/twitter.3.ico',recoveryUrl:'https://help.x.com/en/forms/account-access',description:'Account access and security support'}
];
export function getPlatform(slug:string){return platforms.find(p=>p.slug===slug)}
