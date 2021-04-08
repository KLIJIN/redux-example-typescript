import { Action, ActionType } from "../actions/";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[]; //означает массив строк
}

const initialStore = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: RepositoriesState = initialStore, action: Action): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      console.log("action: -->", action);
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
