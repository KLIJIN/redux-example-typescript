import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import searchRepositories from "../state/action-creators/";

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState<string>("");

  const dispatch = useDispatch();

  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchRepositories(term));
  };
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        <button> Искать </button>
      </form>
    </div>
  );
};

export default RepositoriesList;

// onClick={clickFunc}
