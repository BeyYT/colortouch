gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDNewObjectaObjects1= [];
gdjs.Main_32MenuCode.GDNewObjectaObjects2= [];
gdjs.Main_32MenuCode.GDNewObjectObjects1= [];
gdjs.Main_32MenuCode.GDNewObjectObjects2= [];
gdjs.Main_32MenuCode.GDNewObject2Objects1= [];
gdjs.Main_32MenuCode.GDNewObject2Objects2= [];
gdjs.Main_32MenuCode.GDNewObject3Objects1= [];
gdjs.Main_32MenuCode.GDNewObject3Objects2= [];
gdjs.Main_32MenuCode.GDNewObject4Objects1= [];
gdjs.Main_32MenuCode.GDNewObject4Objects2= [];
gdjs.Main_32MenuCode.GDNewObject5Objects1= [];
gdjs.Main_32MenuCode.GDNewObject5Objects2= [];
gdjs.Main_32MenuCode.GDNewObject6Objects1= [];
gdjs.Main_32MenuCode.GDNewObject6Objects2= [];
gdjs.Main_32MenuCode.GDNewObject7Objects1= [];
gdjs.Main_32MenuCode.GDNewObject7Objects2= [];
gdjs.Main_32MenuCode.GDNewObject8Objects1= [];
gdjs.Main_32MenuCode.GDNewObject8Objects2= [];
gdjs.Main_32MenuCode.GDosverObjects1= [];
gdjs.Main_32MenuCode.GDosverObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.Main_32MenuCode.GDNewObject2Objects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.Main_32MenuCode.GDNewObject7Objects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Main_32MenuCode.GDNewObjectObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 2));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "13545SAKURA HZ - CHILL.MP3", 2, true, 5, 1);
}}

}


};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Main_32MenuCode.GDNewObject2Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.Main_32MenuCode.GDNewObject7Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "shopp1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Main_32MenuCode.GDNewObjectObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("str", "points", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{gdjs.evtsExt__CameraShake__StopShaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.adMob.setupBanner("ca-app-pub-1132060138444437/4995218020", "", true);
}{gdjs.adMob.showBanner();
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Main_32MenuCode.GDNewObjectObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDNewObjectObjects1[i].getY() >= 1100 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDNewObjectObjects1[k] = gdjs.Main_32MenuCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDNewObjectObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObjectObjects1[i].setY(-(100));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Main_32MenuCode.GDNewObjectObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDNewObjectObjects1[i].getX() >= 600 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDNewObjectObjects1[k] = gdjs.Main_32MenuCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDNewObjectObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObjectObjects1[i].setX(-(100));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Main_32MenuCode.GDNewObjectObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDNewObjectObjects1[i].getX() <= -(200) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDNewObjectObjects1[k] = gdjs.Main_32MenuCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDNewObjectObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObjectObjects1[i].setX(599);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Main_32MenuCode.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.Main_32MenuCode.GDNewObject6Objects1);
gdjs.copyArray(runtimeScene.getObjects("osver"), gdjs.Main_32MenuCode.GDosverObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObject5Objects1[i].rotate(20, runtimeScene);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDNewObject6Objects1[i].rotate(20, runtimeScene);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDosverObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDosverObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDNewObjectaObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewObjectaObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject2Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject2Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject3Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject3Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject4Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject4Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject5Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject5Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject6Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject6Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject7Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject7Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewObject8Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewObject8Objects2.length = 0;
gdjs.Main_32MenuCode.GDosverObjects1.length = 0;
gdjs.Main_32MenuCode.GDosverObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
