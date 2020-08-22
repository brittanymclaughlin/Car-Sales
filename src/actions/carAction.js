export const addFeatureItem = (infoNewFeature) => {
    console.log("Dispatching ADD_FEATURE_ITEM action");
    return { type: "ADD_FEATURE", payload:infoNewFeature };
};

export const delFeatureItem = (infoNewFeature) => {
    console.log("Dispatching DELETE_FEATURE action");
    return { type: "DELETE_FEATURE", payload:infoNewFeature};
};