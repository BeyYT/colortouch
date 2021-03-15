gdjs.buyCode = {};
gdjs.buyCode.GDNewObjectObjects1= [];
gdjs.buyCode.GDNewObjectObjects2= [];
gdjs.buyCode.GDNewObject2Objects1= [];
gdjs.buyCode.GDNewObject2Objects2= [];
gdjs.buyCode.GDNewObject3Objects1= [];
gdjs.buyCode.GDNewObject3Objects2= [];
gdjs.buyCode.GDNewObject5Objects1= [];
gdjs.buyCode.GDNewObject5Objects2= [];
gdjs.buyCode.GDNewObject4Objects1= [];
gdjs.buyCode.GDNewObject4Objects2= [];
gdjs.buyCode.GDNewObject6Objects1= [];
gdjs.buyCode.GDNewObject6Objects2= [];
gdjs.buyCode.GDNewObject7Objects1= [];
gdjs.buyCode.GDNewObject7Objects2= [];

gdjs.buyCode.conditionTrue_0 = {val:false};
gdjs.buyCode.condition0IsTrue_0 = {val:false};
gdjs.buyCode.condition1IsTrue_0 = {val:false};
gdjs.buyCode.condition2IsTrue_0 = {val:false};
gdjs.buyCode.condition3IsTrue_0 = {val:false};
gdjs.buyCode.condition4IsTrue_0 = {val:false};


gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.buyCode.GDNewObject4Objects1});gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.buyCode.GDNewObject4Objects1});gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.buyCode.GDNewObject4Objects1});gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.buyCode.GDNewObject5Objects1});gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.buyCode.GDNewObject5Objects1});gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.buyCode.GDNewObject5Objects1});gdjs.buyCode.eventsList0 = function(runtimeScene) {

{


gdjs.buyCode.condition0IsTrue_0.val = false;
{
gdjs.buyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.buyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.buyCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.buyCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.buyCode.GDNewObject2Objects1[i].setString("200");
}
}}

}


{


gdjs.buyCode.condition0IsTrue_0.val = false;
{
gdjs.buyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}if (gdjs.buyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.buyCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.buyCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.buyCode.GDNewObject2Objects1[i].setString("100");
}
}}

}


{


gdjs.buyCode.condition0IsTrue_0.val = false;
{
gdjs.buyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
}if (gdjs.buyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.buyCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.buyCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.buyCode.GDNewObject2Objects1[i].setString("500");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.buyCode.GDNewObject4Objects1);

gdjs.buyCode.condition0IsTrue_0.val = false;
gdjs.buyCode.condition1IsTrue_0.val = false;
gdjs.buyCode.condition2IsTrue_0.val = false;
gdjs.buyCode.condition3IsTrue_0.val = false;
{
gdjs.buyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.buyCode.condition0IsTrue_0.val ) {
{
gdjs.buyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.buyCode.condition1IsTrue_0.val ) {
{
gdjs.buyCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.buyCode.condition2IsTrue_0.val ) {
{
gdjs.buyCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 200;
}}
}
}
if (gdjs.buyCode.condition3IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("str", "HT", 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(200);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "points", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "shopp1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.buyCode.GDNewObject4Objects1);

gdjs.buyCode.condition0IsTrue_0.val = false;
gdjs.buyCode.condition1IsTrue_0.val = false;
gdjs.buyCode.condition2IsTrue_0.val = false;
gdjs.buyCode.condition3IsTrue_0.val = false;
{
gdjs.buyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.buyCode.condition0IsTrue_0.val ) {
{
gdjs.buyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.buyCode.condition1IsTrue_0.val ) {
{
gdjs.buyCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}if ( gdjs.buyCode.condition2IsTrue_0.val ) {
{
gdjs.buyCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 100;
}}
}
}
if (gdjs.buyCode.condition3IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("str", "X2", 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(100);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "points", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "shopp2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.buyCode.GDNewObject4Objects1);

gdjs.buyCode.condition0IsTrue_0.val = false;
gdjs.buyCode.condition1IsTrue_0.val = false;
gdjs.buyCode.condition2IsTrue_0.val = false;
gdjs.buyCode.condition3IsTrue_0.val = false;
{
gdjs.buyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.buyCode.condition0IsTrue_0.val ) {
{
gdjs.buyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.buyCode.condition1IsTrue_0.val ) {
{
gdjs.buyCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
}if ( gdjs.buyCode.condition2IsTrue_0.val ) {
{
gdjs.buyCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 500;
}}
}
}
if (gdjs.buyCode.condition3IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("str", "DT", 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(500);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "points", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "shopp3", false);
}}

}


{


gdjs.buyCode.condition0IsTrue_0.val = false;
{
gdjs.buyCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 99;
}if (gdjs.buyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.buyCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.buyCode.GDNewObject6Objects1);
{for(var i = 0, len = gdjs.buyCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.buyCode.GDNewObject4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.buyCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.buyCode.GDNewObject6Objects1[i].setString("you dont have \n enough points.");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.buyCode.GDNewObject5Objects1);

gdjs.buyCode.condition0IsTrue_0.val = false;
gdjs.buyCode.condition1IsTrue_0.val = false;
gdjs.buyCode.condition2IsTrue_0.val = false;
{
gdjs.buyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.buyCode.condition0IsTrue_0.val ) {
{
gdjs.buyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.buyCode.condition1IsTrue_0.val ) {
{
gdjs.buyCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
}}
}
if (gdjs.buyCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "shopp3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.buyCode.GDNewObject5Objects1);

gdjs.buyCode.condition0IsTrue_0.val = false;
gdjs.buyCode.condition1IsTrue_0.val = false;
gdjs.buyCode.condition2IsTrue_0.val = false;
{
gdjs.buyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.buyCode.condition0IsTrue_0.val ) {
{
gdjs.buyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.buyCode.condition1IsTrue_0.val ) {
{
gdjs.buyCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}}
}
if (gdjs.buyCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "shopp2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.buyCode.GDNewObject5Objects1);

gdjs.buyCode.condition0IsTrue_0.val = false;
gdjs.buyCode.condition1IsTrue_0.val = false;
gdjs.buyCode.condition2IsTrue_0.val = false;
{
gdjs.buyCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.buyCode.mapOfGDgdjs_46buyCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.buyCode.condition0IsTrue_0.val ) {
{
gdjs.buyCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.buyCode.condition1IsTrue_0.val ) {
{
gdjs.buyCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}}
}
if (gdjs.buyCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "shopp1", false);
}}

}


};

gdjs.buyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.buyCode.GDNewObjectObjects1.length = 0;
gdjs.buyCode.GDNewObjectObjects2.length = 0;
gdjs.buyCode.GDNewObject2Objects1.length = 0;
gdjs.buyCode.GDNewObject2Objects2.length = 0;
gdjs.buyCode.GDNewObject3Objects1.length = 0;
gdjs.buyCode.GDNewObject3Objects2.length = 0;
gdjs.buyCode.GDNewObject5Objects1.length = 0;
gdjs.buyCode.GDNewObject5Objects2.length = 0;
gdjs.buyCode.GDNewObject4Objects1.length = 0;
gdjs.buyCode.GDNewObject4Objects2.length = 0;
gdjs.buyCode.GDNewObject6Objects1.length = 0;
gdjs.buyCode.GDNewObject6Objects2.length = 0;
gdjs.buyCode.GDNewObject7Objects1.length = 0;
gdjs.buyCode.GDNewObject7Objects2.length = 0;

gdjs.buyCode.eventsList0(runtimeScene);
return;

}

gdjs['buyCode'] = gdjs.buyCode;
