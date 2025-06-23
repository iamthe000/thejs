const storedLists = {};

export function theif(conditions, actions) {
  for (let i = 0; i < conditions.length; i++) {
    const cond = conditions[i];
    const result = typeof cond === "function" ? cond() : cond;
    if (result === true || result === "else") {
      actions[i]();
      return;
    }
  }
  if (actions.length === conditions.length + 1) {
    actions[conditions.length]();
  }
}

export function thefor(count, action) {
  if (count === "infinity") {
    while (true) {
      action();
    }
  } else {
    for (let i = 0; i < count; i++) {
      action(i);
    }
  }
}

export function thelist(name, items) {
  if (Array.isArray(items)) {
    storedLists[name] = items;
    items.forEach((item) => {
      document.write(`${item}<br>`);
    });
  }
}

export function getFromList(name, index) {
  if (!storedLists[name]) {
    return null;
  }
  if (index === undefined) {
    document.write(`${storedLists[name].join('<br>')}<br>`);
    return storedLists[name];
  }
  const item = storedLists[name][index - 1] !== undefined ? storedLists[name][index - 1] : null;
  document.write(`${item}<br>`);
  return item;
}

export function addToList(name, item) {
  if (!storedLists[name]) {
    storedLists[name] = [];
  }
  storedLists[name].push(item);
  document.write(`${item}<br>`);
}

export function removeFromList(name, index) {
  if (storedLists[name] && storedLists[name][index - 1] !== undefined) {
    const removedItem = storedLists[name].splice(index - 1, 1);
    document.write(`Removed: ${removedItem}<br>`);
  }
}
