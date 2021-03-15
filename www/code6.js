gdjs.shopp2Code = {};
gdjs.shopp2Code.GDNewObjectObjects1= [];
gdjs.shopp2Code.GDNewObjectObjects2= [];
gdjs.shopp2Code.GDNewObject2Objects1= [];
gdjs.shopp2Code.GDNewObject2Objects2= [];
gdjs.shopp2Code.GDNewObject3Objects1= [];
gdjs.shopp2Code.GDNewObject3Objects2= [];
gdjs.shopp2Code.GDNewObject4Objects1= [];
gdjs.shopp2Code.GDNewObject4Objects2= [];
gdjs.shopp2Code.GDRightArrowRoundButtonObjects1= [];
gdjs.shopp2Code.GDRightArrowRoundButtonObjects2= [];
gdjs.shopp2Code.GDLeftArrowRoundButtonObjects1= [];
gdjs.shopp2Code.GDLeftArrowRoundButtonObjects2= [];
gdjs.shopp2Code.GDNewObject5Objects1= [];
gdjs.shopp2Code.GDNewObject5Objects2= [];
gdjs.shopp2Code.GDNewObject6Objects1= [];
gdjs.shopp2Code.GDNewObject6Objects2= [];

gdjs.shopp2Code.conditionTrue_0 = {val:false};
gdjs.shopp2Code.condition0IsTrue_0 = {val:false};
gdjs.shopp2Code.condition1IsTrue_0 = {val:false};
gdjs.shopp2Code.condition2IsTrue_0 = {val:false};


gdjs.shopp2Code.mapOfGDgdjs_46shopp2Code_46GDLeftArrowRoundButtonObjects1Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.shopp2Code.GDLeftArrowRoundButtonObjects1});gdjs.shopp2Code.mapOfGDgdjs_46shopp2Code_46GDRightArrowRoundButtonObjects1Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.shopp2Code.GDRightArrowRoundButtonObjects1});gdjs.shopp2Code.mapOfGDgdjs_46shopp2Code_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.shopp2Code.GDNewObject4Objects1});gdjs.shopp2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.shopp2Code.GDLeftArrowRoundButtonObjects1);

gdjs.shopp2Code.condition0IsTrue_0.val = false;
gdjs.shopp2Code.condition1IsTrue_0.val = false;
{
gdjs.shopp2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.shopp2Code.mapOfGDgdjs_46shopp2Code_46GDLeftArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.shopp2Code.condition0IsTrue_0.val ) {
{
gdjs.shopp2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.shopp2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "shopp1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.shopp2Code.GDRightArrowRoundButtonObjects1);

gdjs.shopp2Code.condition0IsTrue_0.val = false;
gdjs.shopp2Code.condition1IsTrue_0.val = false;
{
gdjs.shopp2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.shopp2Code.mapOfGDgdjs_46shopp2Code_46GDRightArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.shopp2Code.condition0IsTrue_0.val ) {
{
gdjs.shopp2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.shopp2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "shopp3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.shopp2Code.GDNewObject4Objects1);

gdjs.shopp2Code.condition0IsTrue_0.val = false;
gdjs.shopp2Code.condition1IsTrue_0.val = false;
{
gdjs.shopp2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.shopp2Code.mapOfGDgdjs_46shopp2Code_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.shopp2Code.condition0IsTrue_0.val ) {
{
gdjs.shopp2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.shopp2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "buy", false);
}}

}


};

gdjs.shopp2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.shopp2Code.GDNewObjectObjects1.length = 0;
gdjs.shopp2Code.GDNewObjectObjects2.length = 0;
gdjs.shopp2Code.GDNewObject2Objects1.length = 0;
gdjs.shopp2Code.GDNewObject2Objects2.length = 0;
gdjs.shopp2Code.GDNewObject3Objects1.length = 0;
gdjs.shopp2Code.GDNewObject3Objects2.length = 0;
gdjs.shopp2Code.GDNewObject4Objects1.length = 0;
gdjs.shopp2Code.GDNewObject4Objects2.length = 0;
gdjs.shopp2Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.shopp2Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.shopp2Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.shopp2Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.shopp2Code.GDNewObject5Objects1.length = 0;
gdjs.shopp2Code.GDNewObject5Objects2.length = 0;
gdjs.shopp2Code.GDNewObject6Objects1.length = 0;
gdjs.shopp2Code.GDNewObject6Objects2.length = 0;

gdjs.shopp2Code.eventsList0(runtimeScene);
return;

}

gdjs['shopp2Code'] = gdjs.shopp2Code;
