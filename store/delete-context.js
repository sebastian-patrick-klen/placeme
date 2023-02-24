import { createContext, useState } from 'react';

const DeleteContext = createContext({
  newId: null,
  setNewId: function (pos) {},
});

export function DeleteContextProvider({ children }) {
  const [newId, setId] = useState(null);

  function setIdFunc(id) {
    setId(id);
  }

  const context = {
    newId: newId,
    setNewId: setIdFunc,
  };

  return (
    <DeleteContext.Provider value={context}>{children}</DeleteContext.Provider>
  );
}

export default DeleteContext;
