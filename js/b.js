var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

generateKeyboard(keys,hash);

listenToUser(hash);

function getItemFromLocalStorage(name){
    return JSON.parse(localStorage.getItem((name)||'null'));
}
function saveItemToLocalStorage(name){
    return localStorage.setItem(name,JSON.stringify(hash));
}
function tag(tagName){
    return document.createElement(tagName);
}
function createButton(id){
    var buttonNode = tag('button');
    buttonNode.textContent = '编辑';
    buttonNode.id = id;
    buttonNode.onclick = function(press) {
        var x = prompt('请输入一个网址：');
        var img2 = press.target.previousSibling;
        var key = press.target.id;
        console.log(key)
        hash[key] = x;
        console.log(hash[key])
        img2.src = 'https://' + x + '/favicon.ico';
        console.log(img2.src)
        img2.onerror = function(error) {
            error.target.src = './img/null.png';
        }
        saveItemToLocalStorage('save');
    }
    return buttonNode;
}
function createImg(domain){
    var image = tag('img');
    if(domain){
        image.src = 'http://'+domain + '/favicon.ico';
    }else{
        image.src = './img/null.png';
    }
    image.onerror = function(error) {
        error.target.src = './img/null.png';
    }
    return image;
}
function init(){
    var keys = {
        '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
        '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
        '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
        'length': 3
    }
    var hash = {'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'
    }
    var hashInlocalStorage = getItemFromLocalStorage('save');
    if(hashInlocalStorage){
        hash = hashInlocalStorage;
    }
    return{
        keys:keys,
        hash:hash
    };
}

function generateKeyboard(keys,hash){
    for(var i = 0; i < keys.length; i++){
        var div1 = tag('div');
        main.appendChild(div1);
        var rows = keys[i];
        for(var j = 0; j < rows.length; j++){
            var button = createButton(rows[j]);
    
            var image = createImg(hash[rows[j]]);
    
            var kbds = tag('kbd');
            kbds.textContent = rows[j];
            kbds.appendChild(image);
            kbds.appendChild(button);
    
            div1.appendChild(kbds);
        }
    }
}

function listenToUser(hash){
    document.onkeypress = function(press){
        var key = press['key'];
        var website = hash[key];
        window.open('http://' +website,'_blank');
    }
}