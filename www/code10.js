gdjs.CreditsCode = {};
gdjs.CreditsCode.GDNewObjectObjects1= [];
gdjs.CreditsCode.GDNewObjectObjects2= [];
gdjs.CreditsCode.GDNewObject2Objects1= [];
gdjs.CreditsCode.GDNewObject2Objects2= [];
gdjs.CreditsCode.GDNewObject3Objects1= [];
gdjs.CreditsCode.GDNewObject3Objects2= [];
gdjs.CreditsCode.GDNewObject4Objects1= [];
gdjs.CreditsCode.GDNewObject4Objects2= [];
gdjs.CreditsCode.GDNewObject5Objects1= [];
gdjs.CreditsCode.GDNewObject5Objects2= [];
gdjs.CreditsCode.GDNewObject6Objects1= [];
gdjs.CreditsCode.GDNewObject6Objects2= [];
gdjs.CreditsCode.GDNewObject7Objects1= [];
gdjs.CreditsCode.GDNewObject7Objects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};
gdjs.CreditsCode.condition2IsTrue_0 = {val:false};


gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.CreditsCode.GDNewObject6Objects1});gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.adMob.hideBanner();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.CreditsCode.GDNewObject6Objects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDNewObject6Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.CreditsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDNewObjectObjects1.length = 0;
gdjs.CreditsCode.GDNewObjectObjects2.length = 0;
gdjs.CreditsCode.GDNewObject2Objects1.length = 0;
gdjs.CreditsCode.GDNewObject2Objects2.length = 0;
gdjs.CreditsCode.GDNewObject3Objects1.length = 0;
gdjs.CreditsCode.GDNewObject3Objects2.length = 0;
gdjs.CreditsCode.GDNewObject4Objects1.length = 0;
gdjs.CreditsCode.GDNewObject4Objects2.length = 0;
gdjs.CreditsCode.GDNewObject5Objects1.length = 0;
gdjs.CreditsCode.GDNewObject5Objects2.length = 0;
gdjs.CreditsCode.GDNewObject6Objects1.length = 0;
gdjs.CreditsCode.GDNewObject6Objects2.length = 0;
gdjs.CreditsCode.GDNewObject7Objects1.length = 0;
gdjs.CreditsCode.GDNewObject7Objects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
