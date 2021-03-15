gdjs.shopp1Code = {};
gdjs.shopp1Code.GDNewObjectObjects1= [];
gdjs.shopp1Code.GDNewObjectObjects2= [];
gdjs.shopp1Code.GDNewObject2Objects1= [];
gdjs.shopp1Code.GDNewObject2Objects2= [];
gdjs.shopp1Code.GDNewObject3Objects1= [];
gdjs.shopp1Code.GDNewObject3Objects2= [];
gdjs.shopp1Code.GDNewObject4Objects1= [];
gdjs.shopp1Code.GDNewObject4Objects2= [];
gdjs.shopp1Code.GDRightArrowRoundButtonObjects1= [];
gdjs.shopp1Code.GDRightArrowRoundButtonObjects2= [];
gdjs.shopp1Code.GDNewObject5Objects1= [];
gdjs.shopp1Code.GDNewObject5Objects2= [];
gdjs.shopp1Code.GDBurgerMenuButtonObjects1= [];
gdjs.shopp1Code.GDBurgerMenuButtonObjects2= [];
gdjs.shopp1Code.GDNewObject6Objects1= [];
gdjs.shopp1Code.GDNewObject6Objects2= [];

gdjs.shopp1Code.conditionTrue_0 = {val:false};
gdjs.shopp1Code.condition0IsTrue_0 = {val:false};
gdjs.shopp1Code.condition1IsTrue_0 = {val:false};
gdjs.shopp1Code.condition2IsTrue_0 = {val:false};


gdjs.shopp1Code.mapOfGDgdjs_46shopp1Code_46GDRightArrowRoundButtonObjects1Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.shopp1Code.GDRightArrowRoundButtonObjects1});gdjs.shopp1Code.mapOfGDgdjs_46shopp1Code_46GDBurgerMenuButtonObjects1Objects = Hashtable.newFrom({"BurgerMenuButton": gdjs.shopp1Code.GDBurgerMenuButtonObjects1});gdjs.shopp1Code.mapOfGDgdjs_46shopp1Code_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.shopp1Code.GDNewObject4Objects1});gdjs.shopp1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.shopp1Code.GDRightArrowRoundButtonObjects1);

gdjs.shopp1Code.condition0IsTrue_0.val = false;
gdjs.shopp1Code.condition1IsTrue_0.val = false;
{
gdjs.shopp1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.shopp1Code.mapOfGDgdjs_46shopp1Code_46GDRightArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.shopp1Code.condition0IsTrue_0.val ) {
{
gdjs.shopp1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.shopp1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "shopp2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BurgerMenuButton"), gdjs.shopp1Code.GDBurgerMenuButtonObjects1);

gdjs.shopp1Code.condition0IsTrue_0.val = false;
gdjs.shopp1Code.condition1IsTrue_0.val = false;
{
gdjs.shopp1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.shopp1Code.mapOfGDgdjs_46shopp1Code_46GDBurgerMenuButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.shopp1Code.condition0IsTrue_0.val ) {
{
gdjs.shopp1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.shopp1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.shopp1Code.GDNewObject4Objects1);

gdjs.shopp1Code.condition0IsTrue_0.val = false;
gdjs.shopp1Code.condition1IsTrue_0.val = false;
{
gdjs.shopp1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.shopp1Code.mapOfGDgdjs_46shopp1Code_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.shopp1Code.condition0IsTrue_0.val ) {
{
gdjs.shopp1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.shopp1Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "buy", false);
}}

}


{


gdjs.shopp1Code.condition0IsTrue_0.val = false;
{
gdjs.shopp1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.shopp1Code.condition0IsTrue_0.val) {
{gdjs.adMob.hideBanner();
}}

}


};

gdjs.shopp1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.shopp1Code.GDNewObjectObjects1.length = 0;
gdjs.shopp1Code.GDNewObjectObjects2.length = 0;
gdjs.shopp1Code.GDNewObject2Objects1.length = 0;
gdjs.shopp1Code.GDNewObject2Objects2.length = 0;
gdjs.shopp1Code.GDNewObject3Objects1.length = 0;
gdjs.shopp1Code.GDNewObject3Objects2.length = 0;
gdjs.shopp1Code.GDNewObject4Objects1.length = 0;
gdjs.shopp1Code.GDNewObject4Objects2.length = 0;
gdjs.shopp1Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.shopp1Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.shopp1Code.GDNewObject5Objects1.length = 0;
gdjs.shopp1Code.GDNewObject5Objects2.length = 0;
gdjs.shopp1Code.GDBurgerMenuButtonObjects1.length = 0;
gdjs.shopp1Code.GDBurgerMenuButtonObjects2.length = 0;
gdjs.shopp1Code.GDNewObject6Objects1.length = 0;
gdjs.shopp1Code.GDNewObject6Objects2.length = 0;

gdjs.shopp1Code.eventsList0(runtimeScene);
return;

}

gdjs['shopp1Code'] = gdjs.shopp1Code;
