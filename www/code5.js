gdjs.shopp3Code = {};
gdjs.shopp3Code.GDNewObjectObjects1= [];
gdjs.shopp3Code.GDNewObjectObjects2= [];
gdjs.shopp3Code.GDNewObject2Objects1= [];
gdjs.shopp3Code.GDNewObject2Objects2= [];
gdjs.shopp3Code.GDNewObject3Objects1= [];
gdjs.shopp3Code.GDNewObject3Objects2= [];
gdjs.shopp3Code.GDNewObject4Objects1= [];
gdjs.shopp3Code.GDNewObject4Objects2= [];
gdjs.shopp3Code.GDLeftArrowRoundButtonObjects1= [];
gdjs.shopp3Code.GDLeftArrowRoundButtonObjects2= [];
gdjs.shopp3Code.GDRightArrowRoundButtonObjects1= [];
gdjs.shopp3Code.GDRightArrowRoundButtonObjects2= [];
gdjs.shopp3Code.GDNewObject5Objects1= [];
gdjs.shopp3Code.GDNewObject5Objects2= [];

gdjs.shopp3Code.conditionTrue_0 = {val:false};
gdjs.shopp3Code.condition0IsTrue_0 = {val:false};
gdjs.shopp3Code.condition1IsTrue_0 = {val:false};
gdjs.shopp3Code.condition2IsTrue_0 = {val:false};


gdjs.shopp3Code.mapOfGDgdjs_46shopp3Code_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.shopp3Code.GDNewObject4Objects1});gdjs.shopp3Code.mapOfGDgdjs_46shopp3Code_46GDLeftArrowRoundButtonObjects1Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.shopp3Code.GDLeftArrowRoundButtonObjects1});gdjs.shopp3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.shopp3Code.GDNewObject4Objects1);

gdjs.shopp3Code.condition0IsTrue_0.val = false;
gdjs.shopp3Code.condition1IsTrue_0.val = false;
{
gdjs.shopp3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.shopp3Code.mapOfGDgdjs_46shopp3Code_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.shopp3Code.condition0IsTrue_0.val ) {
{
gdjs.shopp3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.shopp3Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "buy", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.shopp3Code.GDLeftArrowRoundButtonObjects1);

gdjs.shopp3Code.condition0IsTrue_0.val = false;
gdjs.shopp3Code.condition1IsTrue_0.val = false;
{
gdjs.shopp3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.shopp3Code.mapOfGDgdjs_46shopp3Code_46GDLeftArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.shopp3Code.condition0IsTrue_0.val ) {
{
gdjs.shopp3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.shopp3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "shopp2", false);
}}

}


};

gdjs.shopp3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.shopp3Code.GDNewObjectObjects1.length = 0;
gdjs.shopp3Code.GDNewObjectObjects2.length = 0;
gdjs.shopp3Code.GDNewObject2Objects1.length = 0;
gdjs.shopp3Code.GDNewObject2Objects2.length = 0;
gdjs.shopp3Code.GDNewObject3Objects1.length = 0;
gdjs.shopp3Code.GDNewObject3Objects2.length = 0;
gdjs.shopp3Code.GDNewObject4Objects1.length = 0;
gdjs.shopp3Code.GDNewObject4Objects2.length = 0;
gdjs.shopp3Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.shopp3Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.shopp3Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.shopp3Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.shopp3Code.GDNewObject5Objects1.length = 0;
gdjs.shopp3Code.GDNewObject5Objects2.length = 0;

gdjs.shopp3Code.eventsList0(runtimeScene);
return;

}

gdjs['shopp3Code'] = gdjs.shopp3Code;
