export const EventComponent: React.FC = () => {
  const ChngeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input onChange={ChngeHandler} />
    </div>
  );
};
