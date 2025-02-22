export default function Nav() {
  return (
    <div className="absolute w-screen top-0 left-0">
      <nav className="flex flex-row justify-between mt-2 container mx-auto px-4">
        <a
          href="#"
          className="text-lg font-semibold hover:text-muted-foreground"
        >
          CHARLYE CASTRO
        </a>
        <ul className="hidden md:flex flex-row gap-2">
          <li>
            <a href="#" className="leading-7 hover:text-muted-foreground">
              About
            </a>
          </li>
          <li>
            <a href="#" className="leading-7 hover:text-muted-foreground">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="leading-7 hover:text-muted-foreground">
              Resume
            </a>
          </li>
        </ul>
        <div class="menu-icon md:hidden">&#9776;</div>
      </nav>
    </div>
  );
}
