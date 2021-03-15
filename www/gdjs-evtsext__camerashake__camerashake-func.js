gdjs.evtsExt__CameraShake__CameraShake = {};

gdjs.evtsExt__CameraShake__CameraShake.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__CameraShake.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__CameraShake.conditionTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__CameraShake.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__CameraShake__CameraShake.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__CameraShake.conditionTrue_1 = gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__CameraShake.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")) > 0);
}
}if (gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_InitialCameraRotation").setNumber(gdjs.evtTools.camera.getCameraRotation(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)));
}}

}


{



}


{


gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__CameraShake.conditionTrue_1 = gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__CameraShake.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) > 0);
}
}if (gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_InitialCameraZoom").setNumber(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / gdjs.evtTools.camera.getCameraWidth(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)));
}}

}


{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementX").setNumber(0);
}{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementY").setNumber(0);
}}

}


};gdjs.evtsExt__CameraShake__CameraShake.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__CameraShake_DurationTimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__CameraShake_ShakeTimer");
}}

}


{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_PowerX").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerX")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_PowerY").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerY")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_Layer").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{runtimeScene.getGame().getVariables().get("__CameraShake_Camera").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_Duration").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerAngle")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerZoom")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TimeBetweenShakes")) || 0 : 0));
}}

}


{



}


{



}


{



}


{



}


{



}


{


gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) == 0;
}if (gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_Duration").setNumber(0.5);
}}

}


{


gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")) == 0;
}if (gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes").setNumber(0.08);
}}

}


{



}


{


gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress")) == 0;
}if (gdjs.evtsExt__CameraShake__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_InitialShake").setNumber(1);
}
{ //Subevents
gdjs.evtsExt__CameraShake__CameraShake.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress").setNumber(1);
}}

}


};gdjs.evtsExt__CameraShake__CameraShake.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__CameraShake.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CameraShake__CameraShake.func = function(runtimeScene, PowerX, PowerY, Layer, Camera, Duration, PowerAngle, PowerZoom, TimeBetweenShakes, parentEventsFunctionContext) {
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
if (argName === "PowerX") return PowerX;
if (argName === "PowerY") return PowerY;
if (argName === "Layer") return Layer;
if (argName === "Camera") return Camera;
if (argName === "Duration") return Duration;
if (argName === "PowerAngle") return PowerAngle;
if (argName === "PowerZoom") return PowerZoom;
if (argName === "TimeBetweenShakes") return TimeBetweenShakes;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__CameraShake.eventsList2(runtimeScene, eventsFunctionContext);
return;
}

