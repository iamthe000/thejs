export function theif(conditions, actions) {
    for (let i = 0; i < conditions.length; i++) {
      const cond = conditions[i];
      if (typeof cond === "function" ? cond() : cond.toLowerCase() === "else") {
        actions[i]();
        return;
      }
    }
    if (actions.length === conditions.length + 1) {
      actions[conditions.length]();
    }
  }
  
  export function thefor(count, action) {
    if (count === "i") {
      while (true) {
        action();
      }
    } else {
      for (let i = 0; i < count; i++) {
        action(i);
      }
    }
  }
  
