import Todo from './component/Todo';

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text='work' />
      <Todo text='programming' />
      <Todo text='speaking' />
    </div>
  );
}

export default App;
