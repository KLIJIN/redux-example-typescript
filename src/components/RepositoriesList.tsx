import { FC, useState } from "react";
// import { useDispatch } from "react-redux";
// import searchRepositories from "../state/action-creators/";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState<string>("");

  const state = useSelector((state) => state);
  const repositories = useTypedSelector((state) => state.repositories);
  const { data } = useSelector((state: any) => state.repositories);
  const { error, loading } = useTypedSelector((state) => state.repositories);

  console.log("State: --> ", state);
  console.log("repositories: --> ", repositories);
  console.log("Slice of State: --> ", data);

  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();

  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(searchRepositories(term));
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        <button> Искать </button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((item: string) => <div key={item}>{item}</div>)}
    </div>
  );
};

export default RepositoriesList;

// onClick={clickFunc}
