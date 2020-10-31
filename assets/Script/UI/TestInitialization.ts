// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestInitialization extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    @property(cc.Sprite)
    testSprite :cc.Sprite = null;

    onLoad () {
        console.log("TestInitialization.onLoad:",cc.assetManager.assets.count);
        let Loader:any = cc.loader;
        console.log("TestInitialization.onLoad2:",Object.keys(Loader._cache).length);
        cc.assetManager.assets.forEach((val,key)=>{
            console.log("key:",key);
            console.log("val:",(<cc.Asset>val).refCount);
        });
        /*cc.resources.load("Sprite/LargeTestImage1",cc.SpriteFrame, (err,sf:cc.SpriteFrame)=>{
            if(err){
                console.log("err:",err);
                return;
            }
            sf.nativeUrl = "Sprite/LargeTestImage";
            console.log("sf:",(<any>sf)._uuid);
            sf.addRef();
            console.log("sf:",sf.refCount);
            console.log("sf:",sf.getTexture().width);
            console.log("sf:",cc.assetManager.assets.count);
            let Loader:any = cc.loader;
            console.log("sf2:",Object.keys(Loader._cache).length);
            //this.refAsset = sf;
            this.testSprite.spriteFrame = sf;

            
        });*/
    }

    onGcClick(){
        cc.sys.garbageCollect();
        cc.assetManager.assets.forEach((val,key)=>{
            console.log("key:",key);
            console.log("val:",(<cc.Asset>val).refCount);
        })
        console.log("TestInitialization.onGcClick:",cc.assetManager.assets.count);
    }

    onNextClick(){
        cc.director.loadScene("TestScene01");
    }

    onBackClick(){
        cc.director.loadScene("TestScene");
    }

    start () {

    }

    // update (dt) {}
}
