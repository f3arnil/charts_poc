
export const createAction = (actionName) => {
  return {
    REQUEST: `${actionName}_REQUEST`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`,
    STATUS: `${actionName}_STATUS`,
    BEGIN: `${actionName}_BEGIN`,
    END: `${actionName}_END`,
  };
};

export default createAction;
