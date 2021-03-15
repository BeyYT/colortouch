gdjs.evtsExt__CameraShake__onScenePostEvents = {};

gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")) > 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_InitialCameraRotation")), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) > 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_InitialCameraZoom")), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) > 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementX").setNumber((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) * gdjs.randomWithStep(-(1), 1, 2));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) > 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementY").setNumber((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) * gdjs.randomWithStep(-(1), 1, 2));
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_AngleCounter")), 2) == 0);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementAngle").setNumber((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")));
}}

}


{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_AngleCounter")), 2) == 1);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementAngle").setNumber(-(1) * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")));
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ZoomCounter")), 2) == 0);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementZoom").setNumber((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) * (1 / 100));
}}

}


{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ZoomCounter")), 2) == 1);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementZoom").setNumber(-(1) * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) * (1 / 100));
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) > 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) > 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")) > 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_AngleCounter").add(1);
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) > 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_ZoomCounter").add(1);
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_InitialShake")) == 1;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")), "__CameraShake_ShakeTimer");
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_InitialShake").setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__CameraShake_ShakeTimer");
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")) / 2, "__CameraShake_ShakeTimer"));
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("__CameraShake_ProgressAmplitudeMultiplier").setNumber(2 - (2 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_ShakeTimer")) / (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")))));
}}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")) / 2, "__CameraShake_ShakeTimer");
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("__CameraShake_ProgressAmplitudeMultiplier").setNumber(2 * (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_ShakeTimer")) / (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes"))));
}}

}


{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) > 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) > 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) + ((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementX")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_ProgressAmplitudeMultiplier")))), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) + ((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementY")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_ProgressAmplitudeMultiplier")))), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")) > 0);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_InitialCameraRotation")) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementAngle")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_ProgressAmplitudeMultiplier"))), "", 0);
}}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) > 0);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_InitialCameraZoom")) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementZoom")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_ProgressAmplitudeMultiplier"))), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")), "__CameraShake_DurationTimer");
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress")) == -(1);
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(10477620);
}
}}
if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress")) == 1;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList6(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CameraShake__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList7(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerRuntimeScenePostEventsCallback(function(runtimeScene) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.func(runtimeScene, runtimeScene);
});
