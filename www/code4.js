gdjs.FailCode = {};
gdjs.FailCode.GDNewObjectObjects1= [];
gdjs.FailCode.GDNewObjectObjects2= [];
gdjs.FailCode.GDNewObject22Objects1= [];
gdjs.FailCode.GDNewObject22Objects2= [];
gdjs.FailCode.GDNewObject2Objects1= [];
gdjs.FailCode.GDNewObject2Objects2= [];
gdjs.FailCode.GDNewObject32Objects1= [];
gdjs.FailCode.GDNewObject32Objects2= [];
gdjs.FailCode.GDNewObject3Objects1= [];
gdjs.FailCode.GDNewObject3Objects2= [];
gdjs.FailCode.GDLaunchButtonObjects1= [];
gdjs.FailCode.GDLaunchButtonObjects2= [];
gdjs.FailCode.GDNewObject4Objects1= [];
gdjs.FailCode.GDNewObject4Objects2= [];
gdjs.FailCode.GDBurgerMenuButtonObjects1= [];
gdjs.FailCode.GDBurgerMenuButtonObjects2= [];
gdjs.FailCode.GDNewObject5Objects1= [];
gdjs.FailCode.GDNewObject5Objects2= [];
gdjs.FailCode.GDNewObject7Objects1= [];
gdjs.FailCode.GDNewObject7Objects2= [];
gdjs.FailCode.GDNewObject8Objects1= [];
gdjs.FailCode.GDNewObject8Objects2= [];
gdjs.FailCode.GDpos3Objects1= [];
gdjs.FailCode.GDpos3Objects2= [];
gdjs.FailCode.GDpos2Objects1= [];
gdjs.FailCode.GDpos2Objects2= [];
gdjs.FailCode.GDposObjects1= [];
gdjs.FailCode.GDposObjects2= [];
gdjs.FailCode.GDposname3Objects1= [];
gdjs.FailCode.GDposname3Objects2= [];
gdjs.FailCode.GDposname2Objects1= [];
gdjs.FailCode.GDposname2Objects2= [];
gdjs.FailCode.GDposnameObjects1= [];
gdjs.FailCode.GDposnameObjects2= [];

gdjs.FailCode.conditionTrue_0 = {val:false};
gdjs.FailCode.condition0IsTrue_0 = {val:false};
gdjs.FailCode.condition1IsTrue_0 = {val:false};
gdjs.FailCode.condition2IsTrue_0 = {val:false};


gdjs.FailCode.mapOfGDgdjs_46FailCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.FailCode.GDNewObject4Objects1});gdjs.FailCode.mapOfGDgdjs_46FailCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.FailCode.GDNewObject5Objects1});gdjs.FailCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.FailCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject32"), gdjs.FailCode.GDNewObject32Objects1);
gdjs.copyArray(runtimeScene.getObjects("pos"), gdjs.FailCode.GDposObjects1);
gdjs.copyArray(runtimeScene.getObjects("pos2"), gdjs.FailCode.GDpos2Objects1);
gdjs.copyArray(runtimeScene.getObjects("pos3"), gdjs.FailCode.GDpos3Objects1);
gdjs.copyArray(runtimeScene.getObjects("posname"), gdjs.FailCode.GDposnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("posname2"), gdjs.FailCode.GDposname2Objects1);
gdjs.copyArray(runtimeScene.getObjects("posname3"), gdjs.FailCode.GDposname3Objects1);
{for(var i = 0, len = gdjs.FailCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.FailCode.GDNewObject3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.FailCode.GDNewObject32Objects1.length ;i < len;++i) {
    gdjs.FailCode.GDNewObject32Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.FailCode.GDposObjects1.length ;i < len;++i) {
    gdjs.FailCode.GDposObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.FailCode.GDpos2Objects1.length ;i < len;++i) {
    gdjs.FailCode.GDpos2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("pos2")));
}
}{for(var i = 0, len = gdjs.FailCode.GDposname3Objects1.length ;i < len;++i) {
    gdjs.FailCode.GDposname3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("posname3")));
}
}{for(var i = 0, len = gdjs.FailCode.GDposname2Objects1.length ;i < len;++i) {
    gdjs.FailCode.GDposname2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("posname2")));
}
}{for(var i = 0, len = gdjs.FailCode.GDpos3Objects1.length ;i < len;++i) {
    gdjs.FailCode.GDpos3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("pos3")));
}
}{for(var i = 0, len = gdjs.FailCode.GDposnameObjects1.length ;i < len;++i) {
    gdjs.FailCode.GDposnameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("posname")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.FailCode.GDNewObject4Objects1);

gdjs.FailCode.condition0IsTrue_0.val = false;
gdjs.FailCode.condition1IsTrue_0.val = false;
{
gdjs.FailCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FailCode.mapOfGDgdjs_46FailCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FailCode.condition0IsTrue_0.val ) {
{
gdjs.FailCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.FailCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.FailCode.GDNewObject5Objects1);

gdjs.FailCode.condition0IsTrue_0.val = false;
gdjs.FailCode.condition1IsTrue_0.val = false;
{
gdjs.FailCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FailCode.mapOfGDgdjs_46FailCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FailCode.condition0IsTrue_0.val ) {
{
gdjs.FailCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.FailCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{


gdjs.FailCode.condition0IsTrue_0.val = false;
{
gdjs.FailCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FailCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__CameraShake__StopShaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.FailCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FailCode.GDNewObjectObjects1.length = 0;
gdjs.FailCode.GDNewObjectObjects2.length = 0;
gdjs.FailCode.GDNewObject22Objects1.length = 0;
gdjs.FailCode.GDNewObject22Objects2.length = 0;
gdjs.FailCode.GDNewObject2Objects1.length = 0;
gdjs.FailCode.GDNewObject2Objects2.length = 0;
gdjs.FailCode.GDNewObject32Objects1.length = 0;
gdjs.FailCode.GDNewObject32Objects2.length = 0;
gdjs.FailCode.GDNewObject3Objects1.length = 0;
gdjs.FailCode.GDNewObject3Objects2.length = 0;
gdjs.FailCode.GDLaunchButtonObjects1.length = 0;
gdjs.FailCode.GDLaunchButtonObjects2.length = 0;
gdjs.FailCode.GDNewObject4Objects1.length = 0;
gdjs.FailCode.GDNewObject4Objects2.length = 0;
gdjs.FailCode.GDBurgerMenuButtonObjects1.length = 0;
gdjs.FailCode.GDBurgerMenuButtonObjects2.length = 0;
gdjs.FailCode.GDNewObject5Objects1.length = 0;
gdjs.FailCode.GDNewObject5Objects2.length = 0;
gdjs.FailCode.GDNewObject7Objects1.length = 0;
gdjs.FailCode.GDNewObject7Objects2.length = 0;
gdjs.FailCode.GDNewObject8Objects1.length = 0;
gdjs.FailCode.GDNewObject8Objects2.length = 0;
gdjs.FailCode.GDpos3Objects1.length = 0;
gdjs.FailCode.GDpos3Objects2.length = 0;
gdjs.FailCode.GDpos2Objects1.length = 0;
gdjs.FailCode.GDpos2Objects2.length = 0;
gdjs.FailCode.GDposObjects1.length = 0;
gdjs.FailCode.GDposObjects2.length = 0;
gdjs.FailCode.GDposname3Objects1.length = 0;
gdjs.FailCode.GDposname3Objects2.length = 0;
gdjs.FailCode.GDposname2Objects1.length = 0;
gdjs.FailCode.GDposname2Objects2.length = 0;
gdjs.FailCode.GDposnameObjects1.length = 0;
gdjs.FailCode.GDposnameObjects2.length = 0;

gdjs.FailCode.eventsList0(runtimeScene);
return;

}

gdjs['FailCode'] = gdjs.FailCode;
