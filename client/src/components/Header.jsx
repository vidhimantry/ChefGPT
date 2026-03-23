import Logo from "./logo.png"
export default function Header() {
  
  return (
    <header className="header">
        <img src={Logo} alt="logo" />
        <div>
            <h1>ChefGPT</h1>
            <h4>You bring the ingredients, we bring the magic!</h4>
        </div>
    </header>
  );
}
