function AssetsManager(){
    this.aCarregar = 0;
    this.carregadas = 0;
    this.assets = {};
}

AssetsManager.prototype.loadImage = function(key, url){
    console.log (`Carregando imagem  ${url}...`)
    this.aCarregar++;
    var imagem = new Image();
    imagem.addEventListener('load',function(){
        console.log(`Imagem ${key}: ${url} carregada`);
        this.carregadas++;
    });
    imagem.src =url;
    this.assets[key] = imagem;
}

AssetsManager.prototype.img = function(key){
    return this.assets[key];
}
