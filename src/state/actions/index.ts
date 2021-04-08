export enum ActionType {
  SEARCH_REPOSITORIES = "search_repositories",
  SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
  SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

//--------------------------------------------------------------------------------------------------------------------

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesActionSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[]; //означает массив чисел
}

interface SearchRepositoriesActionError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = SearchRepositoriesAction | SearchRepositoriesActionSuccess | SearchRepositoriesActionError;

//--------------------------------------------------------------------------------------------------------------------
