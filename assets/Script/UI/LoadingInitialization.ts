// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingInitialization extends cc.Component {
    refAsset : cc.Asset;
    refAsset2 : cc.Asset;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log("LoadingInitialization.onLoad:",cc.assetManager.assets.count);

        let Loader:any = cc.loader;
        console.log("LoadingInitialization.onLoad2:",Object.keys(Loader._cache).length);
        //let url = "Atlas/atlas_ui_loading"; //th thay sprite trong scene den atlas dc tao ra boi texturepacker
        //kiem tra xem so luong resource co bi load them khong => khong thay doi
        let url = "Sprite/LargeTestImage1";
        //TH khi khong load texture truoc, ma next sang scene tiep theo co su dung texture trong 
        //sprite thi se mat nhieu thoi gian

        //TH load texture truoc thi se mat it thoi gian hon de next scene
        /*cc.resources.load(url,cc.Asset, (err,sf:cc.Asset)=>{
            if(err){
                console.log("err:",err);
                return;
            }
            console.log("sf:",(<any>sf)._uuid);
            sf.addRef();
            console.log("sf:",sf.refCount);
            //console.log("sf:",sf.getTexture().width);
            console.log("sf:",cc.assetManager.assets.count);
            let Loader:any = cc.loader;
            console.log("Loader:",typeof(Loader));
            
            var res= cc.assetManager.assets.get((<any>sf)._uuid);
            console.log("res:",res);
            console.log("sf:",Object.keys(Loader._cache).length);
            console.log("Loader._cache:",Loader._cache);
            this.refAsset = sf;
        });
        let url2 = "Sprite/LargeTestImage2";
        cc.resources.load(url2,cc.Asset, (err,sf:cc.Asset)=>{
            if(err){
                console.log("err:",err);
                return;
            }
            console.log("sf2:",(<any>sf)._uuid);
            sf.addRef();
            console.log("sf2:",sf.refCount);
            //console.log("sf2:",sf.getTexture().width);
            console.log("sf2:",cc.assetManager.assets.count);
            let Loader:any = cc.loader;
            console.log("Loader2:",typeof(Loader));
            
            var res= cc.assetManager.assets.get((<any>sf)._uuid);
            console.log("res2:",res);
            console.log("sf2:",Object.keys(Loader._cache).length);
            console.log("Loader._cache:",Loader._cache);
            this.refAsset2 = sf;
        });*/
    }

    onButtonClick(){
        cc.director.loadScene("TestScene");
        //cc.sys.garbageCollect();
    }
    start () {

    }
    onDestroy(){
        //comment de thu truong hop du tham chieu sang cac sence khac xem asset co bi xoa khong ?
        //this.refAsset.decRef();
        //this.refAsset2.decRef();
        //cc.assetManager.releaseAsset(this.refAsset);
        console.log("onDestroy:",cc.assetManager.assets.count);
        this.refAsset = null;
        this.refAsset2 = null;
        cc.sys.garbageCollect();
    }
    // update (dt) {}
}
