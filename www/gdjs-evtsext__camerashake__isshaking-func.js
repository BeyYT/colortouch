gdjs.evtsExt__CameraShake__IsShaking = {};

gdjs.evtsExt__CameraShake__IsShaking.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__IsShaking.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__IsShaking.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__CameraShake__IsShaking.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__IsShaking.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__IsShaking.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress")) == 1;
}if (gdjs.evtsExt__CameraShake__IsShaking.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__CameraShake__IsShaking.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CameraShake__IsShaking.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

