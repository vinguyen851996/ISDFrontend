import React from 'react';

let LayoutStateContext = React.createContext();
let LayoutDispatchContext = React.createContext();

function layoutReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({ children }) {

  let [state, dispatch] = React.useReducer(layoutReducer, {
    isSidebarOpened: false,
  });
  return (
    <LayoutStateContext.Provider value={{ state: state }}>
      <LayoutDispatchContext.Provider value={{ dispatch: dispatch }}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

function useLayoutState() {
  let context = React.useContext(LayoutStateContext);

  if (context === undefined) {
    throw new Error('useLayoutState must be used within a LayoutProvider');
  }
  return context;
}

function useLayoutDispatch() {
  let context = React.useContext(LayoutDispatchContext);
  // console.log(context)
  if (context === undefined) {
    throw new Error('useLayoutDispatch must be used within a LayoutProvider');
  }
  return context;
}

const toggleSidebar = (dispatch) => {
  
  dispatch.dispatch({
    type: 'TOGGLE_SIDEBAR',
  });
  // console.log(dispatch)
};

export {
  LayoutProvider,
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
  LayoutStateContext,
};
