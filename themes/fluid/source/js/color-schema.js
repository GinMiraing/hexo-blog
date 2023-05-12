const rootElement = document.documentElement;
const colorSchemaStorageKey = 'Fluid_Color_Scheme';
const userColorSchemaAttributeName = 'data-user-color-scheme';
const colorToggleIconSelector = '#color-toggle-icon';
const validColorSchemaKeys = {
  dark: true,
  light: true
};
const invertColorSchemaObj = {
  dark: 'light',
  light: 'dark'
};

function setLS(k, v) {
  try {
    localStorage.setItem(k, v);
  } catch (e) {}
}

function removeLS(k) {
  try {
    localStorage.removeItem(k);
  } catch (e) {}
}

function getLS(k) {
  try {
    return localStorage.getItem(k);
  } catch (e) {
    return null;
  }
}

function resetSchemaAttributeAndLS() {
  removeLS(colorSchemaStorageKey);
}

function getDefaultColorSchema() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getIconClass(scheme) {
  return 'icon-' + scheme;
}

function setButtonIcon(schema) {
  if (validColorSchemaKeys[schema]) {
    var icon = getIconClass(schema);
    var iconElement = document.querySelector(colorToggleIconSelector);
    if (iconElement) {
      iconElement.setAttribute(
        'class',
        'iconfont ' + icon
      );
      iconElement.setAttribute(
        'data',
        invertColorSchemaObj[schema]
      );
    } else {
      Fluid.utils.waitElementLoaded(colorToggleIconSelector, function() {
        var iconElement = document.querySelector(colorToggleIconSelector);
        if (iconElement) {
          iconElement.setAttribute(
            'class',
            'iconfont ' + icon
          );
          iconElement.setAttribute(
            'data',
            invertColorSchemaObj[schema]
          );
        }
      });
    }
  }
}

function applyCustomColorSchemaSettings(schema) {
  var current = schema || getLS(colorSchemaStorageKey) || getDefaultColorSchema();

  if (validColorSchemaKeys[current]) {
    rootElement.setAttribute(userColorSchemaAttributeName, current);
  } else {
      resetRootDarkModeAttributeAndLS();
  }

  setButtonIcon(current);
}

function toggleCustomColorSchema() {
  var currentSetting = getLS(colorSchemaStorageKey);

  if (validColorSchemaKeys[currentSetting]) {
    currentSetting = invertColorSchemaObj[currentSetting];
  } else if (currentSetting === null) {
    currentSetting = invertColorSchemaObj[getDefaultColorSchema()];
  } else {
    return;
  }
  setLS(colorSchemaStorageKey, currentSetting);
  setButtonIcon(currentSetting);

  return currentSetting;
}

applyCustomColorSchemaSettings();
