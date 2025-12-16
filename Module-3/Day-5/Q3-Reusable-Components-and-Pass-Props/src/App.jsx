import MessageCard from "./MessageCard";

function App() {
  return (
    <>
      <h1>Story Title & Messages</h1>
      <MessageCard
        title="The Boy Who Cried Wolf"
        message="Lying destroys trust; people won't believe you when you tell the truth."
      />
      <MessageCard
        title="The Monkey and the Crocodile"
        message="Cleverness and quick thinking can outsmart brute force."
      />
      <MessageCard
        title="The Glass of Water (a parable)"
        message="Letting go of worries is essential; holding onto stress makes it feel heavier over time."
      />
      <MessageCard
        title="The Golden Egg (or The Goose that Laid the Golden Egg)"
        message="Greed leads to loss; don't destroy your source of wealth for quick riches."
      />
      <MessageCard
        title="The Crow and the Pitcher (or The Crow and the Jar)"
        message="Where there's a will, there's a way; persistence and smart thinking overcome obstacles."
      />
    </>
  );
}

export default App;
