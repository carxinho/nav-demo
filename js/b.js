var keys = {
    '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length': 3
}
var hash = {'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'
}
var hashInlocalStorage = JSON.parse(localStorage.getItem('save'||'null'));
if(hashInlocalStorage){
    hash = hashInlocalStorage;
}
for(var i =0;i< keys.length;i++){
    div1 = document.createElement('div');
    main.appendChild(div1);
    var rows = keys[i];
    for(var j =0;j <rows.length;j++){
        kbds = document.createElement('kbd');
        kbds.textContent = rows[j];
        buttons = document.createElement('button');
        buttons.textContent = 'E';
        buttons.id = rows[j];
        buttons.onclick = function(press) {
            x = prompt('请输入一个网址：')
            key = press.target.id;
            hash[key] = x;
            localStorage.setItem('save',JSON.stringify(hash));
        }
        kbds.appendChild(buttons);
        div1.appendChild(kbds);
    }
}
document.onkeypress = function(press){
    key = press['key'];
    website = hash[key];
    window.open('http://' +website,'_blank');
}