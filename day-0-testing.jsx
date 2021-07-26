const name = "Peter";
const title1 = <h1>Hello, {name}</h1>;

const morning = false;
const tittle = (
    <h1>
        {morning ? "Hello" : "Good evening"}, {name}
    </h1>
);

const Title = () => {
    const name = "Peter";
    return <h1>Hello, {name}</h1>;
};

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-item">About</div>
            <div className="menu-item">Portfolio</div>
            <div className="menu-item">Contacts</div>
        </div>
    );
};

const Header = () => {
    return (
      <div className="header">
        <Title />
        <Menu />
      </div>
    );
  };

